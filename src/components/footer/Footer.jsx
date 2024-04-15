import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="section-center">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <h4 className="footer-text">
            &copy;<span id="date"></span>
            <span className="company">safumulatu</span>
            all rights reserved @2024
          </h4>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
