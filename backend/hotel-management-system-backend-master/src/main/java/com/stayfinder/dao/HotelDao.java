package com.stayfinder.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stayfinder.entity.Hotel;
import com.stayfinder.entity.Location;

@Repository
public interface HotelDao extends JpaRepository<Hotel, Integer> {
	
	List<Hotel> findByLocation(Location locationId);
	long count();
}
