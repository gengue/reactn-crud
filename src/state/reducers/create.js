import Provider from './../../Provider';
import { CREATE, PREFIX, SAVING_KEY } from './../../constants';

export function createReducers() {
  const ACTION_NAME = `${PREFIX}${CREATE}`;

  Provider.addReducer(ACTION_NAME, (global, dispatch, action, meta) => {
    const { resource } = meta;
    const { resources } = global;
    return {
      ...global,
      [SAVING_KEY]: false,
      resources: {
        ...resources,
        [resource]: {
          ...resources[resource],
          data: {
            ...resources[resource].data,
            [action.payload.id]: action.payload,
          },
        },
      },
    };
  });

  const dispatchers = Provider.getDispatch();
  return {
    createSuccess: dispatchers[ACTION_NAME],
  };
}

export default createReducers;
