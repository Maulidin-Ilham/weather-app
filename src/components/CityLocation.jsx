/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import location from "../assets/location.png";
import axios from "axios";

const CityLocation = ({ locationInput, input, weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <div className="bg-bluePrimary mt-4 w-full py-3 rounded-2xl  shadow-2xl flex flex-row items-center font-semibold">
      <img src={location} alt="" className="w-8 h-8 ml-2" />
      {locationInput && locationInput.length > 0 ? (
        <h1 className="ml-2 pr-3">
          {locationInput[0].name}, {locationInput[0].country}
        </h1>
      ) : (
        <h1 className="ml-2 pr-3">{input}</h1>
      )}
    </div>
  );
};

export default CityLocation;
