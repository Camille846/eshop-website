import React from 'react'
import './CheckoutProduct.css';
import { BsFillStarFill } from "react-icons/bs";

const CheckoutProduct = ({id, title, price, rating, image}) => {
  return (
    <div className='checkoutProduct__container'>
      <div className="checkoutProduct__header">
        <h2 className="checkout__title">Your Shopping Cart</h2>
        <p className="checkout__subtitle">Price</p>
      </div>
        <div className="checkoutProduct">
            <img src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="checkoutProduct__img" />
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__infoLeftSide">
                  <p className="checkoutProduct__title">Matte Liquid Lipstick, Cheeky, Rose Nude, 0.1400 oz</p>
                  <p className="checkoutProduct__subtitle">In Stock</p>
                  <div className="checkoutProduct__gift">
                      <input type="checkbox" name="" id="" className="checkoutProduct__giftInput"/>This is a gift 
                  </div>
                  <div className="checkoutProduct__btns">
                    {/* <div className="checkoutProduct__select">
                      <select id="quantity">
                        <option value="hide">Quant</option>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                        <option value="seven">7</option>
                        <option value="eight">8</option>
                        <option value="nine">9</option>
                        <option value="ten-more">+10</option>
                      </select> 
                    </div>
                    <span className="checkoutProduct__separator"></span>  */}
                    <a className="checkoutProduct__Btn" href='#Delete'>Delete  <span className="checkoutProduct__separator"></span> </a>
                    <a className="checkoutProduct__Btn" href='#Save'>Save for later <span className="checkoutProduct__separator"></span> </a>
                    <a className="checkoutProduct__Btn" href='#Compare'>Compare with similar items</a>
                  </div>
                </div>
                <div className="checkoutProduct__infoRightSide">
                  <div className="checkoutProduct__priceRow">
                      <p className="checkoutProduct__price"><strong>${9.98}</strong></p>
                      <div className="checkoutProduct__rating">
                      <BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct