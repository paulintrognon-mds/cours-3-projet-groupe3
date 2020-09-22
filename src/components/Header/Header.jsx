import React from 'react';
import { getTimeOfDay } from '../../services/timeOfDay/timeOfDay';
import './Header.css';

function Header() {
  const timeOfDay = getTimeOfDay();
  return (
    <header className="Header">
      <div className={timeOfDay}>Calculateur de nombres premiers</div>
    </header>
  );
}
export default Header;
