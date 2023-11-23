import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Error from '../Error/Error';

import './ItemListContainer.css';

import Fondo from '../../assets/fondo.jpg';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

//Conectarse a firebase
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  const [loading, setLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    setLoading(true);
    const dataResponse = category
      ? query(collection(db, 'products'), where('category', '==', category))
      : query(collection(db, 'products'));

    getDocs(dataResponse)
      .then(response => {
        const productList = response.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
        console.log('Productos obtenidos', productList);
        // Verificar si hay productos para la categoría
        setIsFilter(productList.length === 0 && category ? true : false);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setIsFilter(true);
      })
      .finally(() => {
        setLoading(false);
      }
      )
  }, [category]);

  console.log('Productos', products);

  return (
    <>
      {
        loading ?
          (<Loading />) :
          (
            !isFilter ?
              <div className='imagenHome'>
                <img src={Fondo} alt='afrodita' />
                <p className='textoSuperpuesto'>{greeting}</p>
                <ItemList products={products} />
              </div> :
              <Error />
          )
      }
    </>
  )
}

export default ItemListContainer;