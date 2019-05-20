package com.FSF.StockControl.webControllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProductWC {


    @GetMapping(value = "/products")
    public String listProducts() {
        return "products";
    }
}
