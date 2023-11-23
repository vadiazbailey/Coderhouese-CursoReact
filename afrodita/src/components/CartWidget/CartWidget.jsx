import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


function CartWidget() {
  const {totalQuantity} = useContext(CartContext)

  console.log("cantidad", totalQuantity)
  return (

    <div className='navCart'>
        <Link to="/cart">
          <FaShoppingCart className='navIcon' />
          <p className='cartNumber'>{totalQuantity}</p>
        </Link>
    </div>
  )
}

export default CartWidget