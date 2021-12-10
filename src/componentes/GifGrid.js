import React from 'react';

export const GifGrid = ({ category }) => {
  const giphyApiKey = '1yXTHElz01qs8MwUzaTpOx5DYV5E0QxT';
  const giphySearchEndPoint = 'https://api.giphy.com/v1/gifs/search';
  const gifGrid = async () => {
    const searchEndPoint = `${giphySearchEndPoint}?q=Julio+Iglesias&limit=10&api_key=${giphyApiKey}`;
    const respuesta = await fetch(searchEndPoint);
    const { data } = await respuesta.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    console.log(gifs);
  };
  gifGrid();
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
