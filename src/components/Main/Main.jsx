import React, { useState } from 'react';
import NumberInput from './Inputs/NumberInput/NumberInput';
import RandomInput from './Inputs/RandomInput/RandomInput';
import Representations from './Representation/Representations';
import './Main.css';

function Main() {
  /**
   * Sauvegarde locale du nombre à tester
   */
  const [number, setNumber] = useState();

  return (
    <div className="Main">
      <NumberInput setNumber={setNumber} />
      <RandomInput setNumber={setNumber} />
      <Representations number={number} />
    </div>
  );
}
export default Main;
