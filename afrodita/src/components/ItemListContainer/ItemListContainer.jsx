import React from 'react';
import './ItemListContainer.css';
import Fondo from '../../assets/fondo.jpg';

function ItemListContainer({greeting}) {
  console.log(greeting);
  return (
    <div className='imagenHome'>
        <img src={Fondo} alt='afrodita' />
        <p className='textoSuperpuesto'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer;