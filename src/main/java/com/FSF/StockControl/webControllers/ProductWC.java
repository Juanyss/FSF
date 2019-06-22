package com.FSF.StockControl.webControllers;


import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProductWC {


    @GetMapping(value = "/products")
    public String listProducts() {
        return "products";
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/newBudget")
    public String newBudget() {
        return "newBudget";
    }
}
