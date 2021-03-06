import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ToppingForm.css';

const ToppingForm = ({ name, description, image, texture, hasDairy, cost, onChange, onSubmit, onCheck }) => {

  return (
    <section className={styles.ToppingForm}>
      <form onSubmit={onSubmit}>
        <label>
        Name:  
          <input 
            required
            name="name"
            value={name}
            onChange={onChange}
          />
        </label>

        <label>
        Description:
          <input 
            required
            name="description"
            value={description}
            onChange={onChange}
          />
        </label>

        <label>
        Image:
          <input 
            required
            name="image"
            value={image}
            onChange={onChange}
          />
        </label>

        <label>
        Texture:
          <input 
            required
            name="texture"
            value={texture}
            placeholder="chewy? soft? firm?"
            onChange={onChange}
          />
        </label>

        <label>
        Does this contain dairy?
          <input 
            checked={hasDairy}
            name="hasDairy"
            type="checkbox"
            onChange={onCheck}
          /> Yes
        </label>

        <label>
        Cost:
          <input 
            required
            name="cost"
            type="number"
            step=".01"
            value={cost}
            placeholder="US currency, ex: 1.95"
            onChange={onChange}
          />
        </label>
      
        <div>
          <button>Submit!</button>
        </div>
      </form>
      <Link to="/toppings">Go Back to All Toppings</Link>
    </section>
  );
};

ToppingForm.propTypes = {
  name: PropTypes.string, 
  description: PropTypes.string, 
  image: PropTypes.string, 
  texture: PropTypes.string, 
  hasDairy: PropTypes.bool, 
  cost: PropTypes.number,
  onChange: PropTypes.func,
  onCheck: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default ToppingForm;
