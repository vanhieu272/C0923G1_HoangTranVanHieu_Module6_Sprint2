package com.example.sprint2_be.service.impl;

import com.example.sprint2_be.config.JwtUserDetails;
import com.example.sprint2_be.model.User;
import com.example.sprint2_be.repository.IUserRepository;
import com.example.sprint2_be.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserDetailsService,IUserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public void editUser(User user) {
        userRepository.save(user);
    }

    @Override
    public User findById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    @Transactional
    @Override
    public void saveNewPassword(User users) {
        User users1 = findById(users.getId());
        String password = passwordEncoder.encode(users.getPassword());
        users1.setPassword(password);
        userRepository.saveNewPassword(users1.getId(), users1.getPassword());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException("Not found" + username);
        }
        List<GrantedAuthority> grantedAuthorities =new ArrayList<>();
        String role = user.getRole().getName();
        grantedAuthorities.add(new SimpleGrantedAuthority(role));
        return new JwtUserDetails(user.getId(),user.getUsername(),user.getPassword(),grantedAuthorities);
    }
}
