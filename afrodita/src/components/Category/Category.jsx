import React from 'react';
import './Category.css';
import {Link} from 'react-router-dom';

function Category({ category }) {
  return (
    <div className='category'>
        {category.map((c) => (
            <Link key={c.id} to={`/category/${c.name}`} className='category-link'>
                <ul>{c.name}</ul>
            </Link>
        ))}
    </div>
  )
}

export default Category;