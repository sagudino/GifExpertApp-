import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../componentes/AddCategory';

describe('Pruebas en AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper;
  // se ejecuta antes de cada una de las pruebas test
  beforeEach(() => {
    //limpia todas las pruebas
    jest.clearAllMocks();
    //obtenemos la referencia al componente
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Debe mostrarse corectamente', async () => {
    expect(wrapper).toMatchSnapshot();
  });

  /** cambios en el input de búsqueda */
  test('Debe de cambiar la caja de texto', async () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value: value } });
  });

  //envío del formulario
  test('NO debe de enviar la información en el submit', async () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).not.toBeCalled();
  });
});
