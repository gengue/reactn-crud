import React from 'react';
import { Input } from 'antd';
import { FormController } from 'reactn-crud-ui-antd';
import { Provider } from 'reactn-crud';

function BookForm(props) {
  return (
    <FormController {...props} resource="books" Provider={Provider}>
      <Input source="title" label="Title" required />
      <Input source="cover" label="Cover image URL" />
    </FormController>
  );
}

export default BookForm;
