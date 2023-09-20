import { useState } from "react";
import AuthContext from "./AuthContext";
import LoginForm from "./LoginForm";
import WelcomeContent from "./WelcomeContent";
import request , {setAuthToken} from "../axios_helper";
import Buttons from "./Buttons";

function AppContent() {

  const [componentToShow, setComponentToShow] = useState("welcome")
  

  const login = () =>{
    setComponentToShow("login")
  }

  const logout = () =>{
    setComponentToShow("welcome")
  }

  const onLogin = async(e, username, password) =>{
    e.preventDefault()
    const req = await request("POST", "/log", {login: username, password: password});

    const data = await req.data
    console.log(data)
    req.status === 200 ? 
    (() =>{
    setAuthToken(data.token)
    setComponentToShow("messages");
    }): setComponentToShow("welcome")

  }
  const onRegister = async(e, firstName, lastName, username, password) =>{
    e.preventDefault();
    const req = await request("POST", "/register", {firstName: firstName, lastName: lastName,login: username, password: password});
    req.status === 200 ? setComponentToShow("messages") : setComponentToShow("welcome")

  }

  return (
  <div>
    <Buttons login={login} logout={logout}/>
    {componentToShow === "welcome" && <WelcomeContent/>}
    {componentToShow === "messages" && <AuthContext/>}
    {componentToShow === "login" && <LoginForm onLogin={onLogin} onRegister={onRegister}/>}
  </div>
  );
}

export default AppContent;