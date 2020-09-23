import React from 'react';
import PropTypes from 'prop-types';
import './ColorNumber.css';

ColorNumber.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.string),
};
function ColorNumber({ numbers }) {
  // Pour chacun des nombres envoyés,
  return numbers.map((number, i) => {
    // On calcule quelle doit être sa couleur
    const color = i % 2 === 0 ? 'orange' : 'grey';
    // On renvoi un span de la couleur calculée
    return (
      <span key={i} className={`ColorNumber ${color}`}>
        {number}
      </span>
    );
  });
}
export default ColorNumber;
