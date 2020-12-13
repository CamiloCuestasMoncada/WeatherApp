import React from 'react';
import WeatherIcons from 'react-weathericons';
import {SUN, SNOW, RAIN, WIND, FOG, THUNDER, DRIZZLE, CLOUD} from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './style.css';
/*const WeatherTemperature = () => (
    <div><span>25º</span></div>
); sin destructuring*/
const icons={
    [SUN]:"day-sunny", 
    [FOG]: "day-fog", 
    [SNOW]: "snow", 
    [RAIN]:"rain", 
    [WIND]:"windy",
    [THUNDER]:"day-thunderstorm",
    [DRIZZLE]:"day-showers",
    [CLOUD]:"cloud"};
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon="3x";
    if(icon)
        return<WeatherIcons className="wicon" name={icon} size={sizeIcon}/>;
    else return<WeatherIcons className="wicon" name ={"day-sunny"} size= {sizeIcon}/>;
}
const WeatherTemperature=({temperature, weatherState}) =>(
    <div className="WeatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{` ${temperature}`}</span>
        <span className="temperatureType">{`cº`}</span>
    </div>
    
)
WeatherTemperature.propTypes = {
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string.isRequired,
};

export default WeatherTemperature;