import React from 'react';
import PropTypes from 'prop-types';
import './Representations.css';
import RomanRepresentation from './RomanRepresentation/RomanRepresentation';
import BinaryRepresentation from './BinaryRepresentation/BinaryRepresentation';
import HexaRepresentation from './HexaRepresentation/HexaRepresentation';

Representations.propTypes = {
  number: PropTypes.number,
};
function Representations({ number }) {
  if (number === undefined) {
    return null;
  }
  if (number < 1) {
    return <p className="Error">Le nombre doit être un nombre entier supérieur ou égal à 1 !</p>;
  }
  return (
    <div className="Representations">
      <div className="Representation">
        <p className="Representation-title">Représentation Romaine</p>
        <RomanRepresentation number={number} />
      </div>
      <div className="Representation">
        <p className="Representation-title">Représentation Binaire</p>
        <BinaryRepresentation number={number} />
      </div>
      <div className="Representation">
        <p className="Representation-title">Représentation Hexadécimale</p>
        <HexaRepresentation number={number} />
      </div>
    </div>
  );
}
export default Representations;
