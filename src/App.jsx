import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7f677683b417e1d5bb714179588b3d34`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main); //resJson.main - check json
    };

    fetchApi();
  }, [search]); //search This part is the dependency array of the useEffect hook.
  //It is used to rerun the renders form the search

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>

      {!city ? ( //  {!city ? ( ... ) : ( ... )} - terminal conditional operator
        <p className="error_message">No Data Found</p>
      ) : (
        <div>
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view">{search}</i>
            </h2>
            <h1 className="temp">{city.temp} °C</h1>
            <h3 className="tempmin_max">
              Min :{city.temp_min} °C | Max : {city.temp_max} °C
            </h3>
          </div>

          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
      )}
    </>
  );
}

export default App;
