
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {Form , FormGroup, Input, Container, Button} from "reactstrap";
import base_url from "../api/bootsapi";
import { toast } from "react-toastify";
import { useLocation } from 'react-router-dom';

const  AddCourse = ()=>{
    useEffect(()=>{
        document.title="Add-Courses || Abhishek Bhardwaj";
      },[]);

      
       
      const AddAllCoursesFromServer =(data)=>{
          console.log("axiox");
          toast.success("Data is sucessful Loaded",{position:"bottom-center"});
          axios.post(`${base_url}/courses`,data)
          .then((res)=>{
            console.log(res);
          })
          .catch((err)=>{
            console.log(err);
          });
      }

  const location = useLocation();
  const [course,setCourse]= useState({});

  console.log(location);
  console.log(location.state);

  useEffect(() => {
    if (location.state && location.state.course) {
      setCourse(location.state.course);
    }
  }, [location.state]);
  
  const handleform = (e)=>
  {
    console.log("reach there");
    console.log(course);
    e.preventDefault();
    
    AddAllCoursesFromServer(course);
  }
  

 
 
      
 
 

  return (
  <Fragment>
    <h1 className="text-center my-3">Fill Course Detail</h1>
    <Form onSubmit={handleform}>
      <FormGroup>
        <label for="userId">Course Id</label>
        <Input

          placeholder="Enter here"
          type="text"
          value={course.id=== null ? '' : course.id}
          onChange={(e)=>{
            setCourse({...course,id:e.target.value})
          }}
        />
      </FormGroup>

      <FormGroup>
        <label for="title">Course title</label>
        <Input
          id="title"
          name="title"
          placeholder="Enter title here"
          type="text"
          value={course.title=== null ? '' : course.title}
          onChange={(e)=>{
            setCourse({...course,title:e.target.value})
          }}
        />
      </FormGroup>

      <FormGroup>
        <label for="description">Course description</label>
        <Input
          id=  "description"
          name="description"
          placeholder="Enter the description"
          type="textarea"
          style={{height:150}}
          value={course.description=== null ? '' : course.description}
          onChange={(e)=>{
            setCourse({...course,description:e.target.value})
          }}
        />
      </FormGroup>
      <Container className="text-center">
        <Button type ="submit" color="success "> Add Course</Button>
        <Button type="reset" color="warning ml-2"> Clear</Button>
    </Container>
    </Form>

  </Fragment>);
};

export default AddCourse;
