import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DetailPage from '../details/DetailPage';
import ToppingsList from '../toppings/ToppingsList';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ToppingsList}/>
        <Route exact path="/topping/:id" component={DetailPage} />
      </Switch>
    </>
  );
}
