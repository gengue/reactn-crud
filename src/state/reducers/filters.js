import Provider from './../../Provider';
import { FILTER, PREFIX } from './../../constants';

export function filterReducers() {
  const ACTION_NAME = `${PREFIX}${FILTER}`;

  Provider.addReducer(ACTION_NAME, (global, dispatch, action, meta) => {
    const { resource } = meta;
    const { resources } = global;
    return {
      ...global,
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
    };
  });

  const dispatchers = Provider.getDispatch();
  return {
    filterList: dispatchers[ACTION_NAME],
  };
}
export default filterReducers;
