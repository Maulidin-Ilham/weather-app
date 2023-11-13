/* eslint-disable react/prop-types */
function OtherListInfo({ humidity, wind, weather }) {
  if (!weather) {
    return null;
  }
  return (
    <>
      <div className="flex-1  flex flex-col justify-center items-center">
        <img src={humidity} alt="" className="w-11 h-11" />
        <h1 className="mt-2">Humidity</h1>
        <h1>{weather.humidity}%</h1>
      </div>
      <div className="flex-1  flex flex-col justify-center items-center">
        <img src={wind} alt="" className="w-11 h-11" />
        <h1 className="mt-2">Wind</h1>
        <h1>{weather.wind_speed} km/h</h1>
      </div>
    </>
  );
}

export default OtherListInfo;
