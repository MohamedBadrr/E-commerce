import React, { useEffect, useState } from "react";
import "./Login.css";
import loginImg from "../../assets/images/login1.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { initializeLocalStorage } from "../../assets/data/Data";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/user/user";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataUsers, setDataUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [aletMsg, setAlertMsg] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedUsers = initializeLocalStorage();
    setDataUsers(storedUsers);
  }, []);

  const handleLogin = () => {
    const user = dataUsers.find((user) => user.email === email);

    if (!user) {
      setAlertMsg("Email is not Found");
      setShowAlert(true);
    } else if (user.password !== password) {
      setAlertMsg("Password is not correct");
      setShowAlert(true);
    } else {
      dispatch(setUser(user));
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <form
        class="login"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-5 imglogin">
              <img src={loginImg} className="w-100 h-75" alt="" />
            </div>
            <div class="col-md-7 half2 text-center">
              <h1> Quicky Login Page</h1>
              {showAlert && (
                <div className="alert alert-danger w-75 mx-auto mt-3 p-2">
                  {aletMsg}
                </div>
              )}
              <div class="input2 text-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="User Name"
                  required
                />
                <br />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                class="mt-3 my-5 btnlogin default-btn text-center"
              >
                Log in
              </button>
              <p class="text-center">
                Don't have an account ?{" "}
                <NavLink className="second-color" to="/register">
                  Sign Up Now
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
