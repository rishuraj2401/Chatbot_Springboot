package com.myproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.model.User;
import com.myproject.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class userController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        String emailId = user.getEmailId();
        String password = user.getPassword();

        User loggedInUser = userRepository.findByEmailIdAndPassword(emailId, password);



        if (loggedInUser == null  ) {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }

        return ResponseEntity.ok("Login successful");
    }


@PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User userDetail) {
	User userTemp=userRepository.findByEmailId(userDetail.getEmailId());
	if(userTemp==null) {
		userRepository.save(userDetail);
	 return ResponseEntity.ok("Registration Succesfull");
	 }
	return ResponseEntity.badRequest().body("Already Registered");
	 
	 }
}