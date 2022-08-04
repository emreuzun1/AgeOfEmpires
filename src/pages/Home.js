import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUnits } from "../rxutils/actions/units";
import Navbar from "../components/Navbar";
import "../App.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUnits());
  }, []);
  return (
    <>
      <Navbar />
      <div className="img-container">
        <img
          src={require("../assets/680254.jpg")}
          className="img"
          data-testid="wallpaper"
        />
      </div>
    </>
  );
};

export default Home;
