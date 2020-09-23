import React from 'react';
import PropTypes from 'prop-types';
import random from 'src/services/random';

RandomInput.propTypes = {
  setNumber: PropTypes.func,
};
function RandomInput({ setNumber }) {
  /**
   * Lors du clique, on génère un nombre aléatoire et on l'envoie.
   */
  function onClickHandler() {
    // Génération du nombre aléatoire
    const currentTimestamp = random();
    // Envoie du nombre
    setNumber(currentTimestamp);
  }

  return (
    <p>
      <button onClick={onClickHandler}>Ou cliquez ici !</button>
    </p>
  );
}

export default RandomInput;
