import React, { Component } from 'react'
import Slider from '../Slider'
import Category from '../Category'
import Offer from '../Offer'
import FooterContainer from '../FooterContainer'


export class Home extends Component {
    render() {
        return (
            <div>
            <br></br>
           
                <Slider/>

                <br></br> <br></br> <br></br> <br></br><br></br> <br></br><br></br> <br></br>
                <div className="ooffer">
                <h1 >Category</h1>
                <h3 >Category</h3>
                </div>
                <br></br> <br></br> <br></br> <br></br><br></br> <br></br><br></br> <br></br>

                <div>
                <Category />
               </div>


               <br></br> <br></br>           <br></br> <br></br>
               <div className="ooffer">
               <h1 >Offer</h1>
               <h3 >Offer</h3>
               </div>

               <div className="BestOffer">
                    <Offer />
                </div>


                <br></br> <br></br>


                <div>
                <FooterContainer/>
                </div>
            </div>
        )
    }
}

export default Home
