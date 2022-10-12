import { useState, createContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [logInIcon, setLoginInIcon] = useState(false);

  const toggleLogin = () => {
    setLoginName("");
    setLoginPassword("");
    setLoginInIcon(!logInIcon);
  };

  const logOut = (e) => {
    e.preventDefault();
    setLoginInIcon(false);
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

  return (
    <LoginContext.Provider
      value={{
        logInIcon,
        toggleLogin,
        handleCreateNewUser,
        handlePassword,
        logIn,
        logOut,
        loginName,
        loginPassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
