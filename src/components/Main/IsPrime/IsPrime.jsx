import React from 'react';
import PropTypes from 'prop-types';
import isPrime from 'src/services/primes/isPrime';
import './IsPrime.css';

IsPrime.propTypes = {
  number: PropTypes.number,
};
function IsPrime({ number }) {
  // Si on a pas de nombre, on n'affiche rien
  if (!number) {
    return null;
  }

  // Si le nombre est premier, on le dit
  if (isPrime(number)) {
    return <p className="IsPrime">Votre nombre est premier !</p>;
  }

  // Sinon, on dit qu'il n'est pas premier
  return <p className="IsPrime">Votre nombre n&apos;est pas premier !</p>;
}

export default IsPrime;
