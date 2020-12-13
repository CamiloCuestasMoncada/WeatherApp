import React from'react';
import WeatherLocation from './weatherLocation';
import PropTypes from 'prop-types';
import './style2.css';



const LocationList = ({ cities, onSelectedLocation }) => {
    
    const handleWeatherLocationClick = ciudad => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(ciudad);
    }

    const ObtengodelArray = ciudad => 
    <WeatherLocation 
        key={ciudad} 
        city= {ciudad}
        onWeatherLocationClick={() => handleWeatherLocationClick(ciudad)}
    />;
    
    
    const strToComponents = cities => {
    
        return(
        cities.map( ObtengodelArray )
        )
    }; 
    return( 
<div className="LocationList">
   {strToComponents(cities)}
</div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;