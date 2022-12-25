import React from "react";
import { useParams } from "react-router-dom";
import Planets from "../data/Planets";

const PickDestination = () => {

    let { id } = useParams()
  
  return (
    <div className="container mt-52 mx-auto fadein-animation">
      <div
        className="text-white flex font-barlow"
        style={{ letterSpacing: "4.725px", fontSize: "28px" }}
      >
        <p className="opacity-25 pr-3">01 </p>
        <p className=""> PICK YOUR DESTINATION</p>
      </div>
        <div>
          <img src={Planets.image} alt="Planet" />
        </div>
    </div>
  );
};

export default PickDestination;
