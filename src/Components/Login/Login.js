import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SocialLogin from "../../hooks/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import PasswordReset from "./PasswordReset/PasswordReset";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, loading1] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const [userInfo] = useAuthState(auth);
  if (userInfo) {
    navigate("/shop");
    // Navigate(from, {replace: true});
  }

  const [modalShow, setModalShow] = React.useState(false);

  // const [message, setMessage] = useState("");

  // const notify = async () => toast(message);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = await e.target.email.value;
    const password = await e.target.password.value;
    if (
      !/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/.test(password)
    ) {
      toast(
        "Please enter at least 8 character password with 1 UpperCase 1 Number & 1 special character"
      );
      // notify();
      return;
    } else {
      const success = await signInWithEmailAndPassword(email, password);
      success && toast("Successfully Login your account.");
      // user?.user?.email && toast("Successfully Login your account.");
    }
  };

  if (error) {
    console.error(error.message);
    toast(error.message);
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  return (
    <div className="form-container-login">
      {/* <p>Signed In User: {user?.user?.email}</p> */}
      <h2>Login</h2>
      <form onSubmit={handleSignIn} className="form-div" action="">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
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
            type="password"
            name="password"
            placeholder="  Enter your password"
            required
          />
        </div>
        <input className="sign-btn" type="submit" value="Login" />
        <div className="link-btn">
          <span>
            New to Ema-john? <Link to="/registration">Create New Account</Link>
          </span>
        </div>
        <div className="link-btn">
          <span>
            Forget Password?{" "}
            <Link to="" onClick={() => setModalShow(true)}>
              Reset Password
            </Link>
          </span>
        </div>
        <SocialLogin />
      </form>
      <ToastContainer />
      <PasswordReset show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Login;
