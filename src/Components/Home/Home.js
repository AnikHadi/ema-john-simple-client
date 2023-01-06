import React from "react";
import { Link } from "react-router-dom";
import pic from "../../images/lady-img.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-details">
        <small>
          <span>Sale up to 70% off</span>
        </small>
        <div className="home-details-main">
          <h2>New Collection For Fall</h2>
          <p>Discover all the new arrivals of ready-to-ware collection.</p>
        </div>
        <Link to="/shop">SHOP NOW</Link>
      </div>
      <div className="home-img">
        <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default Home;
