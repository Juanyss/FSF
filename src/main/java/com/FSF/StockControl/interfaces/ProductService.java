package com.FSF.StockControl.interfaces;

import com.FSF.StockControl.domain.Distributor;
import com.FSF.StockControl.domain.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();

    boolean newProduct(Product product);

    void delete(Long id);

    Product findOne(Long id);

    void updateProduct(Long id, String name, String detail, String type, Integer stock, Double cost,
                       Long aux, Double price);
}
