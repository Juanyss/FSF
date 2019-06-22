package com.FSF.StockControl.restControllers;

import com.FSF.StockControl.domain.Item;
import com.FSF.StockControl.implementations.ShoppingCartServiceImp;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@PreAuthorize("hasAnyRole('ADMIN')")
@RequestMapping("/api/shoppingcart")
public class ShoppingCartController {
    private ShoppingCartServiceImp shoppingCartServiceImp;

    public ShoppingCartController(ShoppingCartServiceImp shoppingCartServiceImp) {
        this.shoppingCartServiceImp = shoppingCartServiceImp;
    }

    @GetMapping("/{client}")
    public List<Item> showAllItems(@PathVariable("client") String client) {
        return this.shoppingCartServiceImp.findAll(client);
    }


    @PostMapping("/{client}/{productId}")
    public List<Item> addItem(@RequestBody Item item, @PathVariable("client") String client,
                        @PathVariable("productId") Long productId) {
        return this.shoppingCartServiceImp.addProduct(client,productId,item.getQuantity());
    }

    @DeleteMapping({"/{client}/{productId}"})
    public List<Item> deleteItem(@PathVariable("client") String client,@PathVariable("productId") Long productId) {
        return this.shoppingCartServiceImp.deleteItem(client,productId);
    }

    @DeleteMapping({"/{client}"})
    public void clearShoppingCart(@PathVariable("client") String client) {
        this.shoppingCartServiceImp.clearShoppingCart(client);
    }

    @PutMapping({"/{client}/{productId}"})
    public List<Item> updateItemQuantity(@RequestBody Item item,@PathVariable("client") String client,
                                  @PathVariable("productId") Long productId) {
        return this.shoppingCartServiceImp.updateQuantity(client,productId,item.getQuantity());
    }

    @GetMapping("total/{client}")
    public Double totalAmount(@PathVariable("client") String client) {
        return this.shoppingCartServiceImp.totalAmount(client);
    }
}
