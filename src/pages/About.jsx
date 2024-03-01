import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import logo from '../images/logo/logo-no-background.png';
import propIcon from '../images/about/property_icon.png';
import graphIcon from '../images/about/growth_icon.png';
import supportIcon from '../images/about/support_icon.png';
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
    <Navbar/>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={logo}
              alt="red logo"
            />
            <div className="about-main__text">
              <h3>Our Company</h3>
              <h2>Start the app and your adventure begins</h2>
              <p>
              Our company is dedicated to providing top-quality solutions to your Property Management needs. Whether it's managing tenants, maintenance, leads, or payments: <span>we can handle it all</span>
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={propIcon} alt="property icon" />
                  <span>
                    <h4>All</h4>
                    <p>Prpperty Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={graphIcon} alt="car-icon" />
                  <span>
                    <h4>4000+</h4>
                    <p>Properties being managed</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={supportIcon} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>24/7</h4>
                    <p>Support System</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a demo by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(713) 497-9194</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;