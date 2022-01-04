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

  //envío del formulario, no debe ejecutar la función
  test('NO debe de enviar la información en el submit', async () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).not.toBeCalled();
  });

  //envío del formulario, debe ejecutar la función
  test('Debe de llamar el setCategories y limpiar la caja de texto', async () => {
    // 1. Simular el inputChange
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value: value } });
    // 2. Simular el envío del formulario
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    // 3. setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    //4. el valor del input debe estar vacío.
    expect(input.prop('value').trim()).toBe('');
  });
});
