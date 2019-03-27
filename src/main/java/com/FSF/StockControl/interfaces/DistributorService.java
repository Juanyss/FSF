package com.FSF.StockControl.interfaces;

import com.FSF.StockControl.domain.Distributor;

import java.util.List;

public interface DistributorService {
    List<Distributor> findAll();

    boolean newDistributor(Distributor distributor);

    void delete(Long id);

    Distributor findOne(Long id);

    void updateDistributor(Long id, String name, String brand, String type, String phone, String email);
}
