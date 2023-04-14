package com.springrest.abhishek.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.abhishek.entity.Courses;

public interface Coursedao extends JpaRepository<Courses,Long> {

}
