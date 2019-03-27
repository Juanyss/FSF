package com.FSF.StockControl.interfaces;

import com.FSF.StockControl.domain.Item;

import java.util.List;

public interface ShoppingCartService {
    List<Item> findAll(Long shoppingCartId);
    void addProduct(Long shoppingCartId, Long productId, Integer quantity);

    void deleteItem(Long shoppingCartId, Long productId);
    void clearShoppingCart(Long shoppingCartId);



    Double totalAmount(Long shoppingCartId);
}
