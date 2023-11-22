import { createContext, useState } from 'react'

export const CartContext = createContext(
    {
        cart: [],
    }
)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    console.log("cart", cart)

    const addItem = (item, quantity) => {
        console.log('Agregando item al carrito', item, quantity);
    
        // Si el objeto 'item' o su propiedad 'id' son undefined, no hago nada
        if (!item || item.id === undefined) {
            console.error('Error: El objeto item no tiene una propiedad id definida.');
            return;
        }
    
        // Si no está en el carrito, lo agrego
        if (!isInCart(item.id)) {
            const newTotalQuantity = totalQuantity + quantity;
    
            // Verifica si la cantidad total no excede el stock disponible
            if (newTotalQuantity <= item.stock) {
                setCart([...cart, { ...item, quantity }]);
                setTotalQuantity(newTotalQuantity);
            } else {
                console.warn('No se puede agregar más al carrito, stock insuficiente.');
            }
        } else {
            console.log('El item ya está en el carrito');
    
            // Si está en el carrito, actualizo la cantidad
            const updateItem = cart.map((cartItem) => {
                console.log('cart', cartItem);
                if (cartItem.id === item.id) {
                    const newQuantity = cartItem.quantity + quantity;
    
                    // Verifica si la nueva cantidad no excede el stock disponible
                    if (newQuantity <= item.stock) {
                        setTotalQuantity(totalQuantity + quantity);
                        return { ...cartItem, quantity: newQuantity };
                    } else {
                        console.warn('No se puede agregar más al carrito, stock insuficiente.');
                        // Puedes manejar la lógica adicional aquí, como mostrar un mensaje al usuario.
                        return cartItem;
                    }
                } else {
                    return cartItem;
                }
            });
    
            setCart(updateItem);
        }
    };
    


    const removeItem = (itemId, quantityToRemove) => {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === itemId) {
                const newQuantity = cartItem.quantity - quantityToRemove;
                return { ...cartItem, quantity: Math.max(newQuantity, 0) };
            }
            return cartItem;
        });
    
        // Filter out items with quantity zero
        const filteredCart = updatedCart.filter((cartItem) => cartItem.quantity > 0);
    
        setCart(filteredCart);
    
        // Update totalQuantity after removing a specific quantity
        const newTotalQuantity = filteredCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
        setTotalQuantity(newTotalQuantity);
    };
    


    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some((cart) => cart.id === itemId)
    }

    // const getTotalPrice = () => {
    //     return cart.reduce((acc, cart) => acc + cart.quantity * cart.item.price, 0)
    // }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

