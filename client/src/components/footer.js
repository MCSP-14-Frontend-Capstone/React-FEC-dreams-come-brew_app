import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-divs">
          <p className="footer-text-main">About</p>
          <p>Careers</p>
          <p>News & Blog</p>
          <p>Drive-up</p>
          <p>Same Day Delivery</p>

          <p>Press Center</p>
          <p>Advertise with us</p>
        </div>
        <div className="footer-divs">
          <p className="footer-text-main">Contact</p>
          <p>Help</p>
          <p>Returns</p>
          <p>Contact Us</p>
          <p>Our Members</p>
          <p>Shipping & Delivery</p>
          <p>Feedback</p>
          <p>Security & Fraud</p>
        </div>
        <div className="footer-divs">
          <p className="footer-text-main">Stores</p>
          <p>Find a store</p>
          <p>Recalls</p>
          <p>Track Order</p>
          <p>Donations</p>
          <p>Investors</p>
          <p>Accessibility</p>
          <p>Team Member Services</p>
        </div>
        <div className="footer-divs">
          <p className="footer-text-main">Gift</p>
          <p>Suppliers</p>
          <p>Locations</p>
          <p>Sustainability</p>
          <p>Affiliares & Partners</p>
          <p>Our recipe</p>
          <p>Suppliers</p>
          <p>Visit</p>
        </div>
      </div>
      <div className="underfoot">
        {" "}
        <p>
          <FaFacebook />
        </p>
        <p>
          <FaInstagram />
        </p>
        <p>
          <FaTwitter />
        </p>
        <p>
          <FaYoutube />
        </p>
        <div className="right-underfoot">
          <p>Terms</p>
          <p>Privacy</p>
          
          
        </div>
      </div>
    </>
  );
};

export default footer;
