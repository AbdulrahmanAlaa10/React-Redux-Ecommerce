import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export class Slider extends Component {
    render() {
        return (
            <div className="slide">
            <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://wallpapercave.com/wp/wp2019769.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>New Collection</h3>
                <p>RUN WITH HI ENERGY​</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.wallpapersafari.com/2/1/xZt6oH.jpg"
                alt="Second slide"
                height="760px"
              />
            
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://free4kwallpapers.com/uploads/originals/2015/11/12/adidas-nba-basketball-wallpaper.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
              <h3>New Collection Basketball shoes</h3>
              <p>Play WITH HI ENERGY​</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            </div>
        )
    }
}

export default Slider
