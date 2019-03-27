package com.FSF.StockControl.implementations;

import com.FSF.StockControl.domain.Distributor;
import com.FSF.StockControl.interfaces.DistributorService;
import com.FSF.StockControl.repositories.DistributorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistributorServiceImp implements DistributorService {
    @Autowired
    DistributorRepository distributorRepository;

    public DistributorServiceImp() {
    }

    @Override
    public List<Distributor> findAll() {
        return (List<Distributor>) this.distributorRepository.findAll();
    }

    @Override
    public Distributor findOne(Long id) {
        return this.distributorRepository.findOne(id);
    }

    @Override
    public boolean newDistributor(Distributor distributor){


        Distributor d = new Distributor();
        d.setName(distributor.getName());
        d.setBrand(distributor.getBrand());
        d.setType(distributor.getType());
        d.setPhone(distributor.getPhone());
        d.setEmail(distributor.getEmail());
        this.distributorRepository.save(d);
        return true;
    }

    @Override
    public void delete(Long id) {
        this.distributorRepository.deleteById(id);
    }

    @Override
    public void updateDistributor(Long id, String name, String brand, String type, String phone, String email){
        this.distributorRepository.updateDistributor(id, name, brand, type, phone, email);
    }
}
