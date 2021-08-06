import { useEffect, useState } from 'react';
import { fetchToppings } from '../services/toppingsApi';

export const useToppings =  () => {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    fetchToppings()
      .then(setToppings);
  }, []);

  return toppings;
};
