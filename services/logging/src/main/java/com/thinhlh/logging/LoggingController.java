package com.thinhlh.logging;

import lombok.extern.java.Log;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Level;
import java.util.logging.Logger;

@RestController()
public class LoggingController {
    @GetMapping("/")
    void log() {
        Logger.getLogger(String.valueOf(LoggingController.class)).log(Level.INFO, "Ping");
    }
}
