package com.FSF.StockControl.repositories;

import com.FSF.StockControl.domain.Distributor;
import com.FSF.StockControl.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("select p from Product p where p.id = :id")
    Product findOne(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query("update Product p SET p.name = :name, p.detail = :detail,"
            + "p.type = :type, p.stock = :stock, p.cost = :cost, p.distributor = :distributor,"
            + "p.price = :price where p.idProduct = :id")
    void updateProduct(@Param("id") Long id,
                              @Param("name") String name,
                              @Param("detail") String detail,
                              @Param("type") String type,
                              @Param("stock") Integer stock,
                              @Param("cost") Double cost,
                              @Param("distributor") Distributor distributor,
                              @Param("price") Double price);

    @Query("select p from Product p where p.name like %:name%")
    List<Product> productSearch(@Param("name") String name);
}
