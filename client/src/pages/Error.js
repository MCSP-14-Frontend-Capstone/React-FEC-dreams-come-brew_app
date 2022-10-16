import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-box">
      <h2 className="error-text">404 Page Not Found</h2>
      <img className='cart-img-empty' style={{ margin: 'auto' }} src='https://static.vecteezy.com/system/resources/previews/000/585/684/original/coffee-cup-logo-template-vector-icon-design.jpg' alt=''></img>
      <Link to="/">
        <button className="error-btn">Back To Homepage</button>
      </Link>
    </div>
  );
};

export default Error;
