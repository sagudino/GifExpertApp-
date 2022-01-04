import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../componentes/GifGridItem';

describe('Pruebas en GifGridItem', () => {
  test('Debe de mostra el componente correctamente', () => {
    const title = 'Un título';
    const url = 'https://www.google.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
