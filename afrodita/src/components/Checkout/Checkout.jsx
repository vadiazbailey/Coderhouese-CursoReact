import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getDoc, doc, Timestamp, addDoc, query, where, documentId } from 'firebase/firestore'; // Add Timestamp import
import { db } from '../../services/firebase';
import { writeBatch, collection, getDocs } from 'firebase/firestore'; // Add writeBatch, collection, and getDocs imports
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Checkout.css';
import Loading from '../Loading/Loading';

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, clearCart } = useContext(CartContext)

    const createOrder = async ({name, phone, direc, email}) => {
        setLoading(true);
        try {
            const order = {
                buyer: { name, phone, direc, email },
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
            };

            console.log('order', order);

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(i => i.id);
            const productsRef = collection(db, 'products');

            const productsAddedFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

            const { docs } = productsAddedFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedCart = cart.find(i => i.id === doc.id);
                const quantityCart = productAddedCart?.quantity;

                if (stockDb >= quantityCart) {
                    console.log('stockDb', stockDb);
                    batch.update(doc.ref, { stock: stockDb - quantityCart });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const ordersCollectionRef = collection(db, 'orders');
                const docRef = await addDoc(ordersCollectionRef, order);
                setOrderId(docRef.id);
                clearCart();
            } else {
                console.log('outOfStock', outOfStock);
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };



    if (loading) {
        return <Loading />;
      }
    
      if (orderId) {
        return (
          <div className="container">
            <h2 className="success">Compra finalizada</h2>
            <p className="success">Tu número de orden es {orderId}</p>
          </div>
        );
      }
    
      return (
        <div className="container">
          <h1>Checkout</h1>
          <CheckoutForm onConfirm={createOrder} />
        </div>
      );
}

export default Checkout