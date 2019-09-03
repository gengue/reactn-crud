import Provider from './../../Provider';
import { DELETE, PREFIX, SAVING_KEY } from './../../constants';

export function deleteReducers() {
  const ACTION_NAME = `${PREFIX}${DELETE}`;

  Provider.addReducer(ACTION_NAME, (global, dispatch, action, meta) => {
    const { resource } = meta;
    const { resources } = global;
    const { [action.payload]: value, ...newData } = resources[resource].data;
    const newIds = resources[resource].list.ids.filter(
      i => i !== action.payload
    );
    return {
      ...global,
      [SAVING_KEY]: false,
      resources: {
        ...resources,
        [resource]: {
          ...resources[resource],
          data: { ...newData },
          list: {
            ...resources[resource].list,
            ids: newIds,
          },
        },
      },
    };
  });

  const dispatchers = Provider.getDispatch();
  return {
    deleteSuccess: dispatchers[ACTION_NAME],
  };
}
export default deleteReducers;
