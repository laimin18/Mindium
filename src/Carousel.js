import "./Carousel.css";
import bullhorn from "./images/bullhorn.png";
import { Link } from "react-router-dom";

function Carousel(props) {
  return (
    <div className={`carousel ${props.menu ? "show" : ""}`}>
      <img className="icon" src={bullhorn} alt="bullhorn" />
      <div className="carousel-wrap">
        <div className="carousel-content">
          <p>Hi, this is Min</p>
          {/* use react router 
              => cannot use href="resume.html" 
              => If use <a> (<a href="resume">Resume</a>), it would still request the page from server. 
              Thus, we have to use "Link" to fulfill client side routing.
          */}
          <li>
            <Link to={"Resume"}>Resume</Link>
          </li>
          <a href="https://github.com/laimin18">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
