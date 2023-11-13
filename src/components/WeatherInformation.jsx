/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import cancel from "../assets/cancel.png";
import { useState, useEffect } from "react";
import axios from "axios";
import WeatherListInfo from "./WeatherListInfo";
import OtherListInfo from "./OtherListInfo";
import CityLocation from "./CityLocation";

const WeatherInformation = ({ input = "" }) => {
  const [weather, setWeather] = useState(null);
  const [locationInput, setLocationInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    if (!input) {
      return;
    }
    const city = `${input}`;

    const apiKey = "RaDCj37GoRFkBRbyVvuoYw==Q5E5RHZU1za6uZxH";
    const apiUrl = `https://api.api-ninjas.com/v1/weather?city=${city}`;

    try {
      setLoading(true);
      let response = await axios.get(apiUrl, {
        headers: {
          "X-Api-Key": apiKey,
        },
        contentType: "application/json",
      });
      setWeather(response.data);

      setLoading(false);
    } catch (error) {
      setError("City not found");
      setLoading(false);
    }
  };

  const getLocationInput = async () => {
    if (!input) {
      return; // Exit the function if input is empty
    }

    const apiKey = "RaDCj37GoRFkBRbyVvuoYw==Q5E5RHZU1za6uZxH";
    const apiUrl = `https://api.api-ninjas.com/v1/city?name=${input}`;

    try {
      let response = await axios.get(apiUrl, {
        headers: {
          "X-Api-Key": apiKey,
        },
        contentType: "application/json",
      });

      setLocationInput(response.data);
    } catch (error) {
      console.error("Error: ", error.response.data);
      setError("City not found");
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(null);
    setWeather(null);

    getWeather();
    getLocationInput();
  }, [input]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-[336px]">
          <div
            className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center w-full h-[336px] text-red-700 text-center font-bold">
          <div>
            <img src={cancel} alt="" className="w-11 h-11" />
          </div>
          <div className="ml-3">
            <p className="text-xl">{error}</p>
          </div>
        </div>
      ) : input ? (
        <>
          <div className="bg-bluePrimary  w-full h-44 rounded-2xl flex flex-row justify-center shadow-2xl tracking-wider">
            <WeatherListInfo weather={weather} />
          </div>
          <div className="bg-bluePrimary mt-4 w-full h-44 rounded-2xl shadow-2xl flex flex-row font-semibold">
            <OtherListInfo humidity={humidity} wind={wind} weather={weather} />
          </div>
          <CityLocation
            locationInput={locationInput}
            input={input}
            weather={weather}
          />
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-[336px] text-center font-bold">
          <p className="text-xl text-green-600">Please enter a city.</p>
        </div>
      )}
    </>
  );
};

export default WeatherInformation;
