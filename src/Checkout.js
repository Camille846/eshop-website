import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

const Checkout = () => {
  const [{basket}, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/Organic/multi-product/US_Milestone_Moments_GCLP_1024x180_EN.jpg" alt="" className="checkout__ad" />
        <div className='checkout__card'>
          <div className="checkoutProduct__header">
            <h2 className="checkout__title">Your Shopping Cart</h2>
            <p className="checkout__subtitle">Price</p>
          </div>
          {basket.map(item =>(
            <CheckoutProduct 
              id = {item.id}
              title = {item.title}
              image= {item.image}
              price= {item.price}
              rating= {item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout