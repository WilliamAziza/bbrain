import React from "react";

import banner from "../../../../assets/images/banner.jpeg";
import video from "../../../../assets/images/video.mp4";
import "./WhyChooseUs.css";


const WhyChooseUs = () => {
  return (      
    <div className="container why-container mt-5 mb-5">
      <div className="row mt-5 mb-5 d-flex align-items-center">
        <div className="col-md-6 order-2 order-md-1 why-us-left">
          <p>
            You have guarantee for excellence. If 100% of your students do not
            pass with distinction at the BECE after taking all our mocks, we
            will refund every payment made to us in respect of the exams
          </p>
          {/* <button className="button shadow-lg">Explore</button> */}
          <p>
            We have well-motivated professionals to give you your money's
            worth.Also, We are always in touch with you through any means of
            communication available to us.
          </p>
        </div>
        <div className="col-md-6 why-us order-1 order-md-2">
          <h1>Why Choose Us For Your Upcoming Examinations</h1>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-md-6 why-us">
          {/* <img src={whyus} alt="" className="img-fluid why-us-img" /> */}
          <img src={banner} alt="" className="img-fluid" />
        </div>

        <div className="col-md-6 p-5">
          <div className="why-points d-flex flex-column justify-content-evenly">
            <div className="row d-flex mt-5 align-items-center">
              <div className="col-3 numbering">
                <div className="design4" />
                <h1>01</h1>
              </div>
              <div className="col-9 why-description">
                <p>
                  We care for every candidate in every school and so inspire you
                  with the greatest confidence for all-round success.
                </p>
              </div>
            </div>

            <div className="row d-flex mt-5 align-items-center">
              <div className="col-3 numbering">
                <div className="design5" />
                <h1>02</h1>
              </div>
              <div className="col-9 why-description">
                <p>
                  Our special package has always proven to be highly
                  comprehensive, appropriately diagnostic, and effectively
                  therapeutic.
                </p>
              </div>
            </div>

            <div className="row d-flex mt-5 align-items-center">
              <div className="col-3 numbering">
                <div className="design6" />
                <h1>03</h1>
              </div>
              <div className="col-9 why-description">
                <p>
                  Our printing is of the best quality on high density papers
                  using the best technology. We also bite what we can chew by
                  admitting only serious schools
                  
                </p>
              </div>
            </div>

            <div className="row d-flex mt-5 align-items-center">
              <div className="col-3 numbering">
                <div className="design7" />
                <h1>04</h1>
              </div>
              <div className="col-9 why-description">
                {/* <video
                  src={video}
                  // className="video"
                  controls="controls"
                  autoplay="false"
                /> */}
                <p>
                  Our exams is of the highest standard and comprehensive enough to meet
                  the tutelage of the teachers and examines the students of what they 
                  have been thought whiles meeting the syllabus and the standards of the 
                  curriculum.
                </p>
              </div>
              <div className="col-9 why-description">
                <video
                  src={video}
                  className="video"
                  controls="controls"
                  autoplay="false"
                />
                <p>Click on this button to purchase the Beacon of Light Book</p>
                <a href="https://wa.me/233249273049" target="_blank" rel="noopener noreferrer" className="button">Purchase</a>
               
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
