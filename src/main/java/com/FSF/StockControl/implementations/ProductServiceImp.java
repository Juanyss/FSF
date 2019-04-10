package com.FSF.StockControl.implementations;

import com.FSF.StockControl.domain.Distributor;
import com.FSF.StockControl.domain.Product;
import com.FSF.StockControl.interfaces.ProductService;
import com.FSF.StockControl.repositories.DistributorRepository;
import com.FSF.StockControl.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImp implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    DistributorRepository distributorRepository;

    public ProductServiceImp() {
    }

    @Override
    public List<Product> findAll() {
        return this.productRepository.findAll();
    }

    @Override
    public Product findOne(Long id) {
        return this.productRepository.findOne(id);
    }



    @Override
    public boolean newProduct(Product product){
        Product p = new Product(product.getName(),product.getType(),product.getDetail(),product.getStock(),product.getCost(),
                this.distributorRepository.findOne(product.getAux()),product.getPrice());
        this.productRepository.save(p);

        return true;
    }

    @Override
    public void delete(Long id) {
        this.productRepository.deleteById(id);
    }


    @Override
    public void updateProduct(Long id, String name, String detail, String type, Integer stock, Double cost,
                              Long aux, Double price) {
        Distributor distributor = this.distributorRepository.findOne(aux);
        this.productRepository.updateProduct(id,name,detail,type,stock,cost,distributor,price);
    }
}
