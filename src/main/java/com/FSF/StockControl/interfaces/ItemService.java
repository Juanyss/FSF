package com.FSF.StockControl.interfaces;

import com.FSF.StockControl.domain.Item;
import com.FSF.StockControl.domain.Product;
import com.FSF.StockControl.domain.ShoppingCart;

import java.util.List;

public interface ItemService {

    List<Item> showAllItemsPerClient(ShoppingCart client);

    Item showOneItem(ShoppingCart client, Product product);

    boolean addItem(Item item, Long idProduct);

    void deleteItemFromBudget(ShoppingCart client, Product product);

    //void updateShoppingCart(Long id, Integer quantity);
}
