import React from 'react';
import { useToppings } from '../state/topping';
import { Link } from 'react-router-dom';
import Topping from './Toppings';

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
    <>
      <h1>Toppings</h1>
      <Link to="/toppings/add">Add New Topping</Link>
      <ul>{toppingElements}</ul>
    </>
  );
};

export default ToppingsList;
