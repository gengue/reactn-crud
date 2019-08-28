import React from 'react';

/**
 * routesFor
 * @param {string} resource
 * @param {Object} actions - object of functions (async actions)
 * @param {object} config
 * @returns {Array} - react-router Routes
 */
export function routesFor(resource, actions, config) {
  const { basePath, hasList, hasShow, hasCreate, hasEdit } = config;
  const { List, Show, Edit, Create } = config.components;
  const routes = [];
  if (hasList) {
    routes.push({
      id: `${resource}-crud-list`,
      exact: true,
      path: basePath,
      component: props => <List {...props} crudHandler={actions} />,
    });
  }
  if (hasShow) {
    routes.push({
      id: `${resource}-crud-show`,
      exact: true,
      path: `${basePath}/:resourceId/show`,
      component: props => <Show {...props} crudHandler={actions} />,
    });
  }
  if (hasEdit) {
    routes.push({
      id: `${resource}-crud-edit`,
      exact: true,
      path: `${basePath}/:resourceId/edit`,
      component: props => <Edit {...props} crudHandler={actions} />,
    });
  }
  if (hasCreate) {
    routes.push({
      id: `${resource}-crud-create`,
      exact: true,
      path: `${basePath}/create`,
      component: props => <Create {...props} crudHandler={actions} />,
    });
  }
  return routes;
}

export default routesFor;
