import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="item-detail-buttons">
            <div className="quantity-buttons">
                <button className="decrement-button" onClick={decrement}>
                    -
                </button>
                <span className="quantity">{quantity}</span>
                <button className="increment-button" onClick={increment}>
                    +
                </button>
            </div>
            <div style={{marginLeft: '2%'}}>
                <button
                    className="add-to-cart-button"
                    onClick={() => onAdd(quantity)}
                    disabled={!stock}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount