import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useTopping } from '../state/topping';
import ToppingForm from './ToppingForm';

const EditToppings = () => {
  const { id } = useParams();
  const history = useHistory();

  const topping = useTopping(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    history.push(`/toppings/${topping.id}`);
  };

  return (
    <>
      <h1>Update Topping</h1>
      <ToppingForm {...topping} onSubmit={handleSubmit}/>
    </>
  );
};

export default EditToppings;
