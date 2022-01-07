import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial ', () => {
    const { data: images, loading } = useFetchGifs('Daft punk');
  });
});
