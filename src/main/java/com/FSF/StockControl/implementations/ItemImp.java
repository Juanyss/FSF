package com.FSF.StockControl.implementations;

import com.FSF.StockControl.domain.Item;
import com.FSF.StockControl.interfaces.ItemService;
import com.FSF.StockControl.repositories.ProductRepository;
import com.FSF.StockControl.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemImp implements ItemService {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    ProductRepository productRepository;

    public ItemImp() {
    }

    @Autowired
    @Override
    public List<Item> findAll() {
        return (List<Item>) this.itemRepository.findAll();
    }

    @Override
    public boolean addItem(Item item, Long idProduct){
        Item sc = new Item();
        sc.setProduct(this.productRepository.findOne(idProduct));
        sc.setQuantity(item.getQuantity());
        this.itemRepository.save(sc);

        return true;
    }

    @Override
    public void delete(Long id) {
        this.itemRepository.deleteById(id);
    }

/*    @Override
    public void updateShoppingCart(Long id, Integer quantity) {
        this.itemRepository.updateShoppingCart(id,quantity);
    }*/
}
