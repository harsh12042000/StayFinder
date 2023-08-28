package com.stayfinder.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.stayfinder.dto.HotelQueryRequest;
import com.stayfinder.service.EmailService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/mail")
public class EmailSendController {
    private EmailService emailService;

    public EmailSendController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping("/send")
    public String sendMail(
        @RequestParam(name = "name", defaultValue = "Guest") String name,
        @RequestParam(name = "email", required = true) String email,
        @RequestParam(name = "message", required = true) String message
    ) {
        return emailService.sendMail(name, email, message);
    }

    @PostMapping("/hotelquery")
    public String sendHotelQuery(
    		@RequestBody HotelQueryRequest request
    ) {
    	return emailService.sendHotelQuery(
                request.getName(),
                request.getEmail(),
                request.getState(),
                request.getContactNumber(),
                request.getCity(),
                request.getRatings(),
                request.getDescription()
            );
    }
}
