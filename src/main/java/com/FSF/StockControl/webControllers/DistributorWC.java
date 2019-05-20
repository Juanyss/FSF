package com.FSF.StockControl.webControllers;
import com.FSF.StockControl.implementations.DistributorServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DistributorWC {

    @Autowired
    private DistributorServiceImp distributorServiceImp;

    @GetMapping(value = "/distributors")
    public String distributorForm(Model model) {
        model.addAttribute("distributor", this.distributorServiceImp.findAll());
        return "distributor";
    }
}
