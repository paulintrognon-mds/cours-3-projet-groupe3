import React from 'react';
import NumberInput from './NumberInput';
import { shallow } from 'enzyme';

describe('NumberInput', () => {
  it('should call setNumber() with number typed', () => {
    // Création d'un mock pour la fonction "setNumber"
    const setNumberMock = jest.fn();

    // Création du composant en passant le faux "setNumber"
    const component = shallow(<NumberInput setNumber={setNumberMock} />);

    // On simule qu'un utilisateur tape le nombre 50
    component.find('input').simulate('change', { target: { value: 50 } });

    // on vérifie que setNumber a bien été appelé avec l'argument 50
    expect(setNumberMock.mock.calls.length).toEqual(1);
    expect(setNumberMock.mock.calls[0][0]).toEqual(50);
  });

  it('should call setNumber() with undefined if nothing is typed', () => {
    const setNumberMock = jest.fn();
    const component = shallow(<NumberInput setNumber={setNumberMock} />);
    // On simule qu'un utilisateur tape rien
    component.find('input').simulate('change', { target: { value: '' } });

    // on vérifie que setNumber a bien été appelé avec l'argument undefined
    expect(setNumberMock.mock.calls.length).toEqual(1);
    expect(setNumberMock.mock.calls[0][0]).toEqual(undefined);
  });

  it('should call setNumber() with -1 if user did not type a number', () => {
    const setNumberMock = jest.fn();
    const component = shallow(<NumberInput setNumber={setNumberMock} />);
    // On simule qu'un utilisateur tape rien
    component.find('input').simulate('change', { target: { value: 'bonjour' } });

    // on vérifie que setNumber a bien été appelé avec l'argument -1
    expect(setNumberMock.mock.calls.length).toEqual(1);
    expect(setNumberMock.mock.calls[0][0]).toEqual(-1);
  });
});
