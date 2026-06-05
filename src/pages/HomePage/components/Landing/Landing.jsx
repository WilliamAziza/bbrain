import React from 'react';
import Navbar from "../../../../components/Navbar/Navbar";
import "./Landing.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "../../../../assets/images/students.jpg"
import ban from "../../../../assets/images/students2.jpg"
import slide3 from "../../../../assets/images/students3.jpg"
// import calender from "../../../../assets/images/calender .jpg"
import staff from "../../../../assets/images/staff.jpg"


const Landing = () => {
  return (
    <div className="landing-section">
      <Navbar />
      <Carousel interval={2000}>
        <Carousel.Item>
          <div className="landing-container text-center">
            <img src={banner} alt="" />
            <div className="content">
             <div className="texts">
               <p>Welcome To</p>
            <h1> Best Brain Examinations Konsortium </h1>
            <p>We are poised to make a most resounding impact on quality education</p>
             </div>
            </div>
          </div>
        </Carousel.Item>
        
        {/* <Carousel.Item>
          <div className="landing-container text-center">
            <img src={calender} alt="" height= '100%'/>
          </div>
        </Carousel.Item> */}
        <Carousel.Item>
          <div className="landing-container text-center">
            <img src={staff} alt="" />
            
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="landing-container text-center">
            <img src={ban} alt="" />
            <div className="content">
             <div className="texts">
               <p></p>
            <h2>  HAPPY STUDENTS POSE FOR PICTURES AFTER EXAMS</h2>
            <p>We are poised to make a most resounding impact on quality education</p>
             </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="landing-container text-center">
            <img src={slide3} alt="" />
            <div className="content">
             <div className="texts">     
          <p>We are poised to make a most resounding impact on quality education</p>
             </div>
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default Landing;
