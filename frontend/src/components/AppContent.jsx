import { useState } from "react";
import AuthContext from "./AuthContext";
import LoginForm from "./LoginForm";
import WelcomeContent from "./WelcomeContent";
import request, { removeAuthToken, setAuthToken } from "../axios_helper";
import Buttons from "./Buttons";

function AppContent() {

  const [componentToShow, setComponentToShow] = useState("welcome")


  const login = () => {
    setComponentToShow("login")
  }

  const logout = () => {
    removeAuthToken();
    setComponentToShow("welcome")
  }

  const onLogin = async (e, username, password) => {
    e.preventDefault()
    removeAuthToken()
    const req = await request("POST", "/log", { login: username, password: password });


    if (req.status === 200) {
      setAuthToken(req.data.token)
      setComponentToShow("messages")
    } else {
      setComponentToShow("register")
    }

  }
  const onRegister = async (e, firstName, lastName, username, password) => {
    e.preventDefault();
    const req = await request("POST", "/register", { firstName: firstName, lastName: lastName, login: username, password: password });
    if (req.status === 201) {
      setAuthToken(req.data.token)
      setComponentToShow("messages")
    } else {
      setComponentToShow("register")
    }

  }

  return (
    <div>
      <Buttons login={login} logout={logout} />
      {componentToShow === "welcome" && <WelcomeContent />}
      {componentToShow === "messages" && <AuthContext />}
      {componentToShow === "login" && <LoginForm onLogin={onLogin} onRegister={onRegister} />}
    </div>
  );
}

export default AppContent;