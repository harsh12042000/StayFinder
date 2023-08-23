package com.stayfinder.dto;

import java.util.List;

import com.stayfinder.entity.Hotel;

public class HotelAddResponse extends CommanApiResponse {

	List<Hotel> hotels;
	private int rowCount;

	public List<Hotel> getHotels() {
		return hotels;
	}

	public void setHotels(List<Hotel> hotels) {
		this.hotels = hotels;
	}

	public int getRowCount() {
		return rowCount;
	}

	public void setRowCount(int rowCount) {
		this.rowCount = rowCount;
	}
}
