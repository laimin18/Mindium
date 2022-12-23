import Carousel from "./Carousel";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="nav-container">
      <Carousel menu={props.menu} />

      <nav className={`navbar ${props.menu ? "show" : ""}`}>
        <button
          className="navbar-toggler"
          type="button"
          onClick={props.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className={`nav-content ${props.menu ? "show" : ""}`}>
        <div className="nav-main-wrap">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.changeMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
          <nav className="navPages">
            <a href="/">Home</a>
            <a href="/portforlio.html">Portforlio</a>
            {/* folloing <a href>, "http"://localhost~~~, the "http" is necessary */}
            <a className="write" href="http://localhost:3001/write.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 112.04"
                width="24"
                height="24"
              >
                <path d="M109.28,19.61l12.21,9.88a3.77,3.77,0,0,1,.56,5.29l-5.46,6.75L98.53,26.93,104,20.17a3.79,3.79,0,0,1,5.29-.56ZM21.07,30.81a3.18,3.18,0,0,1,0-6.36H74.12a3.18,3.18,0,0,1,0,6.36ZM9.49,0H85.71A9.53,9.53,0,0,1,95.2,9.49v5.63l-4.48,5.53a9.81,9.81,0,0,0-1.18,1.85c-.24.19-.48.4-.71.62V9.49a3.14,3.14,0,0,0-3.12-3.13H9.49A3.14,3.14,0,0,0,6.36,9.49v93.06a3.16,3.16,0,0,0,.92,2.21,3.11,3.11,0,0,0,2.21.92H85.71a3.12,3.12,0,0,0,3.12-3.13V88.2l1.91-.81a10,10,0,0,0,4.34-3.13l.12-.14v18.43A9.54,9.54,0,0,1,85.71,112H9.49A9.51,9.51,0,0,1,0,102.55V9.49A9.53,9.53,0,0,1,9.49,0ZM21.07,87.6a3.19,3.19,0,0,1,0-6.37H56.19a37.1,37.1,0,0,0-.3,6.37Zm0-18.93a3.19,3.19,0,0,1,0-6.37H59.22l0,.27-1.05,6.1Zm0-18.93a3.18,3.18,0,0,1,0-6.36H72.44l-5.11,6.36ZM87.25,78,74.43,83.47c-9.35,3.47-8.93,5.43-8-3.85L69.24,63.4h0l0,0,26.56-33,18,14.6L87.27,78ZM72.31,65.89l11.86,9.59-8.42,3.6c-6.6,2.83-6.42,4.23-5.27-2.53l1.83-10.66Z" />
              </svg>
              <p>Write</p>
            </a>
            <div className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
              </svg>
            </div>
          </nav>
        </div>
      </div>

      <div className="routers">
        {/* use NavLink instead of Link to give it a className indicating where the current location is */}
        <p>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </p>
        <p>
          <NavLink
            to={"about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Nav;
