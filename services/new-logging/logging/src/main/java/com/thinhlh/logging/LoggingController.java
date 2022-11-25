package com.thinhlh.logging;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller()
public class LoggingController {
    @GetMapping("/")
    void log() {

    }
}
