package com.FSF.StockControl.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "Item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idItem;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idShoppingCart")
    private ShoppingCart shoppingCart;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idProduct")
    private Product product;
    private Integer quantity;

    public Item() {
    }

    public Item(Integer quantity) {
        this.quantity = quantity;
    }

    public Item(Product product, Integer quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public Long getIdShoppingCart() {
        return idItem;
    }

    public void setIdShoppingCart(Long idShoppingCart) {
        this.idItem = idShoppingCart;
    }

    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="idShoppingCart")
    @JsonIdentityReference(alwaysAsId = true)
    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="idProduct")
    @JsonIdentityReference(alwaysAsId = true)
    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }


    /**
     * Update quantity if there exist the product on the shopping cart
     * @param update
     */
    public void updateQuantity(Integer update){
        quantity = quantity + update;
    }

    public void downQuantity(Integer decrease){
        quantity = quantity + decrease;
        if(quantity <= 0){
            quantity = 0;
        }
    }
}
