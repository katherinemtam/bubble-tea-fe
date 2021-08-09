import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useTopping } from '../state/topping';
import { Link } from 'react-router-dom';
import { deleteTopping } from '../services/toppingCRUD';
import styles from './ToppingDetails.css';

const ToppingDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  let { loading, topping } = useTopping(id);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const hasDairy = JSON.stringify(topping.hasDairy);
  const cost = formatter.format(topping.cost);

  const handleClick = async () => {
    const confirmation = 'Do you really want to delete this topping?';
    
    if(!window.confirm(confirmation)) return;

    try {
      topping = null;
      await deleteTopping(id);
      history.push('/toppings');
    }
    catch(err) {
      console.log(err.message);
    }

  };

  if(loading) return <h1>Loading...</h1>;
  return (
    <figure className={styles.ToppingDetails}>
      <h1>{topping.name}</h1>
      <img src={topping.image} alt={topping.name}/>
      <figcaption>
        <p>Description: {topping.description}</p>
        <p>Texture: {topping.texture}</p>
        <p>Has Dairy: {hasDairy}</p>
        <p>Cost: {cost}</p>
      </figcaption>
      <nav>
        <Link to ={`/toppings/${topping.id}/edit`}>Edit Topping</Link>
        <button onClick={handleClick}>Delete Topping</button>
        <Link to="/toppings">Go Back to All Toppings</Link>
      </nav>
    </figure>
  );
};

export default ToppingDetails;
