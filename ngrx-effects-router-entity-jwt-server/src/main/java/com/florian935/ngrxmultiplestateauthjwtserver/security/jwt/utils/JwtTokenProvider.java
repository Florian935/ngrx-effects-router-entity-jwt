package com.florian935.ngrxmultiplestateauthjwtserver.security.jwt.utils;

import com.florian935.ngrxmultiplestateauthjwtserver.domain.ConnectedUser;
import com.florian935.ngrxmultiplestateauthjwtserver.domain.User;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Collections;
import java.util.Date;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtTokenProvider {
    private final JwtProperties jwtProperties;
    private SecretKey secretKey;

    @PostConstruct
    private void initSecretKey() {
        final String secret = Base64.getEncoder().encodeToString(jwtProperties.getSecretKey().getBytes(StandardCharsets.UTF_8));
        secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

    public String createToken(Authentication authentication) {
        final Claims claims = generateClaims(authentication);

        return createToken(claims);
    }

    private Claims generateClaims(Authentication authentication) {
        final String username = authentication.getName();
        final Claims claims = Jwts.claims().setSubject(username);

        return claims;
    }

    private String createToken(Claims claims) {
        final Date now = new Date();
        final Date validity = new Date(now.getTime() + jwtProperties.getValidityInMs());

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(secretKey, SignatureAlgorithm.HS512)
                .compact();
    }

    public Authentication getAuthenticationFromToken(String token) {
        final Claims claims = getClaimsFromToken(token);
        final ConnectedUser connectedUser = new ConnectedUser(claims.getSubject());

        return new UsernamePasswordAuthenticationToken(
                connectedUser,
                token,
                Collections.emptyList());
    }

    private Claims getClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();
    }

    public boolean isValidToken(String token) {
        try {
            validateToken(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            logError(e);
        }
        return false;
    }

    private void validateToken(String token) {
        final Jws<Claims> claims = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token);
    }

    private void logError(Exception e) {
        log.info("Invalid JWT token: {}", e.getMessage());
        log.trace("Invalid JWT token trace.", e);
    }
}
