package com.meetup.mail;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SendNotificationController {

	@Autowired
	private SendNotification sendNotification;
	
	@RequestMapping("MeetUp/sendNotification/{meetupid}")
	public void sendEmail(@PathVariable int meetupid)
	{
		sendNotification.sendEmail(meetupid);
	}
}
