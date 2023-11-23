import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartItem from '../CartItem/CartItem';
import './Cart.css'; // Importa el archivo CSS

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    const [isCartEmpty, setIsCartEmpty] = useState(cart.length === 0);

    useEffect(() => {
        setIsCartEmpty(cart.length === 0);
    }, [cart]);

    const handleClearCart = () => {
        clearCart();
        setIsCartEmpty(true);
    };

    if (isCartEmpty) {
        return (
            <div className="container">
                <FaShoppingCart className="empty-cart-icon" />
                <p className="empty-cart-message">No hay productos en el carrito</p>
                <Link to="/" className="link-to-home">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="container">
            {cart.map(item => (
                <CartItem key={item.id} {...item} removeItem={removeItem} />
            ))}
            <div className='detalle'>
                <h3 className="total-price" style={{ margin: 0 }}> Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
                <button className="clear-cart-button" onClick={handleClearCart}>
                    Vaciar carrito
                </button>
                <Link to="/checkout" className="checkout-link">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
