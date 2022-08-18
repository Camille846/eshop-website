import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <h3 className="subtotal__title">Subtotal (0 items): 
                        <span className='subtotal__price'> $0 </span>
                    </h3>
                    <div className="subtotal__gift">
                        <input type="checkbox" name="" id="" className='subtotal__giftInput'/>This order contains a gift 
                    </div>
                    <button className='subtotal__btn'>Proceed to Checkout</button>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
        />
    </div>
  )
}

export default Subtotal