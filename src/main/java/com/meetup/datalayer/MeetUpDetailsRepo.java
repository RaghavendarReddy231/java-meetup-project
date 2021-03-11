package com.meetup.datalayer;

import org.springframework.data.repository.CrudRepository;

import com.meetup.DTO.MeetUpDetails;

public interface MeetUpDetailsRepo extends CrudRepository<MeetUpDetails, Integer> {
	
	MeetUpDetails findById(int id);

}
