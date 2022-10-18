import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";
import { Link } from "react-router-dom";
/*When logged, return to main.*/
/*Add log out to main page.*/

const Login = () => {
  const {
    logInIcon,
    toggleLogin,
    handleCreateNewUser,
    handlePassword,
    logIn,
    logOut,
    loginPassword,
    loginName,
  } = useContext(LoginContext);

  console.log(logInIcon);
  if (logInIcon === true) {
    return (
      <>
        <h1 className="loggedinHeader">Login Successful</h1>
        <div className="loginSuccessButtonDivs">
          <Link to="/Cart">
            <button className="login-Buttons">Back To Cart</button>
          </Link>
          <button className="login-Buttons" onClick={logOut}>
            Log Out
          </button>{" "}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="loginHeader">Log In Or Create An Account</h1>
        <div className="mainDivContainer">
          {/*Login for existing users*/}
          <div className="login-createContainers">
            <h4 className="create-login-headers">Log In</h4>
            <form onSubmit={toggleLogin}>
              <input
                className="inputBox"
                type="text"
                onChange={logIn}
                placeholder="User Name"
                value={loginName}
              />
              <br></br>
              <input
                className="inputBox"
                type="password"
                onChange={handlePassword}
                placeholder="Password"
                value={loginPassword}
              />
              <br></br>
              <button type="submit" className="loginButtons">
                {" "}
                Log In{" "}
              </button>
            </form>
          </div>

          <div className="login-createContainers">
            <h2 className="create-login-headers"> Create Account </h2>
            <form>
              <input
                className="inputBox"
                type="text"
                placeholder="User Name"
                required
              />
              <br></br>
              <input
                className="inputBox"
                type="email"
                placeholder="Email"
                required
              />
              <br></br>
              <input
                className="inputBox"
                type="password"
                placeholder="Password"
                required
              />
              <br></br>
              <input
                className="inputBox"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <br></br>
              <button onClick={handleCreateNewUser} className="loginButtons">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Login;