import React from "react";
import styled from "styled-components";

export const WeatherInfoIcons = {
  sunrise: "/icons/temp.svg",
  sunset: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 20px;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherIcon = styled.img`
  width: 120px;
  height: 120px;
  margin: 20px auto;
`;
const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin: 20px auto;
  text-transform: capitalize;
`;
const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  margin: 10px;
  text-align: start;
`;
const WeatherInfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
`;
const InfoIcon = styled.img`
  width: 34px;
  height: 34px;
`;
const InfoLabel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0]?.icon?.includes("d");

  const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <WeatherContainer>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{" "}
          {` | ${weather?.weather[0]?.description}`}
        </Condition>
        <WeatherIcon
          src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
        />
      </WeatherContainer>
      <Location>{`${weather?.name} , ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
          name={`${isDay ? "sunset" : "sunrise"}`}
        />

        <WeatherInfoComponent
          value={`${weather?.main?.humidity}`}
          name="humidity"
        />

        <WeatherInfoComponent value={`${weather?.wind?.speed}`} name="wind" />

        <WeatherInfoComponent
          value={`${weather?.main?.pressure}`}
          name="pressure"
        />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
