import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import toast from "react-hot-toast";

const Navbar = (Props) => {
  let isLoggedIn = Props.isLoggedIn;
  let setIsLoggedIn = Props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex ml-5 mr-3 gap-3">
        {!isLoggedIn && (
          <Link to="/signin">
            <button>LogIn</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("logout successfully");
              }}
            >
              LogOut
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashbord">
            <button>Dashbord</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
