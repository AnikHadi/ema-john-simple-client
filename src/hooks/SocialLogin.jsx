import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
import facebook from "../images/social/facebook.png";
import github from "../images/social/github.png";
import google from "../images/social/google.png";
import Loading from "../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();

  // let errorElement;

  if (loading || loading1 || loading2) {
    return <Loading></Loading>;
  }

  if (error || error1 || error2) {
    // errorElement = (
    //   <p className="text-danger">
    //     Error: {error?.message} {error1?.message} {error2?.message}
    //   </p>
    // );
    toast(error?.message);
    toast(error1?.message);
    toast(error2?.message);
  }

  if (user || user1 || user2) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-black w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-black w-50"></div>
      </div>
      {/* {errorElement} */}
      <div className="">
        <button onClick={() => signInWithGoogle()} className="google-btn">
          <img src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button onClick={() => signInWithFacebook()} className="google-btn">
          <img src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button onClick={() => signInWithGithub()} className="google-btn">
          <img src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SocialLogin;
