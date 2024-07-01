import React, { useState, useEffect } from "react";
import "./Register.css";
import loginImg from "../../assets/images/login2.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { initializeLocalStorage } from "../../assets/data/Data";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    const storedUsers = initializeLocalStorage();
    setDataUsers(storedUsers);
  }, []);

  const handleRegister = () => {
    const existingUser = dataUsers.find((user) => user.email === email);
    if (existingUser) {
      alert("Email already exists");
      return;
    }
    const newUser = {
      name: name,
      email: email,
      password: password,
      isLogged: false,
    };
    const updatedUsers = [...dataUsers, newUser];
    setDataUsers(updatedUsers);
    localStorage.setItem("dataUsers", JSON.stringify(updatedUsers));
    alert("User registered successfully!");
    navigate("/login");
  };

  return (
    <div>
      <div className="login-page ">
        <form
          className="login register"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 imglogin imgRegister">
                <img src={loginImg} className="w-100 h-75" alt="" />
              </div>
              <div className="col-md-7 half2 register-inputs text-center">
                <h1>Quicky Sign Up Page</h1>
                <div className="input2 text-center">
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Full Name"
                  />
                  <br />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                  <br />
                  <input
                    required
                    type="number"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    placeholder="Enter Phone Number"
                  />
                  <br />
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 my-5 btnlogin default-btn text-center"
                >
                  Sign UP
                </button>
                <p className="text-center">
                  Already have an account{" "}
                  <NavLink className="second-color" to="/login">
                    Log in
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
