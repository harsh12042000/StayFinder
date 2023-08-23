package com.stayfinder.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.stayfinder.entity.Booking;

@Repository
public interface BookingDao extends JpaRepository<Booking, Integer> {
	
	List<Booking> findByUserId(int userId);
	List<Booking> findByHotelId(int hotelId);
	@Query("SELECT SUM(b.totalDay * b.totalRoom * h.pricePerDay) " +
	           "FROM Booking b " +
	           "JOIN Hotel h ON b.hotelId = h.id " +
	           "WHERE b.status = 'Approved'")
	Long calculateTotalRevenue();
	
	@Query("SELECT h.name, COUNT(b) " +
	           "FROM Booking b " +
	           "JOIN Hotel h ON b.hotelId = h.id " +
	           "GROUP BY h.id")
	List<Object[]> countUsersRegisteredPerHotel();
}
