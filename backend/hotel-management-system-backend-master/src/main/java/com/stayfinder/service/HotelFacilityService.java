package com.stayfinder.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stayfinder.dao.HotelFacilityDao;
import com.stayfinder.entity.HotelFacility;

@Service
public class HotelFacilityService {
	
	@Autowired
	private HotelFacilityDao hotelFacilityDao;
	
	public List<HotelFacility> getHotelFacilitiesByHotelId(int hotelId) {
		return this.hotelFacilityDao.findByHotelId(hotelId);
	}
	
	public HotelFacility addFacility(HotelFacility hotelFacility) {
	    return this.hotelFacilityDao.save(hotelFacility);
	}

	public HotelFacility getHotelFacilityByHotelAndFacilityId(int hotelId, int facilityId) {
		return this.hotelFacilityDao.findByHotelIdAndFacilityId(hotelId, facilityId);
	}

	public void deleteHotelFacility(HotelFacility hotelFacility) {
		this.hotelFacilityDao.delete(hotelFacility);
	}

}
