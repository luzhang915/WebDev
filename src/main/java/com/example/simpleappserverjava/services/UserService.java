package com.example.simpleappserverjava.services;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.simpleappserverjava.models.User;

@RestController
public class UserService {
	// http://localhost:8080/register
	
	@PostMapping("/register")
	public User register(@RequestBody User user) {
		return user;
	}
}
