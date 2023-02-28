import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 20px 10px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #bbb;
  background: white;
  font-family: Montserrat;
`;
const AppLabel = styled.span`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 20px auto;
`;
function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=08a0f9fed92f7d502f32ed52b8557ea7`
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>

      {weather && city ? (
        <WeatherComponent weather={weather}/>
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
