import { useState, createContext } from "react";
import axios from 'axios'
import { json } from "react-router-dom";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [logInIcon, setLoginInIcon] = useState(null);

  const [newUser, setNewUser] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newPwd, setNewPwd] = useState("")
  const [errorMsg, setErrorMsg] = useState('')




  const toggleLogin = async (e) => {
    e.preventDefault()
    try {
   
      const response = await axios.post('https://dreamcomebrewserver.onrender.com/users/login', { loginName, loginPassword })

      const user = response.data;
      //if response is not false give session a userToken with a value of the users accessToken
      if(user !== false){
        sessionStorage.setItem('userToken', user.accessToken)
      }

      //change user value to boolean
      let foundUser = user
      if(foundUser !== false){
        foundUser = true
      }else{
        foundUser = false
      }

      setLoginName("");
      setLoginPassword("");
      setLoginInIcon(foundUser);
    } catch (error) {
      console.error(error.message)
    }


  };

  const logOut = (e) => {
    e.preventDefault();
    setLoginInIcon(null);
    //clears the session storage when user log out
    sessionStorage.clear(loginName)
  };

  const logIn = (e) => {
    setLoginName(e.target.value);
  };

  const handlePassword = (e) => {
    setLoginPassword(e.target.value);
  };


  const handleUserName = (e) => {
    setNewUser(e.target.value)
  }

  const handleEmail = (e) => {
    setNewEmail(e.target.value)
  }

  const handleNewPwd = (e) => {
    setNewPwd(e.target.value)
  }


  const handleCreateNewUser = async (e) => {
    e.preventDefault();
    try {
      //test create user//pass
      const response = await axios.post('https://dreamcomebrewserver.onrender.com/users', { newUser, newEmail, newPwd })
      const result = response.data
      setErrorMsg(result.message)
      setNewEmail("")
      setNewPwd("")
      setNewUser("")
    } catch (error) {
      console.error(error.message)
    }

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
        handleEmail,
        handleNewPwd,
        handleUserName,
        newUser,
        newPwd,
        newEmail,
        setLoginInIcon,
        errorMsg
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;