import Legal from "../images/service/legal.png";
import Contact from "../images/service/contact.png";
import Work from "../images/service/working.png";
import { useNavigate } from "react-router";

function PickService() {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/');
    }

  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Pick the service you would like to use</h3>
              <h2>Quick & easy Property Management</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box" onClick={handleClick} >
                <img src={Legal} alt="icon_img" />
                <h3>Eviction Notice</h3>
                <p>
                  Our locations are secured with a security team that stays on the lot, as well as a secure fence with barbed wire around the facility. You will also find 24/7 infrared cameras covering the facility grounds.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Coming Soon!</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Work} alt="icon_img" />
                <h3>Coming Soon!</h3>
                <p>
                  We are working to add more amazing features!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickService;