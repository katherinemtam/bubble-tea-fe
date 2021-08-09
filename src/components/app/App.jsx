import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ToppingDetails from '../details/ToppingDetails';
import AddTopping from '../forms/AddToppings';
import EditToppings from '../forms/EditToppings';
import ToppingsList from '../toppings/ToppingsList';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ToppingsList}/>
        <Route exact path="/toppings/add" component={AddTopping}/>
        <Route exact path="/toppings/:id/edit" component={EditToppings} />
        <Route exact path="/toppings/:id" component={ToppingDetails} />
      </Switch>
    </>
  );
}
