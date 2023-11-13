/* eslint-disable react/prop-types */
import hot from "../assets/hot.png";
import cold from "../assets/cold.png";
function WeatherListInfo({ weather }) {
  if (!weather) {
    return null;
  }
  return (
    <>
      <div className="   flex-1 flex items-center  justify-center ml-2">
        {weather.temp >= 0 ? (
          <img src={hot} alt="" className="w-24 h-24" />
        ) : (
          <img src={cold} alt="" className="w-24 h-24" />
        )}
      </div>
      <div className="   flex-1 flex flex-col  items-start justify-center  font-bold ml-3">
        <h1 className="text-5xl">{weather.temp}&deg;C</h1>
        <h1 className="mt-3">Feels like {weather.feels_like}&deg;C</h1>
      </div>
    </>
  );
}

export default WeatherListInfo;
