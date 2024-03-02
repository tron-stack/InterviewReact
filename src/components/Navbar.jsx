import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Logo from "../images/logo/logo-no-background.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logOutUserSF } from "../api/userSlice";

function Navbar({ props }) {
  const [nav, setNav] = useState(false);
  const loggedIn = props;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const openNav = () => {
    setNav(!nav);
  };

  function handleLogOut() {
    console.log('this is being called')
    dispatch(logOutUserSF());
    localStorage.clear();
    navigate('/')
    //dispatch(logOutReducer())
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                Contact
              </Link>
            </li>
          </ul>
          {loggedIn ? (
            <ul>
              <Link
                className="navbar__buttons__register"
                to="/login"
                onClick={handleLogOut}
              >
                Log Out
              </Link>
            </ul>
          ) : (
            <ul>
              <li>
                <Link onClick={openNav} to="/login">
                  Sign In
                </Link>
              </li>
              <li>
                <Link onClick={openNav} to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={Logo}
                alt="logo-img"
                style={{ height: "90px", width: "auto", borderRadius: "35px" }}
              />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            {/* <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li> */}
            <li>
              {" "}
              <Link className="testi-link" to="/">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
          {loggedIn ? (
            <div className="navbar__buttons">
              <button
                className="navbar__buttons__register"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="navbar__buttons">
              <Link className="navbar__buttons__sign-in" to="/login">
                Sign In
              </Link>
              <Link className="navbar__buttons__register" to="/register">
                Register
              </Link>
            </div>
          )}

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
