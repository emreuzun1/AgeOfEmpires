import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { getUnits } from "../rxutils/actions/units";

const Units = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUnits());
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Units;
