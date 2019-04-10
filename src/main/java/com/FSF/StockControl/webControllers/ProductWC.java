package com.FSF.StockControl.webControllers;

import com.FSF.StockControl.implementations.ProductServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProductWC {

    @Autowired
    private ProductServiceImp productServiceImp;

    @GetMapping(value = "/products")
    public String listProducts(Model model) {
        model.addAttribute("product", this.productServiceImp.findAll());
        return "products";
    }
}
