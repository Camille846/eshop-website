import React from 'react'
import './CheckoutProduct.css';
import { BsFillStarFill } from "react-icons/bs";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, title, price, rating, image}) => {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = (basket) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }
  return (
    <div className='checkoutProduct__container'>
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__img" />
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__infoLeftSide">
                  <p className="checkoutProduct__title">{title}</p>
                  <p className="checkoutProduct__subtitle">In Stock</p>
                  <div className="checkoutProduct__gift">
                      <input type="checkbox" name="" id="" className="checkoutProduct__giftInput"/>This is a gift 
                  </div>
                  <div className="checkoutProduct__btns">
                    <a className="checkoutProduct__Btn" onClick={removeFromBasket}>Delete  <span className="checkoutProduct__separator"></span> </a>
                    <a className="checkoutProduct__Btn" href='#Save'>Save for later <span className="checkoutProduct__separator"></span> </a>
                    <a className="checkoutProduct__Btn" href='#Compare'>Compare with similar items</a>
                  </div>
                </div>
                <div className="checkoutProduct__infoRightSide">
                  <div className="checkoutProduct__priceRow">
                      <p className="checkoutProduct__price"><strong>${price}</strong></p>
                      <div className="checkoutProduct__rating">
                        {Array(rating)
                          .fill()
                          .map(() => (
                            <p><BsFillStarFill /></p>
                        ))}
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct