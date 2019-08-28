import React from 'react';
import { Input } from 'antd';
import { FormController } from 'reactn-crud-ui-antd';
import { Provider } from 'reactn-crud';
import SelectPickerFetch from './../../components/SelectPickerFetch';

function UserForm(props) {
  return (
    <FormController {...props} resource="users" Provider={Provider}>
      <Input
        source="email"
        label="Email"
        type="email"
        required
        helptext="Something real"
      />
      <Input source="first_name" label="First Name" required />
      <Input source="last_name" label="Last Name" required />
      <Input source="avatar" label="Avatar URL" />
      <SelectPickerFetch
        source="country"
        label="Country"
        resource="countries"
        labelKey="name"
        valueKey="name"
      />
    </FormController>
  );
}

export default UserForm;
