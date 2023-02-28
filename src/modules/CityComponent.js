import React from "react";
import styled from "styled-components";

const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const ChoseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;
`;
const SearchBox = styled.form`
display:flex;
border:1px solid black;
border-radius:2px;
margin:20px;
& input{
    font-weight:bold;
    border:none;
    outline:none;
    font-size:14px;
    padding:10px;
    flex:3;
}
& button{
    font-weight:bold;
    background-color:black;
    color:white;
    border:none;
    outline:none;
    font-size:14px;
    padding:0px 10px;
    cursor:pointer;
    flex:1;
}
}
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={"icons/perfect-day.svg"} />
      <ChoseCityLabel>Find Weather of your city</ChoseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input type="text" placeholder="Enter the city" onChange={(e)=>updateCity(e.target.value)} />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
