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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTopping(id)
      .then(setTopping)
      .then(() => setLoading(false));
  }, [id]);

  return { loading, topping };
};
