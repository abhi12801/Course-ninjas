import Course from "./Course";
import { useState, useEffect } from "react";
import base_url from "../api/bootsapi";
import axios from "axios";


const Allcourses = () => {
  useEffect(() => {
    document.title = "ALL Courses|| Abhishek Bhardwaj";
  }, []);


  const [courses, setCourses] = useState([
    { id: 1, title: "Java Course", description: "this is demo courses" },
    { id: 2, title: "Django Course", description: "this is demo courses" },
    { id: 3, title: "Reactjs Course", description: "this is demo courses" },
  ]);

 

  const getAllCoursesFromServer = () => {
    axios
      .get(`${base_url}/courses`)
      .then((res) =>
      {
        setCourses(res.data);
        
      } 
      )
      .catch((err) => 
      {
       console.log(err);
       console.log("something  went wrong in AllCourses file ");

      })
  };

  
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);


  const removebyId= (id)=>{
     setCourses(courses.filter((c)=>c.id!=id));
  }
  


  return (
    <div>
      <h1 className="text-center"> ALl Courses List</h1>
      <p className="text-center">List of All Courses are given below:</p>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={removebyId} />)
        : "No Courses"}
    </div>
  );
};

export default Allcourses;
