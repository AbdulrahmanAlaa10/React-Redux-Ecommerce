import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Image} from 'react-bootstrap';
import { FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

export default class Offer extends Component {
  render() {
    var settings = {
    dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="allpro">
        <Slider {...settings}>
         <div>
      <div className="team">
      <Image src="/images/1.jpg" thumbnail />
      <h1>NMD_R1 Shoes</h1>
       <div className="star">
       <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          </div>

      <h6>$19.60</h6>
      <Link to='/details/1'><button type="button" class="btn btn-outline-warning">More Details</button></Link>

     </div>
     </div>
          <div>
          <div className="team">
          <Image src="/images/2.jpg" thumbnail />
          <h1>Stan Smith Shoes</h1>
          <div className="star">
       <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          </div>

      <h6>
      $28.50</h6>
      <Link to='/details/2'><button type="button" class="btn btn-outline-warning">More Details</button></Link>
    
         </div>          </div>
         
          <div>
          <div className="team">
          <Image src="/images/5.jpg" thumbnail />
          <h1>female soot for summer</h1>
          <div className="star">
       <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          </div>

      <h6>$24.50</h6>
      <Link to='/details/5'><button type="button" class="btn btn-outline-warning">More Details</button></Link>
    
         </div>          </div>
          <div>
          <div className="team">
          <Image src="/images/6.jpg" thumbnail />
          <h1>adidas tiro tracksuit </h1>
          <div className="star">
       <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          </div>

      <h6>
      $56.40</h6>
      <Link to='/details/6'><button type="button" class="btn btn-outline-warning">More Details</button></Link>
    
         </div>          </div>
          <div>
          <div className="team">
          <Image src="/images/8.jpg" thumbnail />
          <h1>Adidas Tiro Tracksuit </h1>
          <div className="star">
       <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          </div>

      <h6>
      $74.40</h6>
      <Link to='/details/8'><button type="button" class="btn btn-outline-warning">More Details</button></Link>
    
         </div>          </div>
          <div>
          <div className="team">
          <Image src="/images/12.jpg" thumbnail />
          <h1>Trefoil Crew Socks</h1>
          <div className="star">
       <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          <h6><FaStar /></h6>
          </div>

      <h6>
      $29.40</h6>
      <Link to='/details/12'><button type="button" class="btn btn-outline-warning">More Details</button></Link>
    
         </div>          </div>
        </Slider>
      </div>
    );
  }
}