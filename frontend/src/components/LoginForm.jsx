import { useState } from "react";



function LoginForm({onLogin, onRegister}) {

  const [option, setOption] = useState(true)
  const [loginForm,setLoginForm] = useState({login:"", password: ""})
  const [registerForm, setRegisterForm] = useState({firstName: "", lastName: "" , login: "", password: ""})
 

  const handleSubmitChange = (e) =>{
      if(option){
        onLogin(e , loginForm.login,  loginForm.password)
      }else{
        onRegister(e,registerForm.firstName, registerForm.lastName, registerForm.login, registerForm.password)
      }
      
  }


  const formLogin =
    <div>
      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="loginName">
          Username
        </label>
        <input
          type="login"
          name="login"
          id="loginName"
          className="form-control"
          value={loginForm.login} 
          onChange={(e) =>{setLoginForm({... loginForm, login: e.target.value})}}/>
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="loginPassword">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="loginPassword"
          className="form-control"
          value={loginForm.password} 
          onChange={(e) =>{setLoginForm({... loginForm, password: e.target.value})}} />
      </div>
    </div>;

  const formRegister =
    <div>
      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-control" 
          value={registerForm.firstName} 
          onChange={(e) =>{setRegisterForm({... registerForm, firstName: e.target.value})}}/>
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-control" 
          value={registerForm.lastName} 
          onChange={(e) =>{setRegisterForm({... registerForm, lastName: e.target.value})}}/>
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="loginName">
          Username
        </label>
        <input
          type="login"
          name="login"
          id="loginName"
          className="form-control" 
          value={registerForm.login} 
          onChange={(e) =>{setRegisterForm({... registerForm, login: e.target.value})}}/>
      </div>

      <div className="form-outline mb-4">
        <label
          className="form-label"
          htmlFor="loginPassword">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="loginPassword"
          className="form-control" 
          value={registerForm.password} 
          onChange={(e) =>{setRegisterForm({... registerForm, password: e.target.value})}}/>
      </div>
    </div>


  return (
    <div className="row justify-content-md-center mt-2">
      <div className="col-4">
        <div style={{ width: "18rem" }}>
          <ul className="nav nav-pills nav-justified mb-3" id="ex1" rol="tablist">

            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${option ? "bg-primary text-light" : ""} `}
                id="tab-login"
                onClick={(e) => { setOption(true) }}>
                Login
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${!option ? "bg-primary text-light" : ""} `}
                id="tab-login"
                onClick={(e) => { setOption(false) }}>
                Register
              </button>

            </li>

            <div className="tab-content mt-3">

              <form >
                {option ? formLogin : formRegister}

                <button
                  type="button"
                  className="btn btn-primary btn-block md-4"
                  onClick={handleSubmitChange}>
                  Sign in
                </button>

              </form>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;