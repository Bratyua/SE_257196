package com.example.demo.security;

import jakarta.servlet.DispatcherType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.example.demo.security.jwt.JwtAuthEntryPoint;
import com.example.demo.security.jwt.JwtAuthTokenFilter;
import com.example.demo.security.services.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class WebSecurityConfig {

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtAuthEntryPoint unauthorizedHandler;

    @Autowired
    public JwtAuthTokenFilter jwtAuthTokenFilter;

    @Bean
    DaoAuthenticationProvider authProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests((auth) -> auth
                        // Next line iss added to allow Spring reach .jsp pages
                        // that should be visible to all users according to the following rules
                        // The reason is that in 6.0, the authorization filter is run for all dispatcher
                        // types,
                        // including FORWARD. This means that the JSP that is forwarded, also needs to
                        // be permitted.
                        .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
                        .requestMatchers("/").permitAll()
                        .requestMatchers("/auth/**").permitAll()
                        .requestMatchers("/error").permitAll()
                        .requestMatchers(HttpMethod.GET, "/student").hasAnyRole("USER", "ADMIN", "MODERATOR")
                        .requestMatchers(HttpMethod.POST, "/addStudent.html").hasAnyRole("ADMIN", "MODERATOR")
                        .requestMatchers(HttpMethod.GET, "/students", "/students/**").hasAnyRole("USER", "ADMIN", "MODERATOR")
                        .requestMatchers(HttpMethod.POST, "/students", "/students/**").hasAnyRole("ADMIN", "MODERATOR")
                        .requestMatchers(HttpMethod.PUT, "/students", "/students/**").hasAnyRole("ADMIN", "MODERATOR")
                        .requestMatchers(HttpMethod.PATCH, "/students", "/students/**").hasAnyRole("ADMIN", "MODERATOR")
                        .requestMatchers(HttpMethod.DELETE, "/students", "/students/**").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/faculties/test", "/faculties/test/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/universities/test").permitAll()
                        .requestMatchers(HttpMethod.GET, "/faculties", "/faculties/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/faculties", "/faculties/**").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/faculties", "/faculties/**").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/universities", "/universities/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/universities", "/universities/**").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/universities", "/universities/**").hasRole("ADMIN")
                        .requestMatchers("/exampleSecurity/user").hasAnyRole("USER", "ADMIN")
                        .requestMatchers("/exampleSecurity/admin").hasRole("ADMIN")
                        .requestMatchers("/admin/**").hasRole("ADMIN")
                        .anyRequest().authenticated())
                // To disable anonymous user authentication. This forces all users to
                // authenticate, blocking access
                // to public, non-credentialed sessions and ensuring only authorized users
                // access resources.
                // .anonymous((anonymous) -> anonymous.disable())
                .exceptionHandling(unauthorized -> unauthorized
                        .authenticationEntryPoint(unauthorizedHandler))
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(jwtAuthTokenFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
