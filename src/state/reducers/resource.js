import Provider from './../../Provider';
import { REGISTER_RESOURCE, PREFIX } from './../../constants';

// initialize resource default state
export function resourceReducer() {
  const ACTION_NAME = `${PREFIX}${REGISTER_RESOURCE}`;

  const DEFAULT_PARAMS = {
    sort: null,
    order: 'DESC',
    page: 1,
    perPage: 10,
    filter: {},
  };

  Provider.addReducer(ACTION_NAME, (global, dispatch, action, meta) => {
    const { resource, config } = meta;
    return {
      ...global,
      resources: {
        ...global.resources,
        [resource]: {
          props: {
            name: resource,
            ...config,
          },
          data: {},
          list: {
            ids: [],
            loadedOnce: false,
            params: {
              ...DEFAULT_PARAMS,
              ...config.initialParams,
            },
            total: 0,
          },
          error: null,
        },
      },
    };
  });

  const dispatchers = Provider.getDispatch();
  return {
    registerResource: dispatchers[ACTION_NAME],
  };
}

export default resourceReducer;
