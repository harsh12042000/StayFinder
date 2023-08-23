package com.stayfinder.dto;

import com.stayfinder.entity.Hotel;

public class HotelResponseDto extends CommanApiResponse {
	
	private Hotel hotel;

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
	
	

}
