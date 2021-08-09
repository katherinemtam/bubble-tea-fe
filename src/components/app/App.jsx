import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ToppingDetails from '../details/ToppingDetails';
import AddTopping from '../forms/AddToppings';
import EditToppings from '../forms/EditToppings';
import Home from '../home/Home';
import ToppingsList from '../toppings/ToppingsList';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/toppings" component={ToppingsList}/>
        <Route exact path="/toppings/add" component={AddTopping}/>
        <Route exact path="/toppings/:id/edit" component={EditToppings} />
        <Route exact path="/toppings/:id" component={ToppingDetails} />
      </Switch>
    </>
  );
}
