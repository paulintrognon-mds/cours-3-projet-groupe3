import React from 'react';
import PropTypes from 'prop-types';
import './NumberInput.css';

NumberInput.propTypes = {
  setNumber: PropTypes.func,
};
function NumberInput({ setNumber }) {
  /**
   * Lors d'un changement dans le input, on transforme la valeur en nombre
   * et on l'envoie via setNumber
   */
  function onChangeHandler(event) {
    const value = event.target.value;
    // Si l'utilisateur n'a rien renseigné, on renvoie undefined
    if (value === '') {
      setNumber(undefined);
      return;
    }
    // Si l'utilisateur n'a pas renseigné un nombre, on renvoie -1
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      setNumber(-1);
      return;
    }
    // Si l'utilisateur a renseigné un nombre correct, on le renvoie
    setNumber(parsedValue);
  }

  return (
    <p>
      <input
        className="NumberInput_input"
        maxLength={10}
        onChange={onChangeHandler}
        placeholder="Entrez un nombre entier positif."
      />
    </p>
  );
}

export default NumberInput;
