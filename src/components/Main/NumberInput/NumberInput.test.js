import React from 'react';
import NumberInput from './NumberInput';
import { shallow } from 'enzyme';

describe('NumberInput', () => {
  it('renders learn react link', () => {
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
});
