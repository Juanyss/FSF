package com.FSF.StockControl.webControllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BudgetWC {

    @GetMapping(value = "/presupuesto")
    public String budgetTemplate() {
        return "budget";
    }
}
