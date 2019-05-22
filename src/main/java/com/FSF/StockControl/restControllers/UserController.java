package com.FSF.StockControl.restControllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("api/users")
public class UserController {

    @GetMapping("/logIn")
    public int displayHomePage(Principal user) {
        if (user != null) {
            return 1;
        }else{
            return 0;
        }

    }
}
