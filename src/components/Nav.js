import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { BsFillBagFill} from "react-icons/bs";
import { FaShippingFast} from "react-icons/fa";
import { BsFillPersonFill} from "react-icons/bs";
import firebase from "firebase";



const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (

        
        <div>
        <div className="nav">
            
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                      
                      <Link to="/"><img src="https://www.pngarts.com/files/4/Adidas-Logo-PNG-Free-Download.png" width="50px" height="66px" alt="logo"/></Link>
                      
                    </div>
                    <div className="nav__left">

                    <Link to="/">Home</Link>
                      <Link to="/All">Category</Link>
                      </div>


                    <div className="nav__right">
                   


                        <Link to="/cart">
                            <div className="basket">
                             <BsFillBagFill className="cart-icon" />
                                <span>{totalQuantities}</span>
                            </div>
                        </Link>
                        <Link to="/Log" className="log"><BsFillPersonFill/></Link>
                    </div>
                </div>
            </div>
          
        </div>
        
        <br></br> 
        <br></br>
        <br></br>
        <h6 className="ship"><FaShippingFast/>
        FREE SHIPPING & RETURNS | JOIN NOW</h6>
       

        </div>
        

    )
}

export default Nav
