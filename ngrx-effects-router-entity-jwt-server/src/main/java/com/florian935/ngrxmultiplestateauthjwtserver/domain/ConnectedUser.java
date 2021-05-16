package com.florian935.ngrxmultiplestateauthjwtserver.domain;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.Collections;

public class ConnectedUser extends User {
    public ConnectedUser(String username) {
        super(username, "", Collections.emptyList());
    }

    public ConnectedUser(com.florian935.ngrxmultiplestateauthjwtserver.domain.User user) {
        super(user.getUsername(), user.getPassword(), Collections.emptyList());
    }

    public ConnectedUser(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
    }

    public ConnectedUser(String username, String password, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
    }
}
