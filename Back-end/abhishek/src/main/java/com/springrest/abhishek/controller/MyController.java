package com.springrest.abhishek.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.springrest.abhishek.entity.Courses;
import com.springrest.abhishek.service.ServiceInterface;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MyController {
 
	@Autowired
	private ServiceInterface serviceinterface;
	
	@GetMapping("/home")
	public String home()
	{
		return "Welcome to Home page!";
	}
	

	@GetMapping("/courses")
	public List<Courses> getcourses()
	{  
		System.out.println("fetch the data from database");
		return this.serviceinterface.getCourse();
	}
	
	
	@GetMapping("/courses/{courseId}")
	public Courses getcoursesById(@PathVariable String courseId)
	{
		System.out.println("fetch the id data");
		return this.serviceinterface.getCourseByID(Long.parseLong(courseId));
		
	}
	

	@PostMapping("/courses")
    public Courses addcourses(@RequestBody Courses course)
    {
		System.out.println("upload the data into database");
    	return this.serviceinterface.addCourse(course);
    	
    }
	
	
	@PutMapping("/courses/{courseId}")
    public Courses Updatecourses(@PathVariable String courseId)
    {
		System.out.println("Update the data into database");
    	return this.serviceinterface.UpdateCourse(Long.parseLong(courseId));
    }
	
	
	@DeleteMapping("/courses/{courseId}")
    public Courses Deletecourses(@PathVariable String courseId)
    {
		System.out.println("Delete the data from database");
		return this.serviceinterface.DeleteCourse(Long.parseLong(courseId));
    }
	
	
	
	
	
	
	
	
}
