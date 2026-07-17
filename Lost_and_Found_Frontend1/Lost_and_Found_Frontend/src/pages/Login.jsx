import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/login",
        loginData
      );

      console.log(response.data);

      // Store JWT Token
      localStorage.setItem("token", response.data);

      alert("Login Successful");

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;