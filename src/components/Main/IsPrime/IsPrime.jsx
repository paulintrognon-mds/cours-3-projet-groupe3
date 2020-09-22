import React from 'react';
import PropTypes from 'prop-types';
import { computeIfIsPrime } from 'src/services/computeIfIsPrime/computeIfIsPrime';
import './IsPrime.css';

IsPrime.propTypes = {
  number: PropTypes.number,
};
function IsPrime({ number }) {
  /**
   * Calcul pour vérifier si le nombre est premier, ou non
   */
  const isPrime = computeIfIsPrime(number);

  return (
    <p className="IsPrime">
      {isPrime ? 'Votre nombre est premier !' : "Votre nombre n'est pas premier !"}
    </p>
  );
}

export default IsPrime;
