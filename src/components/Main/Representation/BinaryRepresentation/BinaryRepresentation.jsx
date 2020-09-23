import React from 'react';
import PropTypes from 'prop-types';
import ColorNumber from '../ColorNumber/ColorNumber';
import toBinary from 'src/services/toBinary/toBinary';
import split from 'src/services/split/split';

BinaryRepresentation.propTypes = {
  number: PropTypes.number,
};
function BinaryRepresentation({ number }) {
  if (!number) {
    return null;
  }
  const binaryNumber = toBinary(number);
  const binaryNumbers = split(binaryNumber, 8);
  return <ColorNumber numbers={binaryNumbers} />;
}
export default BinaryRepresentation;
