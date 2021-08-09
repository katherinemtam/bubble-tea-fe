import React from 'react';
import { useToppings } from '../state/topping';
import { Link } from 'react-router-dom';
import Topping from './Toppings';

const ToppingsList = () => {
  const toppings = useToppings();
  console.log(toppings);

  const toppingElements = toppings.map(topping => (
    <li key={topping.id}>
      <Link to={`/toppings/${topping.id}`}>
        <Topping {...topping}/>
      </Link>
    </li>
  ));
  return (
    <>
      <h1>Toppings</h1>
      <Link to="/add">Add New Topping</Link>
      <ul>{toppingElements}</ul>
    </>
  );
};

export default ToppingsList;
