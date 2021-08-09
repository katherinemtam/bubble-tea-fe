import React from 'react';
import { useParams } from 'react-router-dom';
import { useTopping } from '../state/topping';
import { Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const topping = useTopping(id);

  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const texture = JSON.stringify(topping.texture);
  const hasDairy = JSON.stringify(topping.hasDairy);
  const cost = formatter.format(topping.cost);

  if(!topping) return <h1>Loading...</h1>;
  return (
    <figure>
      <h1>{topping.name}</h1>
      <img src={topping.image} alt={topping.name}/>
      <figcaption>
        <p>Description: {topping.description}</p>
        <p>Texture: {texture}</p>
        <p>Has Dairy: {hasDairy}</p>
        <p>Cost: {cost}</p>
      </figcaption>
      <Link to="/">Go Back Home</Link>
    </figure>
  );
};

export default DetailPage;
