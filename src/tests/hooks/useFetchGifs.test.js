import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el custom hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async () => {
    // asi no se prueba el hook
    //const { data: images, loading } = useFetchGifs('Daft punk');
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Daft punk')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('Debe de retornar un array de imagenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Daft punk')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).not.toBeTruthy();
  });
});
