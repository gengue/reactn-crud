import Provider from './../Provider';
import dispatchers from './dispatchers';
import { fetchList, fetchOne, create, update, remove } from './asyncActions';

/**
 * actionsFor
 * @example
 *  const users = actionsFor('users', setup);
 *  users.fetchUsers();
 * @param {string} resource - name
 * @param {object} config - options to setup the reducers
 * @returns {object} - object of functions (action creators)
 */
export function actionsFor(resource, config) {
  const { resources } = Provider.getGlobal();

  // initialize admin schema or resource
  if (!resources || !resources[resource]) {
    dispatchers.registerResource({}, { resource, config });
  } else {
    console.warn('Resource already exists');
  }

  return {
    fetchList: fetchList(dispatchers, resource),
    fetchOne: fetchOne(dispatchers, resource),
    create: create(dispatchers, resource),
    update: update(dispatchers, resource),
    delete: remove(dispatchers, resource),
    filter: (params, meta = {}) =>
      dispatchers.filterList({ payload: params }, meta),
  };
}

export default actionsFor;
