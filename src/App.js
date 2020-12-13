import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './logo.svg';
import {Grid, Col, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import PropTypes from 'prop-types';

const cities = [
  'Soacha, co',
  'Buenos Aires, ar',
  'Cuchilla Alta, uru',
  'Molina de Aragón, es',
  'Alaska, can',
  'Brasilia, br',
];

class App extends Component {
  
  
  constructor() {
    super();
    this.state = { city: null};
    
  }
 
  

  handleSelectedLocation = city =>  {
    this.setState({city});
    console.log(`handleSelectedLocation ${city}`)
  }


  render() {
    
    const {city} =  this.state;
    
   
    return (
   
      
    <Grid>
    
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
          <Typography variant='title' color='inherit'>
             Weather App  
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList 
            cities = {cities}
            onSelectedLocation = {this.handleSelectedLocation}>

          </LocationList>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details"> 
            {city === null? /* tambien se podria hacer negandolo !city? */
              <h1> Esperando pronostico extendido</h1>:
              <ForecastExtended city={city}></ForecastExtended>
              }
              
            </div>
          </Paper>
          

         
        </Col>
      </Row>
      
      <header>
      
    
      </header>
      </Grid>
  );
}
}
export default App;
