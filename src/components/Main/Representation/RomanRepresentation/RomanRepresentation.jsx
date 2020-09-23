import React from 'react';
import PropTypes from 'prop-types';

import toRoman from 'src/services/toRoman/toRoman';

RomanRepresentation.propTypes = {
  number: PropTypes.number,
};
function RomanRepresentation({ number }) {
  if (!number) {
    return null;
  }
  if (number > 10000) {
    return <p>Ce nombre est trop grand pour être affiché en nombre romain.</p>;
  }
  return <p>{toRoman(number)}</p>;
}
export default RomanRepresentation;
