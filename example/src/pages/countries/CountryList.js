import React from 'react';
import { ListController } from 'reactn-crud-ui-antd';
import ImageGrid from './../../components/ImageGrid';
import { Provider } from 'reactn-crud';

function CountryList(props) {
  return (
    <ListController
      {...props}
      resource="countries"
      columns={[]}
      CustomIterator={ImageGrid}
      Provider={Provider}
    />
  );
}
export default CountryList;
