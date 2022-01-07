import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../../componentes/GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
  // se muestra bien con el snapshot
  test('GifExpertApp Debe mostrarse corectamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mosgrar una lista de categorías', async () => {
    const categories = ['Mazinger Z', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
