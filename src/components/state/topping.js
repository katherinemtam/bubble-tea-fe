import { useEffect, useState } from 'react';
import { fetchTopping, fetchToppings } from '../services/toppingsApi';

export const useToppings =  () => {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    fetchToppings()
      .then(setToppings);
  }, []);

  return toppings;
};

export const useTopping = (id) => {
  const [topping, setTopping] = useState({});

  useEffect(() => {
    fetchTopping(id)
      .then(setTopping);
  }, [id]);

  return topping;
};
