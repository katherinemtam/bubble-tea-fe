import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useTopping } from '../state/topping';
import { updateTopping } from '../services/toppingCRUD';
import ToppingForm from './ToppingForm';
import styles from './EditToppings.css';
import { fetchTopping } from '../services/toppingsApi';

const EditToppings = () => {
  const { id } = useParams();
  const history = useHistory();

  const fetchedTopping = useTopping(id);
  console.log('fetched', fetchedTopping);

  const [name, setName] = useState(fetchedTopping.name);
  const [description, setDescription] = useState(fetchedTopping.description);
  const [image, setImage] = useState(fetchedTopping.image);
  const [texture, setTexture] = useState(fetchedTopping.texture);
  const [hasDairy, setDairy] = useState(fetchedTopping.hasDairy);
  const [cost, setCost] = useState(fetchedTopping.cost);
  const [topping, setTopping] = useState(
    fetchedTopping
    // {
    //   id,
    //   name, 
    //   description, 
    //   image, 
    //   texture,
    //   hasDairy, 
    //   cost }
  );

  console.log('state', topping);

  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'description':
        setDescription(target.value);
        break;
      case 'image':
        setImage(target.value);
        break;
      case 'texture':
        setTexture(target.value);
        break;
      case 'cost':
        setCost(target.value);
        break;
    }
  };

  const handleCheck = ({ target }) => {
    setDairy(target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTopping = await updateTopping({
      id,
      name, 
      description, 
      image, 
      texture,
      hasDairy, 
      cost });
    setTopping(newTopping);

    history.push(`/toppings/${newTopping.id}`);
  };

  return (
    <section className={styles.EditToppings}>
      <h1>Update Topping</h1>
      <ToppingForm {...topping} onChange={handleChange} onCheck={handleCheck} onSubmit={handleSubmit} />
    </section>
  );
};

export default EditToppings;
