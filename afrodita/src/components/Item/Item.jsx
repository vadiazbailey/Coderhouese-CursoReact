import React from 'react'
import './Item.css'

const Item = ({ id, name, image, price, stock }) => {
    return (
        <article className='card'>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} />
            </picture>
            <section>
                <p>
                    ${price}
                </p>
                <p>
                    Stock: {stock}
                </p>
            </section>
            <footer>
                <button>
                    Ver detalle
                </button>
            </footer>
        </article>
    )
}

export default Item