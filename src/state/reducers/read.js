import Provider from './../../Provider';
import { GET_LIST, GET_ONE, PREFIX, LOADING_KEY } from './../../constants';

function getSuccess() {
  return (global, dispatch, action, meta) => {
    const ids = [];
    let newData = {};

    // it's fetchOne
    if (action.single) {
      newData = { [action.payload.id]: action.payload };
    }
    // it's fetchList
    else {
      newData = action.payload.reduce((acc, i) => {
        ids.push(i.id);
        return { ...acc, [i.id]: i };
      }, {});
    }
    const { resource } = meta;
    const { resources } = global;

    return {
      ...global,
      [LOADING_KEY]: false,
      resources: {
        ...resources,
        [resource]: {
          ...resources[resource],
          data: meta.replace
            ? newData
            : { ...resources[resource].data, ...newData },
          list: {
            ...resources[resource].list,
            // params: { ...resources[resource].list.params, ...action.params },
            ids,
            loadedOnce: true,
            total: action.total,
          },
        },
      },
    };
  };
}

export function readReducer() {
  const ACTION_NAME_LIST = `${PREFIX}${GET_LIST}`;
  const ACTION_NAME_ONE = `${PREFIX}${GET_ONE}`;

  Provider.addReducers({
    [ACTION_NAME_LIST]: getSuccess(),
    [ACTION_NAME_ONE]: getSuccess(),
  });

  const dispatchers = Provider.getDispatch();
  return {
    getListSuccess: dispatchers[ACTION_NAME_LIST],
    getOneSuccess: dispatchers[ACTION_NAME_ONE],
  };
}

export default readReducer;
