package com.cleanread.company.common.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.time.Duration;
import java.util.Date;
import java.util.function.Function;

/**
 * @project: backend
 * @author: Sarvar55
 */
@Component
@Slf4j
public class JwtUtil {
    @Value("${app.secretKey}")
    private String SECRET_KEY;
    @Value("${app.expiryDateMs}")
    private Long EXPIRED_TOKEN_MS;
    @Value("${app.jwtRefreshExpirationMs}")
    private Long EXPIRED_REFRESH_TOKEN_MS;

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public String extractEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        try {
            final Claims claims = extractAllClaims(token);
            return claimsResolver.apply(claims);
        } catch (MalformedJwtException e) {
            log.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            log.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            log.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            log.error("JWT claims string is empty: {}", e.getMessage());
        }
        return null;
    }

    public String generateToken(UserDetails userDetails) {
//        return Jwts
//                .builder()
//                .setSubject(((UserPrincipal) userDetails).getUser().getEmail())
//                .setIssuedAt(new Date(System.currentTimeMillis()))
//                .setExpiration(new Date(System.currentTimeMillis() + Duration.ofMinutes(EXPIRED_TOKEN_MS).toMillis()))
//                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
//                .compact();
        return null;
    }

    public String generateRefreshToken(String email) {
        return Jwts
                .builder()
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + Duration.ofMinutes(EXPIRED_REFRESH_TOKEN_MS).toMillis()))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

//    public String generateToken(UserDetails userDetails) {
//       // return generateToken(new HashMap<>(), userDetails);
//    }


//    public String generateToken(
//            Map<String, Object> extraClaims,
//            UserDetails userDetails
//    ) {
//        return Jwts
//                .builder()
//                .setClaims(extraClaims)
//                .setSubject(userDetails.getUsername())
//                .setIssuedAt(new Date(System.currentTimeMillis()))
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRED_TOKEN_MS))
//                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
//                .compact();
//    }



    public boolean isTokenValid(String token) {
        return !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        Date expirationDate = extractExpiration(token);
        if (expirationDate != null)
            return extractExpiration(token).before(new Date());
        return true;
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
