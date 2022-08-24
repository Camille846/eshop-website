import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value) => (
                <>
                    <h3 className="subtotal__title">Subtotal ({basket.length} items): 
                        <span className='subtotal__price'> ${value} </span>
                    </h3>
                    <div className="subtotal__gift">
                        <input type="checkbox" name="" id="" className='subtotal__giftInput'/>This order contains a gift 
                    </div>
                    <button className='subtotal__btn'>Proceed to Checkout</button>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            />
        </div>
    ) 
}

export default Subtotal