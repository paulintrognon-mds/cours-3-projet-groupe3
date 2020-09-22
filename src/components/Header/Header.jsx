import React from 'react';
import getTimeOfDay from 'src/services/timeOfDay/getTimeOfDay';
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
