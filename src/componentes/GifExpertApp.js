import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
  //const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  const [categories, setCategories] = useState(defaultCategories);

  // const anadirCategoria = () => {
  //   setCategories([...categories, 'Categoría 4']);
  // };
  return (
    <div className='container'>
      <h1>GifExpertApp</h1>
      <p>
        Buscador de gifs utilizando el{' '}
        <a
          href='https://developers.giphy.com/'
          target='_blank'
          rel='noreferrer'
        >
          API de Giphy
        </a>
        .
      </p>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((cat) => (
          //return <li key={cat}>{cat}</li>;
          <GifGrid key={cat} category={cat} />
        ))}
      </ul>
    </div>
  );
};
