import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo/logo-no-background.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserSF } from "../api/userSlice";

function Navbar({ props }) {
  const [nav, setNav] = useState(false);
  const username = useSelector((state) => state.user.user.username);
  const loggedIn = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openNav = () => {
    setNav(!nav);
  };

  function handleLogOut() {
    // console.log("this is being called");
    dispatch(logOutUserSF({ user: { username: username } }));
    localStorage.clear();
    navigate("/");
    //dispatch(logOutReducer())
  }

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
          <div className="navbar__img" tabIndex={1}>
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
              <Link className="home-link" to="/" tabIndex={2}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about" tabIndex={3}>
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
              <Link className="testi-link" to="/" tabIndex={4}>
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/" tabIndex={5}>
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/" tabIndex={6}>
                Contact
              </Link>
            </li>
          </ul>
          {loggedIn ? (
            <div className="navbar__buttons">
              <button
                className="navbar__buttons__register"
                onClick={handleLogOut}
                tabIndex={7}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="navbar__buttons">
              <Link className="navbar__buttons__sign-in" to="/login" tabIndex={7}>
                Sign In
              </Link>
              <Link className="navbar__buttons__register" to="/register" tabIndex={8}>
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
