import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, image, stock, detail, price, category }) => {
  return (
    <div className="item-detail-card">
      <div className="item-detail-image">
        <picture>
          <img src={image} alt={name} />
        </picture>
      </div>
      <div className="item-detail-info">
        <header>
          <h1>{name}</h1>
        </header>
        <section>
          <h5>{category}</h5>
          <p>{detail}</p>
          <p>{stock} disponibles</p>
          <p>${price}</p>
        </section>
        <footer>
          <ItemCount
            initial={1}
            stock={stock} 
            onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}
          />
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;