import React from 'react';
import PropTypes from 'prop-types';
import ColorNumber from '../ColorNumber/ColorNumber';
import split from 'src/services/split/split';
import toHexa from 'src/services/toHexa/toHexa';

HexaRepresentation.propTypes = {
  number: PropTypes.number,
};
function HexaRepresentation({ number }) {
  if (!number) {
    return null;
  }
  const binaryNumber = toHexa(number);
  const binaryNumbers = split(binaryNumber, 2);
  return <ColorNumber numbers={binaryNumbers} />;
}
export default HexaRepresentation;
