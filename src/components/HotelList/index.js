import React, { Component } from 'react'
import './HotelList.scss';
import Hotel from '../Hotel/Hotel';
import { hotelData } from '../HotelData';

export default class HotelList extends Component {
    state={
        hotels: hotelData
    };
    removeHotel = id => {
      const{hotels} = this.state;
      const sortedHotels = hotels.filter(hotel=>hotel.id !==id);
      this.setState({
        hotels:sortedHotels
      })
    };
  render() {
    const {hotels} = this.state;
    return (
      <section className='HotelList'>
        {hotels.map(hotel =>{
          return(
            <Hotel key={hotel.id} hotel={hotel} removeHotel={this.removehotel} />
          )
        })}
      </section>
    )
  }
}
