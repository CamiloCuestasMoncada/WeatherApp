import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './weatherData/index';
import './styles.css';
import {SUN,SNOW,RAIN,FOG,WIND,} from './../../constants/weathers';
import convert from 'convert-units';
import transformWeather from './../../servicios/transformWeather';
import getUrlWeatherByCity from './../../servicios/getUrlWeatherByCity';




const data = {
    temperature:7,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}


class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const{city} = props;
        this.state={
          city,  /*city: city, como se llama igual solo pongo city*/
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMoun");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    


   handleUpdateClick=()=>{
       const api_weather = getUrlWeatherByCity(this.state.city)
       fetch(api_weather).then(resolve => {
         
           return resolve.json();
       }).then(data => {
             const newWeather = transformWeather(data);
             console.log(newWeather);
            debugger;
             this.setState({ /*Thisstae solo se usa en el contructor despues hay q usar setstate*/
           
                    data: newWeather,
                    
             });
        console.log(data);
        
       });
       
    
   }
    render(){
        const {onWeatherLocationClick} = this.props;
        console.log("render");
        const{city, data}= this.state;
       return(
        <div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city= {city}></Location>
        {data ? 
        <WeatherData data={data}></WeatherData> :
        <CircularProgress/>
        
      

        
        }   
        
        </div>
       )
   } 
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;
