import React from 'react'
import Header from "./Header"
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {Link} from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import FooterContainer from '../FooterContainer';

const All = () => {
    const {products} = useSelector(state => state.ProductsReducer);
    return (
        <div>
            <Header/>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        
                     
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                  <img src={`/images/${product.image}`} alt="image name"/>
                                </div>
                                <div className="product__name">
                                    {product.name}
                                </div>
                                <div className="icond">
                                        <div className="icons"><BsFillStarFill /></div>
                                        <div className="icons"><BsFillStarFill /></div>
                                        <div className="icons"><BsFillStarFill /></div>
                                        <div className="icons"><BsFillStarFill /></div>
                                        </div>
                                <div className="row">
                                    <div className="col-4">
                                      
                                        <div className="product__price">
                    <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> 
                                        </div>
                                    </div>

                                   


                                    <div className="col-4">
                                        <div className="product__discount__price">
                                        {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                        </div>

                                    </div>
                                    <Link to={`/details/${product.id}`}> <Button variant="outline-primary" className="More">More Details</Button></Link>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
<FooterContainer/>
        </div>
    )
}

export default All
