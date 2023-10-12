import React from 'react';
import './Category.css';

function Category({ category }) {
  return (
    <div className='category'>
        {category.map((c) => (
            <a key={c.id} href='#' className='category-link'>
                <ul>{c.name}</ul>
            </a>
        ))}
    </div>
  )
}

export default Category;