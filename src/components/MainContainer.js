import React, { useEffect, useState } from "react";
import { Api, apiKey } from "../contants/keys";
import WeatherCard from "./WeatherCard";
import Shimmer from "./utils/Shimmer";
const MainContainer = () => {
  const [cityName, setCityName] = useState("");
  const [search, setSearch] = useState("indore");
  const [weatherData, setWeatherData] = useState([]);
  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [search]);
  const getData = async () => {
    const data = await fetch(Api + search + apiKey);
    const json = await data.json();

    setWeatherData(json);
  };
  if (weatherData.length === 0) return <Shimmer />;

  return (
    <div>
      <div className=" my-6 flex justify-center items-center">
        <input
          className="bg-gray-50 hover:bg-yellow-50 shadow-md text-black font-bold py-2 px-4 rounded"
          type="text"
          placeholder="city name"
          value={cityName}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <button
          className="bg-gray-50 hover:bg-green-50 ml-4 shadow-md text-black font-bold py-2 px-4 rounded"
          onClick={() => {
            setSearch(cityName);
          }}
        >
          Enter
        </button>
      </div>
      <div>
        <WeatherCard data={weatherData} />
      </div>
    </div>
  );
};

export default MainContainer;
