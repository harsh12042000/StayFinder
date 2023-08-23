package com.stayfinder.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stayfinder.service.AdminService;

@RestController
@RequestMapping("api/admin/")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@GetMapping("/fetch/all")
	public Map<?,?> fetchAllDetails() {
		Map<String, Object> mapData = new HashMap<>();
		mapData.put("customersCount", adminService.getCustomersCount());
		mapData.put("HotelsCount", adminService.getHotelsCount());
		mapData.put("revenue", adminService.getRevenue());
		mapData.put("graphData", adminService.getUsersCountforHotels());
		return mapData;
	}
}
