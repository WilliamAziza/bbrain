import React from "react";
import "./Scheme.css";
import pdf from "../../../assets/images/pdf-file.png";
import download from "../../../assets/images/download.png";
import NR from "../../../assets/files/NURSERY- SECOND TERM.pdf";
import KG1 from "../../../assets/files/KG 1- SECOND TERM.pdf";
import KG2 from "../../../assets/files/KG 2- SECOND TERM.pdf";
import B1 from "../../../assets/files/BASIC 1- SECOND TERM.pdf" ;
import B2 from "../../../assets/files/BASIC 2- SECOND TERM.pdf";
import B3 from "../../../assets/files/BASIC 3 - SECOND TERM.pdf";
import B4 from "../../../assets/files/BASIC 4 - SECOND TERM.pdf";
import B5 from "../../../assets/files/BASIC 5 - SECOND TERM.pdf";
import B6 from "../../../assets/files/BASIC 6 - SECOND TERM.pdf";
import J1 from "../../../assets/files/BASIC 7- SECOND TERM.pdf";
import J2 from "../../../assets/files/BASIC 8- SECOND TERM.pdf";
import J3 from "../../../assets/files/BASIC 9- SECOND TERM.pdf"


const Scheme = () => {
  return (
    <div className="mb-5 mt-5">
      <div class="section-head col-sm-12">
        <h4>
          <span> our Scheme of</span> Learning <span> and </span> Brochure
        </h4>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> NURSERY Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={NR} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> Basic One Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={B1} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> Basic Two Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={B2} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3  text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> Basic Three Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={B3} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> Basic Four Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={B4} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> Basic Five Scheme of Learning</p>{" "}
              <div className="pe-3 pb-3 download text-end">
                <a href={B5} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> Basic Six Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={B6} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3  text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> BASIC 7 Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={J1} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> BASIC 8 Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={J2} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> BASIC 9 Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={J3} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> KG 1 Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={KG1} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center pdf">
            <div className="shadoww">
              <img src={pdf} alt="" className="img-fluid" />
              <p> KG 2 Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={KG2} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="row mt-5">
          <div className="col-md-3  text-center pdf">
            <div className="shadoww">
              <img src={zip} alt="" className="img-fluid" />
              <p> Download All Scheme of Learning</p>
              <div className="pe-3 pb-3 download text-end">
                <a href={compiledScheme} download>
                  <img src={download} alt="" className="" />
                </a>
              </div>
          </div>
          
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Scheme;
