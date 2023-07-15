const WeatherCard = (data) => {
  const condition = data?.data?.weather?.[0]?.main;
  const { name, main, weather } = data.data;
  const weatherType = weather?.[0]?.main;
  let setImage;
  console.log(condition);
  if (condition === "Clouds") {
    setImage =
      "data:image/jpeg;base64,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";
  } else if (condition === "Thunderstorm") {
    setImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolk1Z5Eh0llVrK1BcofGXYN0ogbgWXrmwYw&usqp=CAU";
  } else if (condition === "Haze") {
    setImage =
      "https://thumbs.dreamstime.com/b/cloud-abstract-lines-fog-haze-simple-icon-design-foggy-hazy-weather-linear-logo-flat-contoured-vector-illustration-211331519.jpg";
  } else {
    setImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopcJal017Bg_uaglVGm273RWQL-k9oYfhqw&usqp=CAU";
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-md">
      <img
        className="w-full h-80 object-cover"
        src={setImage}
        alt="Card "
      ></img>

      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">Place : {name}</h1>
        <h1 className="text-gray-600 text-xl">
          {" "}
          Temprature : {Math.round(main?.temp - 273)}°C
        </h1>
        <h1 className="text-gray-600 text-xl">weather : {weatherType}</h1>
        <div className="flex">
          <h1 className="text-gray-600 text-xl">
            min temp : {Math.round(main?.temp_min - 273)}°C
          </h1>
          <h1 className="text-gray-600 text-xl ml-10">
            max : temp : {Math.round(main?.temp_max - 273)}°C
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
