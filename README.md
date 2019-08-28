# reactn-crud

A frontend library for building CRUD pages running on top of REST/GraphQL APIs, using Es6, [React](https://facebook.github.io/react/), [reactn](https://github.com/CharlesStover/reactn) and [react-router](https://reacttraining.com/react-router/).

Heavly inspired in [react-admin](https://marmelab.com/react-admin/)
[Demo using antd design](http://reactn-crud.surge.sh/)

> ReactN CRUD

[![NPM](https://img.shields.io/npm/v/reactn-crud.svg)](https://www.npmjs.com/package/reactn-crud) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactn-crud
```

## Usage

* Wrap your app with `reactn.Provider` and set your [dataProvider](https://github.com/marmelab/react-admin#does-it-work-with-my-api) to make compatible with your REST service.

```jsx
import React from 'react';
import dataProvider from './dataProvider';
import { settings, Provider } from 'reactn-crud';

// set data provider
settings.set('dataProvider', dataProvider);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

* Create a CRUD page

```jsx
// in users/index.js
import React from 'react';
import { crud } from 'reactn-crud';
import { ListController, ShowController,FormController } from 'reactn-crud-ui-antd';

function UserList(props) {
  const columns = [
    { title: 'Email', dataIndex: 'email', primary: true },
    { title: 'First Name', dataIndex: 'first_name', sorter: true },
    { title: 'Last Name', dataIndex: 'last_name', sorter: true },
  ];
  return (
    <ListController {...props} resource="users" columns={columns} />
  );
}

function UserShow(props) {
  const fields = [
    { dataIndex: 'email', title: 'Email' },
    {
      dataIndex: 'name',
      title: 'Full name',
      render: record => `${record.first_name} ${record.last_name}`,
    },
  ];
  return <ShowController {...props} fields={fields} resource="users" />;
}

function UserForm(props) {
  return (
    <FormController {...props} resource="users">
      <Input source="email" label="Email" type="email" required />
      <Input source="first_name" label="First Name" required />
      <Input source="last_name" label="Last Name" required />
    </FormController>
  );
}

const config = {
  components: {
    List: UserList,
    Create: UserForm,
    Edit: UserForm,
    Show: UserShow,
  },
};
const { routes } = crud('users', config);
export default routes;
```

* Importing routes

```jsx
// in App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import usersRoutes from './users';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {usersRoutes.map(route => (
            <Route key={route.id} {...route} />
          ))}
          <Route component={() => 'No Match'} />
        </Switch>
      </Layout>
    </Router>
  );
}
```

## API

...IN PROGRESS

## UI plugins
React CRUD is ui-agnostic, but is relatively easy create controller components with your own styles or use a pre-existing ui plugin.

Here some available ui plugins:

* [antd-design](https://github/gengue.com/reactn-crud-ui-antd)
* [material-ui](https://github/gengue.com/reactn-crud-ui-material)

## TODO

* Add unit tests
* Improve documentation, add API section

## License

[MIT](LICENSE.md) © [Genesis Guerrero](https://github.com/gengue)
