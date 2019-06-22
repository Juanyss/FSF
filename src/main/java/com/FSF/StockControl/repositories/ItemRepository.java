package com.FSF.StockControl.repositories;

import com.FSF.StockControl.domain.Item;
import com.FSF.StockControl.domain.Product;
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

    @Query("select i, p.price,p.idProduct from Item i inner join Product p on i.product = p.idProduct where i.shoppingCart = :client")
    List<Item> showAllItemsPerClient(ShoppingCart client);

    @Query("select i from Item i where i.shoppingCart = :client and i.product = :product")
    Item showOneItem(ShoppingCart client, Product product);


    @Transactional
    @Modifying
    @Query("delete from Item i where i.shoppingCart = 'Juany' and i.product = 'ABM Distribuidores'")
    List<Item> deleteItemFromBudget(ShoppingCart client, Product product);

    @Query("select i from Item i where i.id = :id")
    Item findOne(@Param("id") Long id);

    //@Query("select i from Item i where i.shoppingCart = :idShoppingCart")
    //List<Item> showAllItems(ShoppingCart idShoppingCart);


}
