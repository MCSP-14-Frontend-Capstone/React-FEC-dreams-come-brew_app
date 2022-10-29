import { useState, createContext } from "react";
import axios from 'axios'

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
      //login test//pass
      const response = await axios.post('https://dreamcomebrewserver.onrender.com/users/login', { loginName, loginPassword })
      // const response = await axios.post('https://dreamcomebrewserver.onrender.com/users/login', { loginName, loginPassword })

      const result = response.data
      setLoginName("");
      setLoginPassword("");
      setLoginInIcon(result);
    } catch (error) {
      console.error(error.message)
    }


  };

  const logOut = (e) => {
    e.preventDefault();
    setLoginInIcon(null);
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