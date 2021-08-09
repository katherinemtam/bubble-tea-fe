import { useEffect, useState } from 'react';
import { fetchTopping, fetchToppings } from '../services/toppingsApi';

export const useToppings =  () => {
  const [toppings, setToppings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchToppings()
      .then(setToppings)
      .then(setLoading(false));
  }, []);

  return { loading, toppings };
};

export const useTopping = (id) => {
  const [topping, setTopping] = useState({});

  useEffect(() => {
    fetchTopping(id)
      .then(setTopping);
  }, [id]);

  return topping;
};
