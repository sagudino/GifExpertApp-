import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../componentes/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const categoria = 'Categoria prueba';

  // se muestra bien con el snapshot
  test('GifGrid Debe mostrarse corectamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={categoria} />);
    expect(wrapper).toMatchSnapshot();
  });

  // simulamos que useFetchGifs retornoa infor
  test('Debe mostratrar items cuando se cargan imágenes con useFetchGifs', () => {
    const imgs = [
      {
        id: 'abc',
        url: 'https://wwww.adfasf/image.jpg',
        title: 'titulo',
      },
      {
        id: '123abc',
        url: 'https://wwww.adfasf/image.jpg',
        title: 'titulo',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={categoria} />);
    expect(wrapper).toMatchSnapshot();
    //que no exista el loading porque ya hay datos
    //expect(wrapper.find('p').exists()).toBe(false);
    //que se muestren todas las imágenes
    expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
  });
});
