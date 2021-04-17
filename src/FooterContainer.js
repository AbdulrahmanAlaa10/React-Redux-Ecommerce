import React from 'react'
import { SiFacebook} from "react-icons/si";
import { AiFillTwitterCircle} from "react-icons/ai";
import { TiSocialYoutubeCircular} from "react-icons/ti";


import './App.css'

export function FooterContainer() {
    return (
      
       <div className="foot">
       
        <div className="word">
        ADIDAS
<div className="social">
        <h6><SiFacebook className="face" /></h6>
        <h6><AiFillTwitterCircle className="twi" /></h6>
        <h6><TiSocialYoutubeCircular className="you" /></h6>
        </div>

        <h3 className="shawki">Design By Shawki Mohamed</h3>
        
        </div>

      
       
       
       
       </div>
    )
}


export default FooterContainer