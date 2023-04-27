package com.toy.kongTown.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommonController {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

}
