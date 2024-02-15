import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created ");
    const accountData = {
      ...formData,
    };
    console.log("acoount data ", accountData);
    navigate("/dashbord");
  };
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter First Name"
              required
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>
          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter Last Name"
              required
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter Email Address"
            required
            name="email"
            onChange={changeHandler}
            value={formData.email}
          />
        </label>

        <label>
          <p>
            Create Password <sup>*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            required
            name="password"
            onChange={changeHandler}
            value={formData.password}
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label>
          <p>
            Confirm Password <sup>*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            required
            name="confirmPassword"
            onChange={changeHandler}
            value={formData.confirmPassword}
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
