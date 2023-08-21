package com.javatechie.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {

    private final String API_URL = "https://ddg-api.herokuapp.com/search";

    private final RestTemplate restTemplate;

    public ApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String makeApiRequest(String query) {
        String apiUrlWithParams = API_URL + "?query=" + query + "&limit=3";
        String response = restTemplate.getForObject(apiUrlWithParams, String.class);
        return response;
    }
}
