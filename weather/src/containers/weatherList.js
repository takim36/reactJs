import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {

  renderCity = (cityEach) => {
    console.log(cityEach);
    const  { id, name, coord } = cityEach.city;
    const temps = cityEach.list.map(weather => weather.main.temp);
    const humidities = cityEach.list.map(weather => weather.main.humidity);
    const pressures = cityEach.list.map(weather => weather.main.pressure);

      return (<tr key = {id}>
          <td><GoogleMap lat={coord.lat} lon = {coord.lon} />
          </td>
          <td><Chart data={temps} color="red" units="K" /></td>
          <td><Chart data={humidities} color="green" units="hPa" /></td>
          <td><Chart data={pressures} color="blue"  units="%" /></td>
        </tr>

      );
  }

  render() {
    return (
     <table className="table table-hover">
       <thead>
       <tr>
         <th>City</th>
         <th>Temperature(K)</th>
         <th>Pressure(hPa)</th>
         <th>Humidity(%)</th>
       </tr>
       </thead>
       <tbody>
       {this.props.cities.map(this.renderCity)}
       </tbody>
     </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.weather,
  };
};

export default connect(mapStateToProps)(WeatherList);
