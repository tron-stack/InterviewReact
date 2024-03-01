function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer-content">
              <ul className="footer-content__1">
                <li>
                  <span>Property Management</span> Software
                </li>
                <li>
                    A Property Management Service to make your business needs easy!
                </li>
                <li>
                  <a href="tel:8002823828">
                    <i className="fa-solid fa-phone"></i> &nbsp; 1-800-fake-num
                  </a>
                </li>
  
                <li>
                  <a
                    href="mailto: 
                    testApp@fakeEmail1234.com"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    &nbsp; testApp@fakeEmail1234.com
                  </a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Company</li>
                <li>
                  <a href="/">Texas</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Mobile</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">How we work</a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Subscription</li>
                <li>
                  <p>Subscribe your Email address for latest news & updates.</p>
                </li>
                <li>
                  <input type="email" placeholder="Enter Email Address"></input>
                </li>
                <li>
                  <button className="submit-email">Submit</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;