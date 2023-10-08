//call the css file to make it more organizing
import { NavLink } from "react-router-dom";
import "./Header.css";
import {useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

function Header() {
  const {ChangeTheme} = useContext(ThemeContext);

  return (
    < >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Khaled <span className="logoname">Ghonim</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-1 mb-md-0">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to={""}
                >
                  Translation & Subtitling & Transcription
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  role="button"
                  id="sign-buttons"
                  to="/Sign-in"
                >
                  Sign-In
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  role="button"
                  id="sign-buttons"
                  to="/Sign-up"
                >
                  Sign-Up
                </NavLink>
              </li>
            </ul>

            <div onChange={() => { ChangeTheme('Light') }} className="Wrapper">
              <input type="checkbox" id="hide-checkbox" />
              <label htmlFor="hide-checkbox" className="toggle">
                <span className="toggle-button">
                  <span className="crater crater-1" />
                  <span className="crater crater-2" />
                  <span className="crater crater-3" />
                  <span className="crater crater-4" />
                  <span className="crater crater-5" />
                  <span className="crater crater-6" />
                  <span className="crater crater-7" />
                </span>
                <span className="star star-1" />
                <span className="star star-2" />
                <span className="star star-3" />
                <span className="star star-4" />
                <span className="star star-5" />
                <span className="star star-6" />
                <span className="star star-7" />
                <span className="star star-8" />
              </label>
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
