import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/home';

// import { Container } from './styles';

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
