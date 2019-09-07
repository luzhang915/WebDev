package com.example.simpleappserverjava.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.simpleappserverjava.models.Course;
import com.example.simpleappserverjava.repositories.CourseRepository;

@RestController
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	
	@GetMapping("/api/course")
	public List<Course> findAllCourses(){
		return (List<Course>)courseRepository.findAll();
	}
}
 