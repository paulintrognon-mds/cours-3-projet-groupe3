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

  // Sinon, on affiche le résultat
  return (
    <p className="IsPrime">
      {isPrime(number) ? 'Votre nombre est premier !' : "Votre nombre n'est pas premier !"}
    </p>
  );
}

export default IsPrime;
