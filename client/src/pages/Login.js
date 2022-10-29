import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";
import { Link } from "react-router-dom";
/*When logged, return to main.*/
/*Add log out to main page.*/

const Login = () => {
  const {
    logInIcon,
    setLoginInIcon,
    toggleLogin,
    handleCreateNewUser,
    handlePassword,
    logIn,
    logOut,
    loginPassword,
    loginName,
    handleEmail,
    handleNewPwd,
    handleUserName,
    newUser,
    newPwd,
    newEmail,
    errorMsg
  } = useContext(LoginContext);



  const handleSubmit = (e) => {
    console.log('jdkf')
  }


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
  } else if (logInIcon === false) {
    return (
      <div className="test">
        <h4 className="">Incorrect User Name or Password</h4>
        <button className="loginButtons" onClick={() => { setLoginInIcon(null) }}>ok</button>
      </div>
    )

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
            <form onSubmit={handleCreateNewUser}>
              <input
                className="inputBox"
                type="text"
                placeholder="User Name"
                onChange={handleUserName}
                value={newUser}
                required
              />
              <br></br>
              <input
                className="inputBox"
                type="email"
                placeholder="Email"
                onChange={handleEmail}
                value={newEmail}
                required
              />
              <br></br>
              <input
                className="inputBox"
                type="password"
                placeholder="Password"
                onChange={handleNewPwd}
                value={newPwd}
                required
              />
              <br></br>
              <p className="error-login">{errorMsg}</p>
              <br></br>
              <button type="submit" className="loginButtons">
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