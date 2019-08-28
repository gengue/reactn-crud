import React from 'react';
import { ShowController } from 'reactn-crud-ui-antd';
import { Provider } from 'reactn-crud';

function BookShow(props) {
  const fields = [
    {
      dataIndex: 'cover',
      render: record => {
        return (
          <img
            src={record.cover}
            style={{ borderRadius: '50%', height: '90px' }}
            alt="Cover"
          />
        );
      },
    },
    {
      dataIndex: 'title',
      title: 'Title',
    },
  ];
  return (
    <ShowController
      {...props}
      fields={fields}
      resource="books"
      Provider={Provider}
    />
  );
}
export default BookShow;
