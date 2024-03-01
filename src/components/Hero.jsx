import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bg from '../images/hero/heroes-bg.png'


function Hero() {
  const [goUp, setGoUp] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
                <h1>
                    {/* <img src={logo} alt="logo" style={{marginTop: "0px", height: "120px", width: 'auto', marginInline: '5em'}}/> */}

                    <span>
                        Property Management made Easy!
                        {/* add image */}
                    
                    </span> 
                </h1>
                <h4>Where Real Estate meets Tech</h4>
                <h1>What do we do?</h1>
                <p>We are a software company here to make managing your Properties hassle free! We offer a range of services to help you at all points in your Property Management Journey</p>
                <div className="hero-content__text__btns">
                    <Link to='/register' className="hero-content__text__btns__book-ride">Sign Up &nbsp;<i className="fa-solid fa-circle-check"></i></Link>
                    <Link className="hero-content__text__btns__learn-more" to="/about">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
                </div>
            </div>

            {/* add image style={{height: '600px', opacity: '100%', zIndex: '0', postion: 'absolute', left: '0'}}*/}
            <img src={bg} alt="laptop on desk" className="hero-content__bg-img" style={{maxHeight: '450px', opacity: '90%', zIndex: '0', left: '0', borderRadius: '10px'}} />
          </div>
        </div>
        <div onClick={scrollToTop} className={`scroll up ${goUp ? "show-scroll": ""}`}>
            <i className="fa-solid fa-angle-up"></i>
        </div>

      </section>
    </>
  );
}

export default Hero;