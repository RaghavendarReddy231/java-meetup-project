package com.meetup.DTO;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MEETUPDETAILS")
public class MeetUpDetails {

	
	@Id
	@Column(name="MeetUpID", nullable = false)
	private int meetUpID;
	@Column(name="Email", nullable = false)
	private String email;
	@Column(name="MeetUpDescription", nullable = false)
	private String meetUpDescription;
	public int getMeetUpID() {
		return meetUpID;
	}
	public void setMeetUpID(int meetUpID) {
		this.meetUpID = meetUpID;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMeetUpDescription() {
		return meetUpDescription;
	}
	public void setMeetUpDescription(String meetUpDescription) {
		this.meetUpDescription = meetUpDescription;
	}
	
	
}
