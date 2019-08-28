import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import usersCrud from './pages/users';
import booksCrud from './pages/books';
import countriesCrud from './pages/countries';
import HomePage from './pages/HomePage';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {usersCrud.routes.map(route => (
            <Route key={route.id} {...route} />
          ))}
          {booksCrud.routes.map(route => (
            <Route key={route.id} {...route} />
          ))}
          {countriesCrud.routes.map(route => (
            <Route key={route.id} {...route} />
          ))}
          <Route component={() => 'No Match'} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
