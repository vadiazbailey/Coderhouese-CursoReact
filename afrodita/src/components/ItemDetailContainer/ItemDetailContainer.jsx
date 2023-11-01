import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../json/productos';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const { ID } = useParams();

    useEffect(() => {
        getProductById(ID)
            .then(res => {
                setLoading(false);
                setProduct(res);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    console.log("product", product);

    const getProductById = (productId) => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => {
                let productData = products.productos;
                const product = productData.find(product => product.id === parseInt(productId));
                if (product) {
                    resolve(product);
                } else {
                    reject("Product not found");
                }
            }, 2000);
        });
    };

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