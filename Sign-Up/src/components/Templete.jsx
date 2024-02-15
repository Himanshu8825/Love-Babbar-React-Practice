// Templete.jsx
import React from "react";
import frameImg from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";

const Templete = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formType === "login" ? (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>SignUp with Google</p>
        </button>
      </div>
      <div>
        <img
          src={frameImg}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Templete;
