import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  // solo se ejecuta cuando el componente se renderiza la primera vez
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setImages(imgs);
    });
  }, [category]);

  //getGifs();
  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
