import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
  //const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  const [categories, setCategories] = useState(['Julio Iglesias']);

  // const anadirCategoria = () => {
  //   setCategories([...categories, 'Categoría 4']);
  // };
  return (
    <div className='container'>
      <h1>GifExpertApp</h1>
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
