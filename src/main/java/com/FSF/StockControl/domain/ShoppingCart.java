package com.FSF.StockControl.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ShoppingCart")
public class ShoppingCart {
    @Id
    private String client;

    @OneToMany(targetEntity=Item.class, cascade = CascadeType.ALL)
    private List<Item> itemList;

    public ShoppingCart() {
    }

    public ShoppingCart(String client) {
        this.client = client;
        this.itemList = new ArrayList<>();
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public List<Item> getItemList() {
        return itemList;
    }

    public void setItemList(List<Item> itemList) {
        this.itemList = itemList;
    }


    /**
     *
     * @param idProduct
     * @return true if the product exist in the list
     */
    public boolean existsProduct(Long idProduct) {
        return itemList.stream()
                .anyMatch(Item -> Item.getProduct().getIdProduct().equals(idProduct));
    }

    /**
     *
     * @param idProduct
     * @return the item with the idProduct
     */
    public Item getItem(Long idProduct){
        return itemList.stream().filter(Item -> Item.getProduct().getIdProduct().equals(idProduct)).findAny().get();
    }
}
