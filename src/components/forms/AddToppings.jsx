import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addTopping } from '../services/toppingCRUD';

const AddTopping = () => {
  const history = useHistory();
      
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [texture, setTexture] = useState([]);
  const [hasDairy, setDairy] = useState(true);
  const [cost, setCost] = useState('');

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

  // const handleClick = ({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newTopping = await addTopping({ 
      name, 
      description, 
      image, 
      texture,
      hasDairy, 
      cost });

    history.push(`/toppings/${newTopping.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:  
        <input 
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <input 
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>

      <label>
        Image:
        <input 
          name="image"
          value={image}
          onChange={handleChange}
        />
      </label>

      <label>
        Texture:
        <input 
          name="texture"
          value={texture}
          placeholder='multiple format: "soft", "chewy"'
          onChange={handleChange}
        />
      </label>

      <label>
        Does this contain dairy?
        <input 
          name="dairy"
          type="checkbox"
          value={hasDairy}
          onChange={handleChange}
        /> Yes
      </label>

      <label>
        Cost:
        <input 
          name="cost"
          value={cost}
          placeholder="US currency, ex: 1.95"
          onChange={handleChange}
        />
      </label>
      
      <button>Create a New Topping!</button>
    </form>
  );
};

export default AddTopping;
