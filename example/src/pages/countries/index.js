//import CountryList from './CountryList';
import { crud } from 'reactn-crud';

const config = {
  basePath: '/',
  hasDelete: false,
  components: {
    //List: CountryList,
  },
};
export const { actions, routes } = crud('countries', config);

export default routes;
