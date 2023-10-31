import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

import './ItemListContainer.css';

import Fondo from '../../assets/fondo.jpg';
import productsJson from '../../json/productos';
import { useParams } from 'react-router-dom';

function ItemListContainer({greeting}) {
  const [products, setProducts] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            const productList = productsJson.productos; // Acceder a la lista de productos
            resolve(category ? productList.filter((p) => p.category === category) : productList);
          }, 2000);
        });
        console.log('Productos obtenidos', response);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);
  

  console.log('Productos', products);

  return (
    <div className='imagenHome'>
        <img src={Fondo} alt='afrodita' />
        <p className='textoSuperpuesto'>{greeting}</p>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;