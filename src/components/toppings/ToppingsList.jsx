import React from 'react';
import { useToppings } from '../state/topping';
import { Link } from 'react-router-dom';
import Topping from './Toppings';
import styles from './ToppingsList.css';

const ToppingsList = () => {
  const { loading, toppings } = useToppings();

  const toppingElements = toppings.map(topping => (
    <li key={topping.id}>
      <Link to={`/toppings/${topping.id}`}>
        <Topping {...topping}/>
      </Link>
    </li>
  ));

  if(loading) return <h1>Loading...</h1>;
  return (
    <section className={styles.ToppingsList}>
      <h1>All Toppings</h1>
      <ul>{toppingElements}</ul>
    </section>
  );
};

export default ToppingsList;
