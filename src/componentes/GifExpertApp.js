import React, { useState } from 'react';

export const GifExpertApp = () => {
  //const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  const [categories, setCategories] = useState([
    'Categoría 1',
    'Categoría 2',
    'Categoría 3',
  ]);

  const anadirCategoria = () => {
    setCategories([...categories, 'Categoría 4']);
  };
  return (
    <div className='container'>
      <h1>GifExpertApp</h1>
      <hr />
      <button onClick={anadirCategoria}>Agregar</button>
      <ul>
        {categories.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </ul>
    </div>
  );
};
