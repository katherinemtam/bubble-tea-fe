import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ToppingDetails from '../details/ToppingDetails';
import ToppingsList from '../toppings/ToppingsList';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ToppingsList}/>
        <Route exact path="/topping/:id" component={ToppingDetails} />
      </Switch>
    </>
  );
}
