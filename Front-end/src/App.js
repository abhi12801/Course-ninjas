import "./App.css";

import { ToastContainer, toast } from "react-toastify";

import Home from "./Component/Home";
import Allcourses from "./Component/Allcourses";
import AddCourse from "./Component/AddCourse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import Header from "./Component/Header";
import Menus from "./Component/Menus";

function App() {
  const btnhandle = () => {
    toast.success("Sucessful Message", {
      position: "top-center",
    });
  };
  return (
    <div >
      <Router>
        <ToastContainer />
        <Container>
          <Header />
        </Container>
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>
            
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-courses" element={<AddCourse/>} />
                <Route path="/view-courses" element={<Allcourses/>} />
              </Routes>
            
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
