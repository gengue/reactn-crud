import React from 'react';
import { Link } from 'react-router-dom';
import { ShowController } from 'reactn-crud-ui-antd';
import { Provider } from 'reactn-crud';

function UserShow(props) {
  const fields = [
    {
      dataIndex: 'avatar',
      render: record => {
        return (
          <Link to={`/users/${record.id}/show`}>
            <img
              src={record.avatar}
              style={{ borderRadius: '50%', height: '90px' }}
              alt="Avatar"
            />
          </Link>
        );
      },
    },
    {
      dataIndex: 'email',
      title: 'Email',
    },
    {
      dataIndex: 'name',
      title: 'Full name',
      render: record => `${record.first_name} ${record.last_name}`,
    },
    {
      dataIndex: 'country',
      title: 'Country',
    },
    {
      dataIndex: 'created_at',
      title: 'Joined',
    },
  ];
  return (
    <ShowController
      {...props}
      fields={fields}
      resource="users"
      Provider={Provider}
    />
  );
}
export default UserShow;
