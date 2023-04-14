package com.springrest.abhishek.service;

import java.util.List;

import com.springrest.abhishek.entity.Courses;

public interface ServiceInterface {
	
	public List<Courses> getCourse();

	public Courses addCourse(Courses course);

	public Courses getCourseByID(long courseId);
	
	public Courses UpdateCourse(long courseId);
	
	public Courses DeleteCourse(long courseId);

}
