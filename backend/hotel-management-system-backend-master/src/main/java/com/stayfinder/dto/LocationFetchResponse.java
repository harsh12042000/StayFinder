package com.stayfinder.dto;

import java.util.List;

import com.stayfinder.entity.Location;

public class LocationFetchResponse extends CommanApiResponse {
	
    private List<Location> locations;

	public List<Location> getLocations() {
		return locations;
	}

	public void setLocations(List<Location> locations) {
		this.locations = locations;
	}
    
    
    
    

}
