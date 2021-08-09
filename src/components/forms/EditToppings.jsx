import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useTopping } from '../state/topping';
import { updateTopping } from '../services/toppingCRUD';
import ToppingForm from './ToppingForm';
import styles from './EditToppings.css';

const EditToppings = () => {
  const { id } = useParams();
  const history = useHistory();

  const { loading, topping } = useTopping(id);

  const [newTopping, setNewTopping] = useState(null);

  useEffect(() => {
    console.log(loading, topping);
    if(!loading) setNewTopping(topping);
  }, [topping, loading]);

  const handleChange = ({ target }) => {
    setNewTopping(prevTopping => ({ ...prevTopping, [target.name]:target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('NEW', newTopping);
    await updateTopping({ id, ...newTopping });

    history.push(`/toppings/${id}`);
  };

  if(loading && !newTopping) return <h1>Loading...</h1>;
  return (
    <section className={styles.EditToppings}>
      <h1>Update Topping</h1>
      <ToppingForm {...newTopping} onChange={handleChange} onSubmit={handleSubmit} />
    </section>
  );
};

export default EditToppings;
