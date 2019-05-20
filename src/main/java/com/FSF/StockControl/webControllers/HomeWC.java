package com.FSF.StockControl.webControllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeWC {

    @GetMapping(value = "/")
    public String home() {
        return "home";
    }
}
