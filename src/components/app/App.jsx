import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ToppingsList from '../toppings/ToppingsList';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ToppingsList}/>
      </Switch>
    </>
  );
}
