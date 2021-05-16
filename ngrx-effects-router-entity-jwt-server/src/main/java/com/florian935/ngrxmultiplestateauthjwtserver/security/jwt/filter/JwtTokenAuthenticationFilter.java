package com.florian935.ngrxmultiplestateauthjwtserver.security.jwt.filter;

import com.florian935.ngrxmultiplestateauthjwtserver.security.jwt.utils.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Configuration
@RequiredArgsConstructor
public class JwtTokenAuthenticationFilter extends OncePerRequestFilter {
    private static final String BEARER_PREFIX = "Bearer ";
    private static final int BEARER_LENGTH = BEARER_PREFIX.length();
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    protected void doFilterInternal(
            HttpServletRequest httpServletRequest,
            HttpServletResponse httpServletResponse,
            FilterChain filterChain) throws ServletException, IOException {
        final String token = resolveToken(httpServletRequest);
        if (StringUtils.hasText(token) && jwtTokenProvider.isValidToken(token)) {
            final Authentication authentication = jwtTokenProvider
                    .getAuthenticationFromToken(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }

    private String resolveToken(HttpServletRequest httpServletRequest) {
        final String bearerToken = httpServletRequest.getHeader(AUTHORIZATION);

        return StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER_PREFIX)
                ? bearerToken.substring((BEARER_LENGTH))
                : null;
    }
}
