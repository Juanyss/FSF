package com.FSF.StockControl.implementations;

import com.FSF.StockControl.domain.Item;
import com.FSF.StockControl.domain.Product;
import com.FSF.StockControl.domain.ShoppingCart;
import com.FSF.StockControl.interfaces.ShoppingCartService;
import com.FSF.StockControl.repositories.ItemRepository;
import com.FSF.StockControl.repositories.ProductRepository;
import com.FSF.StockControl.repositories.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ShoppingCartServiceImp implements ShoppingCartService {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ItemImp itemImp;


    @Override
    public List<Item> findAll(String client){
        return this.shoppingCartRepository.showAllItems(client);
    }

    @Override
    public List<Item> addProduct(String client, Long productId, Integer quantity){
        if (this.shoppingCartRepository.findOne(client) == null){
            ShoppingCart shoppingCart = new ShoppingCart(client);
            checkForItem(shoppingCart, productId, quantity);
            this.shoppingCartRepository.save(shoppingCart);
            return this.shoppingCartRepository.showAllItems(client);


        } else {
            ShoppingCart shoppingCart = this.shoppingCartRepository.findOne(client);
            checkForItem(shoppingCart, productId, quantity);
            this.shoppingCartRepository.save(shoppingCart);
            return this.shoppingCartRepository.showAllItems(client);
        }
    }

    @Override
    public List<Item> updateQuantity(String client, Long productId, Integer quantity) {
        ShoppingCart shoppingCart = this.shoppingCartRepository.findOne(client);
        shoppingCart.getItem(productId).setQuantity(quantity);
        this.shoppingCartRepository.save(shoppingCart);
        return this.shoppingCartRepository.showAllItems(client);
    }

    @Override
    public List<Item> deleteItem(String client,Long productId){
        ShoppingCart shoppingCart = this.shoppingCartRepository.findOne(client);
        if(shoppingCart.existsProduct(productId)){
            shoppingCart.getItemList().remove(shoppingCart.getItem(productId));
        }
        this.shoppingCartRepository.save(shoppingCart);
        return this.shoppingCartRepository.showAllItems(client);
    }

    @Override
    public void clearShoppingCart(String client){
        ShoppingCart shoppingCart = this.shoppingCartRepository.findOne(client);
        shoppingCart.getItemList().removeAll(shoppingCart.getItemList());
        this.shoppingCartRepository.save(shoppingCart);
    }

    @Override
    public Double totalAmount(String client){
        List<Item> itemList = this.shoppingCartRepository.showAllItems(client);
        Double totalAmount = 0.0;
        for(Integer i = 0; i < itemList.size();i++){
            totalAmount += itemList.get(i).getProduct().getPrice() * itemList.get(i).getQuantity();
        }
        return totalAmount;
    }






    private void checkForItem(ShoppingCart shoppingCart, Long productId, Integer quantity){
        if(shoppingCart.existsProduct(productId)){
            if(quantity < 0){
                shoppingCart.getItem(productId).downQuantity(quantity);
            }else{
                shoppingCart.getItem(productId).updateQuantity(quantity);
            }
        }else{
            if(quantity > 0) {
                Product product = this.productRepository.findOne(productId);
                shoppingCart.getItemList().add(new Item(shoppingCart,product, quantity));
            }
        }

    }


}
