import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const Home = () => {
  return (
    <main className={styles.Home}>
      <h1>Welcome to the Bubble Tea Shop</h1>
      <img src="bubble-tea-home.jpg" alt="logo"/>
      <p>While we're still under construction, checkout the toppings we'll be offering!</p>
      <Link to="/toppings">Check out all the toppings!</Link>
    </main>

  );
};

export default Home;
