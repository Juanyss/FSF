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
    public List<Product> NewProduct(@RequestBody Product product) {
        this.productServiceImp.newProduct(product);
        return this.productServiceImp.findAll();
    }

    @DeleteMapping({"/{id}"})
    public List<Product> deleteProduct(@PathVariable("id") Long id) {
        this.productServiceImp.delete(id);
        return this.productServiceImp.findAll();
    }

    @PutMapping("/{id}")
    public @ResponseBody List<Product> updateProduct(@PathVariable("id") Long id, @RequestBody Product product){
        this.productServiceImp.updateProduct(id,product);
        return this.productServiceImp.findAll();
    }

    @PostMapping("/productSearch")
    public List<Product> showAllDistributors(@RequestBody Product product) {
        return this.productServiceImp.productSearch(product.getName());
    }

}
