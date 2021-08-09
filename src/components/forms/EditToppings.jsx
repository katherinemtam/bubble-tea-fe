import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useTopping } from '../state/topping';
import { updateTopping } from '../services/toppingCRUD';
import ToppingForm from './ToppingForm';
import styles from './EditToppings.css';

const EditToppings = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log('id', id);
  const { loading, topping } = useTopping(id);
  console.log('hello', topping);

  const [name, setName] = useState(topping.name);
  const [description, setDescription] = useState(topping.description);
  const [image, setImage] = useState(topping.image);
  const [texture, setTexture] = useState(topping.texture);
  const [hasDairy, setDairy] = useState(topping.hasDairy);
  const [cost, setCost] = useState(topping.cost);
  const [newTopping, setNewTopping] = useState({
    id,
    name, 
    description, 
    image, 
    texture,
    hasDairy, 
    cost, 
  });

  // {
  //   id,
  //   name: topping.name, 
  //   description: topping.description, 
  //   image: topping.image, 
  //   texture: topping.texture,
  //   hasDairy: topping.hasDairy, 
  //   cost: topping.cost 
  // }
  console.log('state', newTopping);

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
    setNewTopping(newTopping);

    history.push(`/toppings/${newTopping.id}`);
  };
  if(loading) return <h1>Loading...</h1>;
  return (
    <section className={styles.EditToppings}>
      <h1>Update Topping</h1>
      <ToppingForm {...topping} onChange={handleChange} onCheck={handleCheck} onSubmit={handleSubmit} />
    </section>
  );
};

export default EditToppings;
