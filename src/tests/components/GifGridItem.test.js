import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../componentes/GifGridItem';

describe('Pruebas en GifGridItem', () => {
  test('Debe de mostra el componente correctamente ', () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
