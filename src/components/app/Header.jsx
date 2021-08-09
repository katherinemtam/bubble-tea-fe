import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return <header className={styles.Header}>
    <div>
      <img src="bubble-logo.png" alt="logo"/>
      <h1>Bubble Tea Shop (Under Construction)</h1>
    </div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/toppings">All Toppings</NavLink>
      <NavLink to="/toppings/add">Add Topping</NavLink>
    </nav>
  </header>;
};

export default Header;
