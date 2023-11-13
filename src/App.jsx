/* eslint-disable no-unused-vars */
import { useState } from "react";
import CityLocation from "./components/CityLocation";
import SearchBar from "./components/SearchBar";
import WeatherInformation from "./components/WeatherInformation";
import axios from "axios";
import { useEffect } from "react";
import { debounce } from "lodash";
function App() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const debouncedOnChange = debounce(handleInput, 800);

  return (
    <div className="h-screen bg-blueLg p-5 text-white">
      <SearchBar input={input} debouncedOnChange={debouncedOnChange} />
      <div className="inner-container bg-greyLg rounded-xl shadow-2xl container max-w-sm mx-auto p-6 mt-4">
        <WeatherInformation input={input} />
      </div>
    </div>
  );
}

export default App;
