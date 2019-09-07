package com.example.simpleappserverjava.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.simpleappserverjava.models.Course;

public interface CourseRepository extends CrudRepository<Course, Integer> {
	
}
