import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'


function CartWidget() {
  return (

    <div className='navCart'>
        <FaShoppingCart className='navIcon' />
        <p className='cartNumber'>0</p>
    </div>
  )
}

export default CartWidget