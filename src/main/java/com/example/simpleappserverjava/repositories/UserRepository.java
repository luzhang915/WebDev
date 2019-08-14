package com.example.simpleappserverjava.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.simpleappserverjava.models.User;

public interface UserRepository extends CrudRepository<User, Integer>{

}
