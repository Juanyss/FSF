package com.FSF.StockControl.repositories;

import com.FSF.StockControl.domain.Distributor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface DistributorRepository extends CrudRepository<Distributor, Long> {

    @Query("select d from Distributor d where d.id = :id")
    Distributor findOne(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query("update Distributor d SET d.name = :name, d.brand = :brand,"
            + "d.type = :type, d.phone = :phone, d.email = :email where d.idDistributor = :id")
    void updateDistributor(@Param("id") Long id,
                                  @Param("name") String name,
                                  @Param("brand") String brand,
                                  @Param("type") String type,
                                  @Param("phone") String phone,
                                  @Param("email") String email);

    @Query("select d from Distributor d where d.brand like %:brand%")
    List<Distributor> brandSearch(@Param("brand") String brand);
}
