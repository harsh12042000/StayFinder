package com.stayfinder.service;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class EmailSenderService implements EmailService{

	@Value("${spring.mail.username}")
    private String fromEmail;

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public String sendMail(String name,String email,String message) {
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();

            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setFrom("stayfinder9@gmail.com");
            mimeMessageHelper.setTo("harshadas2000@gmail.com");
            mimeMessageHelper.setSubject("Hey, New Query Generated !");
            String msg = "HI, Received Query from : " + name + "\nEmail : " + email + " \nMessage : " + message ;
            mimeMessageHelper.setText(msg);

            javaMailSender.send(mimeMessage);

            return "mail sent";

        } catch (Exception e) {
            throw new RuntimeException(e);
        }


    }

	@Override
	public String sendHotelQuery(String name, String email, String state, String contactNumber, String city,
			String ratings, String description) {
		try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();

            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setFrom("stayfinder9@gmail.com");
            mimeMessageHelper.setTo("harshadas2000@gmail.com");
            mimeMessageHelper.setSubject("Hey, Someone wants to add Hotel !");
            String msg = "HI, Received Query from : " + name + "\nEmail : " + email + "\nMessage : " + description + "\nState : " + state + " \nContact Number :" + contactNumber + "\nCity : " + city + "\nHotel Ratings : " + ratings ;
            mimeMessageHelper.setText(msg);

            javaMailSender.send(mimeMessage);

            return "Thank You ! We will contact you soon !";

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
	}
}
	
