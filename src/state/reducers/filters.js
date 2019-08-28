import Provider from './../../Provider';
import { FILTER, PREFIX, APP_KEY } from './../../constants';

export function filterReducers() {
  const ACTION_NAME = `${PREFIX}${FILTER}`;

  Provider.addReducer(ACTION_NAME, (global, dispatch, action, meta) => {
    const { resource } = meta;
    const admin = { ...global[APP_KEY] };
    const { resources } = admin;
    return {
      [APP_KEY]: {
        ...admin,
        resources: {
          ...resources,
          [resource]: {
            ...resources[resource],
            list: {
              ...resources[resource].list,
              params: {
                ...resources[resource].list.params,
                ...action.payload,
              },
            },
          },
        },
      },
    };
  });

  const dispatchers = Provider.getDispatch();
  return {
    filterList: dispatchers[ACTION_NAME],
  };
}
export default filterReducers;
