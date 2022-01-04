import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../componentes/AddCategory';

describe('Pruebas en AddCategory', () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);
  test('Debe mostrarse corectamente', async () => {
    expect(wrapper).toMatchSnapshot();
  });
  /** cambios en el input de búsqueda */
  test('Debe de cambiar la caja de texto', async () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value: value } });
  });
});
