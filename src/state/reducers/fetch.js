import Provider from './../../Provider';
import {
  FETCH_START,
  FETCH_ERROR,
  PREFIX,
  LOADING_KEY,
  SAVING_KEY,
  DELETE,
  CREATE,
  UPDATE,
} from './../../constants';

export function fetchReducers() {
  const ACTION_NAME_START = `${PREFIX}${FETCH_START}`;
  const ACTION_NAME_ERROR = `${PREFIX}${FETCH_ERROR}`;

  Provider.addReducers({
    [ACTION_NAME_START]: (global, dispatch, action, meta) => {
      let key = LOADING_KEY;
      if (
        meta.intent === DELETE ||
        meta.intent === CREATE ||
        meta.intent === UPDATE
      ) {
        key = SAVING_KEY;
      }
      return {
        ...global,
        [key]: true,
      };
    },
    [ACTION_NAME_ERROR]: (global, dispatch, action, meta) => {
      let key = LOADING_KEY;
      if (
        meta.intent === DELETE ||
        meta.intent === CREATE ||
        meta.intent === UPDATE
      ) {
        key = SAVING_KEY;
      }
      return {
        ...global,
        [key]: false,
        resources: {
          ...global.resources,
          [meta.resource]: {
            ...global.resources[meta.resource],
            error: action.error.toString(),
          },
        },
      };
    },
  });

  const dispatchers = Provider.getDispatch();
  return {
    fetchStart: dispatchers[ACTION_NAME_START],
    fetchError: dispatchers[ACTION_NAME_ERROR],
  };
}

export default fetchReducers;
