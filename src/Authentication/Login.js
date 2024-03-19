import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_BASE_URL } from "../HomeComponenet/apiConfig";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.email.trim() && formData.password.trim()) {
      try {
        const customer = {
          email: formData.email,
          password: formData.password,
        };
        const response = await axios.post(`${API_BASE_URL}/login`, {
          customer,
        });
  
        console.log("Response status:", response.status);
  
        if (response.status === 200) {
          console.log("Login success!");
          toast.success("Login Successfully!");
          // const uId = response.data.response.customer.id;
          // localStorage.setItem("uId", uId);
          console.log("Navigating to homepage...");
          navigate("/homepage");
        }
      } catch (error) {
        console.error("Login error:", error);
        if (error.response && error.response.status === 401) {
          toast.error("Invalid email or password. Please try again.");
        } else if (error.response && error.response.status === 422) {
          const errorData = error.response.data;
          console.error("Validation error:", errorData);
        } else {
          console.error("An unexpected error occurred:", error);
          toast.error("An unexpected error occurred. Please try again later.");
        }
      }
    } else {
      toast.error("Please fill in both email and password fields");
    }
  };
  
  const handleRegistration = () => {
    navigate("/signup");
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://jurnal.iicet.org/plugins/themes/titanTheme/images/login.webp"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <a href="#!">Forgot password?</a>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  style={{ marginBottom: "10px" }}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg btn-block"
                  onClick={handleRegistration}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
      />
    </section>
  );
};

export default Login;
