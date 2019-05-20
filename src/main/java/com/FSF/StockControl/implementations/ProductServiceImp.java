package com.FSF.StockControl.implementations;

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
        Product p = new Product(product.getName(),product.getType(),product.getDetail(),product.getStock().intValue(),
                product.getCost().doubleValue(),this.distributorRepository.findOne(product.getAux().longValue()),
                product.getPrice().doubleValue());
        this.productRepository.save(p);

        return true;
    }

    @Override
    public void delete(Long id) {
        this.productRepository.deleteById(id);
    }


    @Override
    public void updateProduct(Long id,Product product) {
        Product p = this.productRepository.findOne(id);
        p.setName(product.getName());
        p.setDetail(product.getDetail());
        p.setType(product.getType());
        p.setStock(product.getStock());
        p.setCost(product.getCost());
        p.setDistributor(this.distributorRepository.findOne(product.getAux()));
        p.setPrice(product.getPrice());
        this.productRepository.save(p);

    }

    @Override
    public List<Product> productSearch(String name){
        if(this.productRepository.productSearch(name).isEmpty()){
            return this.productRepository.findAll();
        }else{
            return this.productRepository.productSearch(name);
        }
    }
}
