import { useEffect } from "react";
import { Button } from "reactstrap";

const Home = () => {
  useEffect(()=>{
    document.title="Home  || Abhishek Bhardwaj";
  },[]);
  return (
    <div>
      <div class="container-fluid bg-dark text-light p-5">
        <div class="container bg-dark p-5">
          <h1 class="display-4">Welcome to  My Course Application</h1>
          <p className="lead">This Application is developed by Abhishek Bhardwaj for Learning purpose of Springboot and React Native</p>
          <hr />
          <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
