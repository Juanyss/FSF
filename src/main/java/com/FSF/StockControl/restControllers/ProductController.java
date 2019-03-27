package com.FSF.StockControl.restControllers;

import com.FSF.StockControl.domain.Product;
import com.FSF.StockControl.implementations.ProductServiceImp;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private ProductServiceImp productServiceImp;

    public ProductController(ProductServiceImp productServiceImp) {
        this.productServiceImp = productServiceImp;
    }

    @GetMapping("")
    public List<Product> showAllProducts() {
        return this.productServiceImp.findAll();
    }

    @GetMapping("/{id}")
    public Product showOneProduct(@PathVariable("id") Long id) {
        return this.productServiceImp.findOne(id);
    }

    @PostMapping("")
    public void NewProduct(@RequestBody Product product) {
        this.productServiceImp.newProduct(product);
    }

    @DeleteMapping({"/{id}"})
    public void deleteProduct(@PathVariable("id") Long id) {
        this.productServiceImp.delete(id);
    }

    @PutMapping("/{id}")
    public void updateProduct(@PathVariable("id") Long id, @RequestBody Product product){
        this.productServiceImp.updateProduct(id,product.getName(),product.getDetail(),product.getType(),
                product.getStock(),product.getCost(),product.getAux(),product.getPrice());
    }

}