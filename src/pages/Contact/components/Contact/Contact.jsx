import React from "react";
import './Contact.css'


const Contact = () => {
  return (
    <div>
      <div className="container mt-5 map-container mb-5">
        <div className="row text-center ">
          <div className="col-3"></div>
          <div className="col-6 team-container">
            <p>
              We are just moments away. Send us a message
            </p>
          </div>
          <div className="col-3"></div>
          <div className="team">
            <p>
            We are just moments away. Send us a message

            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div class="cardii">
              <i class="fas fa-map-marker-alt"></i>
              <h2 class="card-title">Location</h2>
              <p class="card-info">Apenkwa - Achimota</p>
            </div>

            <div class="cardii">
              <i class="fas fa-phone"></i>
              <h2 class="card-title">Phone number</h2>
              <p class="card-info">+233 249 2730 49</p>
            </div>

            <div class="cardii">
              <i class="fas fa-envelope"></i>
              <h2 class="card-title">Email</h2>
              <p class="card-info">bbexaminerss@gmail.com</p>
            </div>
          </div>
          <div className="col-md-8">
            <div class="form-container">
              <form>
                <ul>
                  <li>
                    <label for="name">
                      <span>
                        Name <span class="required-star">*</span>
                      </span>
                    </label>
                    <input type="text" id="name" name="user_name" />
                  </li>
                  <li>
                    <label for="mail">
                      <span>
                        Email <span class="required-star">*</span>
                      </span>
                    </label>
                    <input type="email" id="mail" name="user_email" />
                  </li>
                  <li>
                    <label for="msg">
                      <span>Message</span>
                    </label>
                    <textarea rows="4" cols="50"></textarea>
                  </li>
                  <li>
                    <input type="submit" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
