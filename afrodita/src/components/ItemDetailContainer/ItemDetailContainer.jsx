import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './ItemDetailContainer.css';

//Conectarse a firebase
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const { ID } = useParams();

    useEffect(() => {
        setLoading(true);

        // Genera la referencia a un solo producto de la colección
        const dataResponse = doc(db, 'products', ID);

        getDoc(dataResponse)
            .then(snapshot => {
                if (snapshot.exists()) {
                    const productData = { id: snapshot.id, ...snapshot.data() };
                    setProduct(productData);
                    console.log('Producto obtenido', productData);
                } else {
                    console.log('Producto no encontrado');
                }
            })
            .catch(error => {
                console.error('Error al obtener producto', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [ID]);

    return (
        <>
            {loading ?
                (<Loading />) :
                (

                    product ?
                        (
                            <div className='detail' >
                                <ItemDetail {...product} />
                            </div >
                        ) : (
                            <Error />
                        )
                )
            }
        </>
    )
}

export default ItemDetailContainer;