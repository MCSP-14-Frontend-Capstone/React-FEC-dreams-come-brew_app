import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-box">
      <h2 className="error-text">404 Page Not Found</h2>
      <img className='cart-img-empty' style={{ margin: 'auto' }} src='https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/Error-Page/Java-Cup.jpg' alt=''></img>
      <Link to="/">
        <button className="error-btn">Back To Homepage</button>
      </Link>
    </div>
  );
};

export default Error;
