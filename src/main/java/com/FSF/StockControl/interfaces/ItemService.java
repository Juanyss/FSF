package com.FSF.StockControl.interfaces;

import com.FSF.StockControl.domain.Item;

import java.util.List;

public interface ItemService {

    List<Item> findAll();

    boolean addItem(Item item, Long idProduct);

    void delete(Long id);

    //void updateShoppingCart(Long id, Integer quantity);
}
