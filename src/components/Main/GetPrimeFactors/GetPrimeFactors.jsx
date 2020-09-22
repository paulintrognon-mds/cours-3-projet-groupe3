import React from 'react';
import PropTypes from 'prop-types';
import getPrimeFactors from 'src/services/primes/getPrimeFactors';
import './GetPrimeFactors.css';

GetPrimeFactors.propTypes = {
  number: PropTypes.number,
};
function GetPrimeFactors({ number }) {
  // Si on a pas récupéré de nombre, on ne retourne rien
  if (!number) {
    return null;
  }

  // On récupère les facteurs du nombre donné
  const factors = getPrimeFactors(number);

  // Si le nombre n'a qu'un seul facteur, c'est que c'est un nombre premier : on affiche rien
  if (factors.length < 2) {
    return null;
  }

  // Sinon, on affiche les facteurs
  return (
    <p className="GetPrimeFactors">
      {number} = {factors.join(' x ')}
    </p>
  );
}

export default GetPrimeFactors;
