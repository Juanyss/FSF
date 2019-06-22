package com.FSF.StockControl.interfaces;

import com.FSF.StockControl.domain.Item;

import java.util.List;

public interface ShoppingCartService {
    List<Item> findAll(String client);
    List<Item> addProduct(String client, Long productId, Integer quantity);

    List<Item> deleteItem(String client, Long productId);
    List<Item> updateQuantity(String client, Long productId, Integer quantity);

    void clearShoppingCart(String client);



    Double totalAmount(String client);
}
