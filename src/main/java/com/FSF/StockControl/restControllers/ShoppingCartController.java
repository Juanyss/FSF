package com.FSF.StockControl.restControllers;

import com.FSF.StockControl.domain.Item;
import com.FSF.StockControl.implementations.ShoppingCartServiceImp;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shoppingcart")
public class ShoppingCartController {
    private ShoppingCartServiceImp shoppingCartServiceImp;

    public ShoppingCartController(ShoppingCartServiceImp shoppingCartServiceImp) {
        this.shoppingCartServiceImp = shoppingCartServiceImp;
    }

    @GetMapping("/{shoppingCartId}")
    public List<Item> showAllItems(@PathVariable("shoppingCartId") Long shoppingCartId) {
        return this.shoppingCartServiceImp.findAll(shoppingCartId);
    }


    @PostMapping("/{shoppingCartId}/{productId}")
    public void addItem(@RequestBody Item item, @PathVariable("shoppingCartId") Long shoppingCartId,
                        @PathVariable("productId") Long productId) {
        this.shoppingCartServiceImp.addProduct(shoppingCartId,productId,item.getQuantity());
    }

    @DeleteMapping({"/{shoppingCartId}/{productId}"})
    public void deleteItem(@PathVariable("shoppingCartId") Long shoppingCartId,@PathVariable("productId") Long productId) {
        this.shoppingCartServiceImp.deleteItem(shoppingCartId,productId);
    }

    @DeleteMapping({"/{shoppingCartId}"})
    public void clearShoppingCart(@PathVariable("shoppingCartId") Long shoppingCartId) {
        this.shoppingCartServiceImp.clearShoppingCart(shoppingCartId);
    }

    @GetMapping("total/{shoppingCartId}")
    public Double totalAmount(@PathVariable("shoppingCartId") Long shoppingCartId) {
        return this.shoppingCartServiceImp.totalAmount(shoppingCartId);
    }
}
