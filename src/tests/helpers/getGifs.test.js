import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs fetch', () => {
  test('Debe obtener 10 elementos', async () => {
    const gifs = await getGifs('micromachines');

    expect(gifs.length).toBe(10);
  });

  test('Debe recibir una categoría', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
