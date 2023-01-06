import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SocialLogin from "../../hooks/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import "./Signup.css";

const Signup = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = await e.target.email.value;
    const password = await e.target.password.value;
    const confirmPassword = await e.target.confirmPass.value;

    if (!(password === confirmPassword)) {
      toast("Password didn't match!");
      return;
    } else {
      if (
        /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/.test(password)
      ) {
        const success = await createUserWithEmailAndPassword(email, password);
        success && toast("Successfully create your account.");
      } else {
        toast(
          "Please enter at least 8 character password with 1 UpperCase 1 Number & 1 special character"
        );
        return;
      }
    }
  };

  if (error) {
    toast(error.message);
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="form-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp} className="form-div" action="">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            // onBlur={handleEmail}
            type="email"
            name="email"
            placeholder="  Enter your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <br />
          <input
            // onBlur={handlePassword}
            type="password"
            name="password"
            placeholder="  Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Confirm Password">Confirm Password</label>
          <br />
          <input
            // onBlur={handleConfirmPassword}
            type="password"
            name="confirmPass"
            placeholder="  Re-enter your password"
            required
          />
        </div>
        <input className="sign-btn" type="submit" value="Sign Up" />
        <div className="link-btn">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
        <SocialLogin />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
