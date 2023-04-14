import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/bootsapi";



const Course= ({course, update})=>{
    
    const navigate = useNavigate();
    const deletefromServer = (id) => () => {
        
        axios.delete(`${base_url}/courses/${id}`)
        .then((res)=>{
            update(id);
            toast.success("data is delete is sucessful");
        })
        .catch((err)=>toast.error("something went wrong"));
        
      };
     
     
      const handleUpdate = (id) => () => {
        
        axios.get(`${base_url}/courses/${id}`)
        .then((res)=>{
            console.log(res.data);
            navigate('/add-courses',{
                state: { course: res.data }
              });
            
            
        })
        .catch((err)=>toast.error("something went wrong"));
        
      };
     
    
    return (
        <Card className="text-center">
            <CardBody >
                <CardTitle tag="h5"> {course.title} </CardTitle>
                <CardText> {course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger"  onClick={deletefromServer(course.id)}>Delete</Button>
                    <Button color="warning ml-3" onClick={handleUpdate(course.id)}>Update</Button>
                </Container>  
            </CardBody>
        </Card>
    )
}

export default Course;