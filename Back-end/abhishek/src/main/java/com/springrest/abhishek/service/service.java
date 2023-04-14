package com.springrest.abhishek.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.abhishek.dao.Coursedao;
import com.springrest.abhishek.entity.Courses;

@Service
public class service implements ServiceInterface{

	//List<Courses>list;
	@Autowired
	private Coursedao coursesdao; 
	
	public service()
	{
		//list = new ArrayList();
		//list.add(new Courses(1,"title","description"));
		//list.add(new Courses(1,"title","description"));
		//list.add(new Courses(1,"title","description"));
	}
	
	
	
	
	@Override
	public List<Courses> getCourse(){
		 System.out.println("reach There ");
		 return coursesdao.findAll();
	} 
	
	@Override
	public Courses getCourseByID(long courseId)
	{
		
		
		return coursesdao.getOne(courseId);
	}
	
	@Override
	public Courses addCourse(Courses course)
	{
		System.out.println("reach There ");
		coursesdao.save(course);
		return course;
	}
	
	@Override
	public Courses UpdateCourse(long courseId)
	{
		System.out.println("reach There ");
		Courses entity=coursesdao.getOne(courseId);
		coursesdao.save(entity);
		return entity;
	}
	
	@Override
	public Courses DeleteCourse(long courseId)
	{
		System.out.println("reach There ");
		Courses entity=coursesdao.getOne(courseId);
		coursesdao.delete(entity);
		
		return entity;
	}
}
