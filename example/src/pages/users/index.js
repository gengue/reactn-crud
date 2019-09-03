//import UserForm from './UserForm';
//import UserList from './UserList';
//import UserShow from './UserShow';
import { crud } from 'reactn-crud';

const config = {
  basePath: '/',
  //hasDelete: false,
  components: {
    //List: UserList,
    //Create: UserForm,
    //Edit: UserForm,
    //Show: UserShow,
  },
};
export const { actions, routes } = crud('users', config);

export default routes;
