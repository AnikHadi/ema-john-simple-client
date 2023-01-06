import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import Loading from "../Loading/Loading";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut, loading] = useSignOut(auth);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    console.log(user);
  }

  return (
    <div className="sticky-top">
      <nav>
        <Link to="/shop">
          <img src={logo} alt="" />
        </Link>
        <nav className="nav-bar">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/shop">Shop</CustomLink>
          <CustomLink to="/order">Order review</CustomLink>
          <CustomLink to="/manage">Manage Inventory</CustomLink>
          {user ? (
            <span className="text-white">
              {" "}
              {user?.displayName}
              <CustomLink
                to="/login"
                onClick={async () => {
                  const success = await signOut();
                  if (success) {
                    toast("You are sign out successfully");
                  }
                }}
              >
                Sign out
              </CustomLink>
            </span>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )}
        </nav>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Header;
