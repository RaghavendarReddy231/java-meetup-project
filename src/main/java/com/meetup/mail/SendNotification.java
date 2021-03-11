package com.meetup.mail;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.meetup.DTO.MeetUpDetails;
import com.meetup.DTO.User;
import com.meetup.datalayer.MeetUpDetailsRepo;
import com.meetup.datalayer.MeetupRepo;

@Service
public class SendNotification {

	@Autowired
    private JavaMailSender javaMailSender;
	
	@Autowired
	private MeetupRepo meetupRepo;
	
	@Autowired
	MeetUpDetailsRepo meetUpDetailsRepo;
    
    void sendEmail(int meetupid) {
    	List<User> list=new ArrayList<User>();
        SimpleMailMessage msg = new SimpleMailMessage();
        list= (List<User>) meetupRepo.findAll();
        MeetUpDetails meetUp=meetUpDetailsRepo.findById(meetupid);
        for(User user:list)
        {
        	 msg.setTo(user.getEmail());

             msg.setSubject("New Meet-ups");
             msg.setText("New meet-up is created with "+meetUp.getMeetUpID()+" id. Created by "+meetUp.getEmail()
             +". Meet-Up Description is "+meetUp.getMeetUpDescription());

             javaMailSender.send(msg);
 	
        }
       
    }
}
