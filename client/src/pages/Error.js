import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>ERROR</h2>
      <Link to="/">
        <button> Back Home</button>
      </Link>
    </div>
  );
};

export default Error;
