package com.javatechie.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.service.ApiService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ApiController {

    private final ApiService apiService;

    public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/search")
    public String search(@RequestParam String query) {
        String response = apiService.makeApiRequest(query);
        return response;
    }
}

