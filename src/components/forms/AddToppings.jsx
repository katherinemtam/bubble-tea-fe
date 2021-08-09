import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addTopping } from '../services/toppingCRUD';
import ToppingForm from './ToppingForm';

const AddTopping = () => {
  const history = useHistory();
      
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [texture, setTexture] = useState([]);
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

    const newTopping = await addTopping({ 
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
    <>
      <h1>Add Topping</h1>
      <ToppingForm {...topping} onChange={handleChange} onSubmit={handleSubmit} onCheck={handleCheck}/>
    </>
  );
};

export default AddTopping;
