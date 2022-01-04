import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../componentes/GifGridItem';

describe('Pruebas en GifGridItem', () => {
  const title = 'Un título';
  const url = 'https://www.google.com/imagen.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  /** preuba componente con snapshot */
  test('Debe de mostra el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // prueba en el título
  test('Debe de tener un párrafo con el title', async () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  // prueba en la url de la imagen y el title
  test('Debe tener la imagen igual a la url y al de los props', async () => {
    const img = wrapper.find('img');
    expect(img.prop('src').trim()).toBe(url);
    expect(img.prop('alt').trim()).toBe(title);
  });
  // el componente debe tener la clase concreta
  test('Debe tener la clase animate__fadeIn', async () => {
    const div = wrapper.find('div');
    expect(div.prop('className').trim().includes('animate__fadeIn')).toBe(true);
  });
});
