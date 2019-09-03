import BookForm from './BookForm';
import BookList from './BookList';
import BookShow from './BookShow';
import { crud } from 'reactn-crud';

const config = {
  props: {
    basePath: '/',
  },
  components: {
    List: BookList,
    Create: BookForm,
    Edit: BookForm,
    Show: BookShow,
  },
  initialParams: {},
};
export const { actions, routes } = crud('books', config);

export default routes;
