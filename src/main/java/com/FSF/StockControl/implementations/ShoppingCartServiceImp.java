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
    private ItemRepository itemRepository;


    @Override
    public List<Item> findAll(Long shoppingCartId){
        ShoppingCart shoppingCart = this.shoppingCartRepository.findOne(shoppingCartId);
        System.out.println("List size: "+ shoppingCart.getItemList().size());
        return this.shoppingCartRepository.showAllItems(shoppingCartId);
    }

    @Override
    public void addProduct(Long shoppingCartId, Long productId, Integer quantity){
        if (this.shoppingCartRepository.findOne(shoppingCartId) == null){
            ShoppingCart shoppingCart = new ShoppingCart(shoppingCartId);
            checkForItem(shoppingCart, productId, quantity);
            this.shoppingCartRepository.save(shoppingCart);


        } else {
            ShoppingCart shoppingCart = this.shoppingCartRepository.findOne(shoppingCartId);
            checkForItem(shoppingCart, productId, quantity);
            this.shoppingCartRepository.save(shoppingCart);
            shoppingCart = this.shoppingCartRepository.findOne(shoppingCartId);
        }

    }

    @Override
    public void deleteItem(Long shoppingCartId,Long productId){
        ShoppingCart shoppingCart = this.shoppingCartRepository.findOne(shoppingCartId);
        if(shoppingCart.existsProduct(productId)){
            shoppingCart.getItemList().remove(shoppingCart.getItem(productId));
        }
        this.shoppingCartRepository.save(shoppingCart);
    }

    @Override
    public void clearShoppingCart(Long shoppingCartId){
        ShoppingCart shoppingCart = this.shoppingCartRepository.findOne(shoppingCartId);
        shoppingCart.getItemList().removeAll(shoppingCart.getItemList());
        this.shoppingCartRepository.save(shoppingCart);
    }

    @Override
    public Double totalAmount(Long shoppingCartId){
        List<Item> itemList = this.shoppingCartRepository.showAllItems(shoppingCartId);
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
                shoppingCart.getItemList().add(new Item(product, quantity));
            }
        }

    }

}
