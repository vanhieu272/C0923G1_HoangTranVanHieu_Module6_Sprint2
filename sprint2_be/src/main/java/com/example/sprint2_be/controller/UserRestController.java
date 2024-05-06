package com.example.sprint2_be.controller;


import com.example.sprint2_be.config.JwtTokenUtil;
import com.example.sprint2_be.config.JwtUserDetails;
import com.example.sprint2_be.model.Cart;
import com.example.sprint2_be.model.User;
import com.example.sprint2_be.response.JwtRequest;
import com.example.sprint2_be.response.JwtResponse;
import com.example.sprint2_be.service.ICartService;
import com.example.sprint2_be.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")
@RequestMapping("/api/user")
public class UserRestController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UserService userService;
    @Autowired
    private ICartService cartService;

    @PostMapping("/authen")
    public ResponseEntity<?> loginAuthentication(@RequestBody JwtRequest jwtRequest, HttpServletRequest httpServletRequest) throws Exception {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            JwtUserDetails jwtUserDetails = (JwtUserDetails) authentication.getPrincipal();
            GrantedAuthority grantedAuthority = jwtUserDetails.getAuthorities().stream().findFirst().get();
            String token = jwtTokenUtil.generateToken(jwtRequest.getUsername());
            HttpSession httpSession = httpServletRequest.getSession();
            if (httpSession.getAttribute("cart") != null) {
                List<Cart> carts = (List<Cart>) httpSession.getAttribute("cart");
                User user = userService.findByUsername(jwtUserDetails.getUsername());
                try {
                    cartService.deleteByUser(user);
                } catch (Exception e) {
                    throw e;
                }
                for (int i = 0; i < carts.size(); i++) {
                    cartService.createCart(user, carts.get(i).getAccessorySize(), carts.get(i).getQuantity());
                }
                httpSession.getAttribute("cart");
            }
            return ResponseEntity.ok(new JwtResponse(token, jwtUserDetails.getUsername(), grantedAuthority != null ? grantedAuthority.getAuthority() : null));
        } catch (BadCredentialsException e) {
            return ResponseEntity.badRequest().body("Login fail");
        }
    }

}
