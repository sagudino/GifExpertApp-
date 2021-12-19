export const getGifs = async (category) => {
  const giphyApiKey = '1yXTHElz01qs8MwUzaTpOx5DYV5E0QxT';
  const giphySearchEndPoint = 'https://api.giphy.com/v1/gifs/search';
  const limit = 50;

  const searchEndPoint = `${giphySearchEndPoint}?q=${encodeURI(
    category
  )}&limit=${limit}&api_key=${giphyApiKey}`;
  const respuesta = await fetch(searchEndPoint);
  const { data } = await respuesta.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
