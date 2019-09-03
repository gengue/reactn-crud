import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import usersRoutes from './pages/users';
import booksRoutes from './pages/books';
import countriesRoutes from './pages/countries';
import HomePage from './pages/HomePage';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {usersRoutes.map(route => (
            <Route key={route.id} {...route} />
          ))}
          {booksRoutes.map(route => (
            <Route key={route.id} {...route} />
          ))}
          {countriesRoutes.map(route => (
            <Route key={route.id} {...route} />
          ))}
          <Route component={() => 'No Match'} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
