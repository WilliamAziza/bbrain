import "./Footer.css";
import logo from "../../assets/images/logo.jpeg";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <section class="contact-area" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="contact-content text-center">
                <Link to='/'>
                  <img src={logo} alt="logo" className="logo-image" />
                </Link>
                <p>
                  Best Brain Examinations Konsortium (BBEKO) is an educational
                  consultancy which is one of a kind in branding and reputation.
                  Since 2004, our name has been associated with the most
                  prestigiuos examinations for schools  in Ghana.
                </p>
                <div class="hr"></div>
                <h6>
                  Achimota - Apenkwa, near the Apenkwa Presbyterian Church
                </h6>
                <h6>
                  0249273049<span> | </span>0207732900
                </h6>
                <h6>
                  Kumasi Office near Oduom
                </h6>
                <h6>
                  0256613646
                </h6>
                <h6>Central Region Office</h6>
                <h6>055 314 0501</h6>
                <div class="contact-social">
                  <ul>
                    <li>
                      <a
                        class="hover-target"
                        href="https://web.facebook.com/bestbrain.examinationskonsortium.77"
                        target="blank"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        class="hover-target"
                        href="https://www.instagram.com/bestbrainghana/"
                        target="blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        class="hover-target"
                        href="https://twitter.com/bestbrainghana"
                        target="blank"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
