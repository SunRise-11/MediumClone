package com.cleanread.company.security;

import com.cleanread.company.common.util.JwtUtil;
import com.cleanread.company.security.user.UserDetailService;
import com.cleanread.company.security.user.UserPrincipal;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Service
@AllArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final UserDetailService userDetailService;
    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        logger.info("Jwt Filter çalişmaya başladı");
        try {
            String token = parseAuthHeader(request);
            if (token != null && jwtUtil.isTokenValid(token)) {
                String username = jwtUtil.extractUsername(token);
                UserPrincipal userPrincipal = (UserPrincipal) userDetailService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userPrincipal,
                        null, userPrincipal.getAuthorities());
                authenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        } catch (Exception exception) {
            logger.error("Cannot set user authentication: {}", exception);
        }
        filterChain.doFilter(request, response);
    }

    public String parseAuthHeader(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        return authHeader != null ? authHeader.substring(7) : null;
    }
}
