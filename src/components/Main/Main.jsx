import React, { useState } from 'react';
import NumberInput from './NumberInput/NumberInput';
import IsPrime from './IsPrime/IsPrime';
import GetPrimeFactors from './GetPrimeFactors/GetPrimeFactors';
import './Main.css';

function Main() {
  /**
   * Sauvegarde locale du nombre à tester
   */
  const [number, setNumber] = useState();

  return (
    <div className="Main">
      <NumberInput setNumber={setNumber} />
      <IsPrime number={number} />
      <GetPrimeFactors number={number} />
    </div>
  );
}
export default Main;
