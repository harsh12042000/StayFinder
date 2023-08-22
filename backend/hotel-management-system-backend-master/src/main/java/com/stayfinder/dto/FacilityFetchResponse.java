package com.stayfinder.dto;

import java.util.Set;

import com.stayfinder.entity.Facility;

public class FacilityFetchResponse extends CommanApiResponse { 
	
	private Set<Facility> facilities;

	public Set<Facility> getFacilities() {
		return facilities;
	}

	public void setFacilities(Set<Facility> facilities) {
		this.facilities = facilities;
	}
	
	

}
