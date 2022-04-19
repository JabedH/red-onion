import React from "react";
import "./Footer.css";
import logo from "../../img/logo.png";
import social1 from "../../img/social-icon/fb.png";
import social2 from "../../img/social-icon/ins.png";
import social3 from "../../img/social-icon/youtube.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="main-footer">
      <div className="footer-bg">
        <div className="footer container">
          <div className="footer-1st ">
            <div>
              <img className="logo" src={logo} alt="" />
              <p className="text-start">you can follow us on social media</p>
              <div className="footer-icon">
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
              </div>
            </div>
          </div>
          <div className="text-start">
            <h4>Company</h4>
            <p>About</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Policy</p>
          </div>
          <div className="text-start">
            <h4>Support</h4>
            <p>Contact</p>
            <p>Sign up to deliver</p>
            <p>Add your restaurant</p>
          </div>
          <div className="text-start">
            <h4>Address</h4>
            <p>811 7th Ave</p>
            <p> New York, NY 10019</p>
            <p> United States</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright RED ONION ©{year}. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
