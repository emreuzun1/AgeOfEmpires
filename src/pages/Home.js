import React from "react";
import Navbar from "../components/Navbar";
import "../App.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="img-container">
        <img src={require("../assets/680254.jpg")} className="img" />
      </div>
    </>
  );
};

export default Home;
