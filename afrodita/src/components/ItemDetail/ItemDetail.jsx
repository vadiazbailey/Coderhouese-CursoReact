import React from 'react';
import { useState  } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, image, stock, detail, price, category }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAdd = (quantity) => {
    setQuantityAdded(quantity);
  }

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
            {
              quantityAdded > 0 ? (
                  <Link to="/cart">Terminar mi compra</Link>
                ):(
                  <ItemCount
                    initial={1}
                    stock={stock} 
                    onAdd={handleAdd}
                  />
                )
            }
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;