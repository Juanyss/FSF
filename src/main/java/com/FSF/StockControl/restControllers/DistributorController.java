package com.FSF.StockControl.restControllers;

import com.FSF.StockControl.domain.Distributor;
import com.FSF.StockControl.implementations.DistributorServiceImp;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PostMapping("/secured")
    public List<Distributor> NewUser(@RequestBody Distributor distributor) {
        this.distributorServiceImp.newDistributor(distributor);
        return this.distributorServiceImp.findAll();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping("/secured/{id}")
    public List<Distributor> deleteDistributor(@PathVariable("id") Long id) {
        this.distributorServiceImp.delete(id);
        return this.distributorServiceImp.findAll();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PutMapping("/secured/{id}")
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
