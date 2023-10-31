import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../json/productos';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { ID } = useParams();

    useEffect(() => {
        getProductById(ID)
            .then(res => {
                setProduct(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    console.log("product", product);

    const getProductById = (productId) => {
        return new Promise((resolve, reject) => {
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
        <div className='detail'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;