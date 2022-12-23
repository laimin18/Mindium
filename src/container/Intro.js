import "./Intro.css";
import nini from "../images/nini.png";

function Intro() {
  return (
    <div className="intro">
      <div className="search-bar">
        <p>SEARCH Place Holder</p>
      </div>
      <div className="profile">
        {/*if src use relative path string "nini" directly, without importing, the images will failed to load while reloading page on react router path
          ex: reload on /post/2 => the nini url will become http://localhost:3000/post/2/nini.png => There's no this image!
         */}
        <img className="profile-img" src={nini} alt="nini" />
        <h3 className="name">Min</h3>
        <div className="follow">
          <p>Followers</p>
          <button>Follow</button>
        </div>
        <div id="about">
          <h3>About me</h3>
          <p>Software Developer</p>
          <a href="mailto:a950897@gmail.com">a950897@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
