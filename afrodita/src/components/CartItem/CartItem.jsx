// CartItem.js

import React, { useState } from 'react';
import './CartItem.css'; // Ajusta la ruta según la estructura de tu proyecto

const CartItem = ({ id, name, quantity, price, image, removeItem }) => {
  const [quantityToRemove, setQuantityToRemove] = useState(1);

  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);
    setQuantityToRemove(inputQuantity || 1); // Asegura que la entrada sea un entero positivo
  };

  const handleRemoveClick = () => {
    removeItem(id, quantityToRemove);
    setQuantityToRemove(1); // Reinicia el input después de remover
  };

  // Verifica si la cantidad es cero y, en ese caso, devuelve null para no renderizar nada
  if (quantity === 0) {
    return null;
  }

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img src={image} alt={name} className="cart-item-image" />
      </div>
      <div className="cart-item-right">
        <p>{name}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price}</p>
        
      </div>
      <div className="cart-item-controls-right">
        <div className="cart-item-controls">
          <input
            type="number"
            value={quantityToRemove}
            onChange={handleInputChange}
            min="1"
            max={quantity}
          />
        </div>
        <button onClick={handleRemoveClick}>Remover</button>
      </div>
    </div>
  );
};

export default CartItem;
