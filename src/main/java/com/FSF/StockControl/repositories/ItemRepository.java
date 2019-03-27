package com.FSF.StockControl.repositories;

import com.FSF.StockControl.domain.Item;
import com.FSF.StockControl.domain.ShoppingCart;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {
    @Query("select i from Item i where i.id = :id")
    Item findOne(@Param("id") Long id);

    //@Query("select i from Item i where i.shoppingCart = :idShoppingCart")
    //List<Item> showAllItems(ShoppingCart idShoppingCart);


}
