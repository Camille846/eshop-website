import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/Organic/multi-product/US_Milestone_Moments_GCLP_1024x180_EN.jpg" alt="" className="checkout__ad" />
        <div className='checkout__cart'>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout