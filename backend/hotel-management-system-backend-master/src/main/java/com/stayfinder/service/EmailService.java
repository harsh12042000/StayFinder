package com.stayfinder.service;

import org.springframework.web.multipart.MultipartFile;

public interface EmailService {
	String sendMail(String name,String email,String message);

	String sendHotelQuery(String name, String email, String state, String contactNumber, String city, String ratings,
			String description);
}
