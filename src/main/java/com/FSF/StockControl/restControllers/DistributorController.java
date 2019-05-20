package com.FSF.StockControl.restControllers;

import com.FSF.StockControl.domain.Distributor;
import com.FSF.StockControl.implementations.DistributorServiceImp;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/distributors")
public class DistributorController {
    private DistributorServiceImp distributorServiceImp;

    public DistributorController(DistributorServiceImp distributorServiceImp) {
        this.distributorServiceImp = distributorServiceImp;
    }

    @GetMapping("")
    public List<Distributor> showAllDistributors() {
        return this.distributorServiceImp.findAll();
    }

    @GetMapping("/{id}")
    public Distributor showOneDistributor(@PathVariable("id") Long id) {
        return this.distributorServiceImp.findOne(id);
    }

    @PostMapping("")
    public List<Distributor> NewUser(@RequestBody Distributor distributor) {
        this.distributorServiceImp.newDistributor(distributor);
        return this.distributorServiceImp.findAll();
    }

    @DeleteMapping("/{id}")
    public List<Distributor> deleteDistributor(@PathVariable("id") Long id) {
        this.distributorServiceImp.delete(id);
        return this.distributorServiceImp.findAll();
    }

    @PutMapping("/{id}")
    public List<Distributor> updateDistributor(@PathVariable("id") Long id,@RequestBody Distributor distributor ){
        this.distributorServiceImp.updateDistributor(id,distributor.getName(),distributor.getBrand(),
                distributor.getType(),distributor.getPhone(),distributor.getEmail());
        return this.distributorServiceImp.findAll();
    }

    @PostMapping("/brandSearch")
    public List<Distributor> showAllDistributors(@RequestBody Distributor distributor) {
        return this.distributorServiceImp.brandSearch(distributor.getBrand());
    }

}
