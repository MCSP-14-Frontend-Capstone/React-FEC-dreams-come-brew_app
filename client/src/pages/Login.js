import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import NavBar from "../components/NavBar";

/*When logged, return to main.*/
/*Add log out to main page.*/

const Login = () => {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [logInIcon, setlogInIcon] = useState(false); //If set to true, logged in page works.

  const logOut = (e) => {
    e.preventDefault();
    setlogInIcon(false);
  };

  /*For future use*/
  // const [newUserName, setNewUserName] = useState({})
  // const [email, setEmail] = useState ({})
  // const [newPassword, setNewPassword] = useState ({})
  // const [comfirmPassWord, setConfirmPassword] = useState ({})

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginName("");
    setLoginPassword("");
    setlogInIcon(true);
    alert(`Welcome, ${loginName}!`);
  };

  const logIn = (e) => {
    e.preventDefault();
    setLoginName(e.target.value);

    /*Change the login logo color to indicate logged in/logged out. 
    When logged in, change text to 'logged out'.*/
    /*Display "Login Succcessful"*/
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setLoginPassword(e.target.value);
  };

  const handleCreateNewUser = (e) => {
    e.preventDefault();
    console.log(e);
  };

  if (logInIcon === true) {
    return (
      <>
        <h1>You are now logged in.</h1>
        <button className="loginButtons" onClick={logOut}>
          Click To Log Out
        </button>
      </>
    );
  } else {
    return (
      <>
        <h1 className="loginHeader">Please Log In Or Create An Account</h1>

        {/*Login for existing users*/}
        <div>
          <h4 className="create-login-headers">Existing Users Login</h4>
          <form onSubmit={handleLogin}>
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
              type="text"
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

        <div className="newUsers">
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
              type="text"
              placeholder="Password"
              required
            />
            <br></br>
            <input
              className="inputBox"
              type="text"
              placeholder="Confirm Password"
              required
            />
            <br></br>
            <button onClick={handleCreateNewUser} className="loginButtons">
              Create Account
            </button>
          </form>
        </div>
      </>
    );
  }
};

export default Login;
