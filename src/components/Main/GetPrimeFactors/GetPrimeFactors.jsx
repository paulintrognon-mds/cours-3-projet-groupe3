import React from 'react';
import PropTypes from 'prop-types';
import { computePrimeFactors } from 'src/services/computePrimeFactors/computePrimeFactors';
import './GetPrimeFactors.css';

GetPrimeFactors.propTypes = {
  number: PropTypes.number,
};
function GetPrimeFactors({ number }) {
  /**
   * Calcul pour vérifier si le nombre est premier, ou non
   */
  const factors = computePrimeFactors(number);

  if (factors.length < 2) {
    return null;
  }

  return (
    <p className="GetPrimeFactors">
      {number} = {factors.join(' x ')}
    </p>
  );
}

export default GetPrimeFactors;
