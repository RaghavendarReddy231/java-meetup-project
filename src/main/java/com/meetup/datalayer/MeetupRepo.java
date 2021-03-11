package com.meetup.datalayer;
import org.springframework.data.repository.CrudRepository;

import com.meetup.DTO.User;
public interface MeetupRepo extends CrudRepository<User, String>  {

}
