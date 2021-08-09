import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addTopping } from '../services/toppingCRUD';
import ToppingForm from './ToppingForm';
import styles from './AddToppings.css';

const AddTopping = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(null);
      
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [texture, setTexture] = useState('');
  const [hasDairy, setDairy] = useState(Boolean);
  const [cost, setCost] = useState('');
  const [topping, setTopping] = useState({});

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
      case 'dairy':
        setDairy(target.value);
        break;
      case 'cost':
        setCost(target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const newTopping = await addTopping({ 
      name, 
      description, 
      image, 
      texture,
      hasDairy, 
      cost });
    
    setTopping(newTopping);
    setLoading(false);
    history.push(`/toppings/${newTopping.id}`);
  };

  if(loading) return <h1>Loading...</h1>;
  return (
    <section className={styles.AddToppings}>
      <h1>Add Topping</h1>
      <ToppingForm {...topping} onChange={handleChange} onSubmit={handleSubmit}/>
    </section>
  );
};

export default AddTopping;
