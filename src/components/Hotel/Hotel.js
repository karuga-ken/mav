import React, { Component } from 'react'
import './Hotel.scss'


export default class Hotel extends Component {
    state = {
        showInfo:false
    };
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        });
    };
  render() {
    const{city,img,name,website,info} = this.props.hotel;
    const {removeHotel} = this.props;
    return <article className='Hotel'>
<div  className= "img-container">
    <img src = {img} />
    <span className="close-btn">
        <i className="fas fa-window-close" />
    </span>
</div>

<div className="Hotel-info">
    <h3>{city}</h3>
    <h4>{name}</h4>
    <a target="_blank" href="https://www.google.com/maps/@-1.3959168,36.7525888,14z">{website}</a>
    
    <h5>
        Info {""}
        <span onClick={this.handleInfo}>
            <i className="fas fa-caret-square-down" />
        </span>
    </h5>
    {this.state.showInfo && <p>{info}</p>} 
    
</div>
    </article>
    
  }
}
