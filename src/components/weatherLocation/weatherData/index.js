import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import './style.css';
import PropTypes from 'prop-types';

/*const WeatherData = ({data}) => {
    const{temperature, weatherState, humidity, wind}=data;
   return (<div className="WeatherDataCont">
        <WeatherTemperature 
        temperature = {temperature} 
        weatherState = {weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};Aca esta hecho con destructuring simple ahora vamos a usar destructuring con objetos complejos*/

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => {
    
   return (<div className="WeatherDataCont">
        <WeatherTemperature 
        temperature = {temperature} 
        weatherState = {weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};

WeatherData.propTypes={  /*Validando un objeto*/ 
    data: PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,  
    }).isRequired,
   
}
export default WeatherData;