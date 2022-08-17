import React from 'react'
import './Product.css';
import { BsFillStarFill } from "react-icons/bs";

const Product = ({id, title, price, rating, image}) => {
  return (
    <div className='product__container'>
      <div className="product">
        <img src={image} alt="" className="product__img" />
        <div className="product__info">
          <p className="product__title">{title}</p>
          <div className="product__priceRow">
            <p className="product__price"><strong>${price}</strong></p>
            <div className="product__rating">
              {Array(rating)
              .fill()
              .map(() => (
                <p><BsFillStarFill /></p>
              ))}
            </div>
          </div>
        </div>
        <button className="product__addButton">Add to cart</button>
      </div>
    </div>
  )
}

export default Product;