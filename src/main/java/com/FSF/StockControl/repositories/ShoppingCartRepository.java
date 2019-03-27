package com.FSF.StockControl.repositories;

import com.FSF.StockControl.domain.Item;
import com.FSF.StockControl.domain.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, Long> {

    @Query("select sc.itemList from ShoppingCart sc where sc.idShoppingCart = :idShoppingCart")
    List<Item> showAllItems(Long idShoppingCart);


    @Query("select sc from ShoppingCart sc where sc.idShoppingCart = :id")
    ShoppingCart findOne(@Param("id") Long id);

    ShoppingCart save(ShoppingCart shoppingCart);

}
