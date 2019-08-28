import React from 'react';
import { ListController } from './../../ant-ui';
import { Provider } from 'reactn-crud';

function BookListList(props) {
  const columns = [
    {
      title: 'Cover',
      dataIndex: 'cover',
      primary: true,
      render: (text, record, index) => {
        return (
          <img src={record.cover} style={{ height: '50px' }} alt="Cover" />
        );
      },
      width: 30,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      primary: true,
    },
  ];
  return (
    <ListController
      {...props}
      columns={columns}
      resource="books"
      Provider={Provider}
    />
  );
}

export default BookListList;