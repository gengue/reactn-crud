import React, { memo, Fragment, useEffect } from 'react';
import { withGlobal } from 'reactn';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Link, withRouter } from 'react-router-dom';
import { List, Typography, Button } from 'antd';
import { APP_KEY } from 'reactn-crud';
import { resolveRedirect } from './utils';

function ShowController({
  data,
  loading,
  fields,
  match,
  crudHandler,
  CustomComponent,
}) {
  const { resourceId } = match.params;
  const { basePath } = data.props;
  const record = data.data[resourceId];

  useEffect(() => {
    crudHandler.fetchOne(resourceId);
  }, [resourceId, crudHandler]);

  return (
    <Fragment>
      <h2 className="MainLayout-header">Details</h2>
      <section className="MainLayout-content">
        {CustomComponent ? (
          <CustomComponent record={record} fields={fields} loading={loading} />
        ) : (
          <Fragment>
            {loading || !record ? (
              'Loading...'
            ) : (
              <List
                header={
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Link to={resolveRedirect('list', basePath)}>
                      <Button ghost type="primary" icon="left">
                        Back
                      </Button>
                    </Link>
                    <Link to={resolveRedirect('edit', basePath, record.id)}>
                      <Button type="primary" icon="edit">
                        Edit
                      </Button>
                    </Link>
                  </div>
                }
                bordered={false}
                dataSource={fields}
                renderItem={item => {
                  const content = item.render
                    ? item.render(record)
                    : get(record, item.dataIndex);
                  return (
                    <List.Item>
                      <Typography.Text strong>
                        {item.title ? item.title + ':' : null}{' '}
                      </Typography.Text>{' '}
                      {content}
                    </List.Item>
                  );
                }}
              />
            )}
          </Fragment>
        )}
      </section>
    </Fragment>
  );
}

ShowController.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  fields: PropTypes.array,
  match: PropTypes.object,
  crudHandler: PropTypes.object,
  CustomComponent: PropTypes.any,
};

export default props => {
  const { resource } = props;
  const connect = props.Provider ? props.Provider.withGlobal : withGlobal;

  const mapStateToProps = global => ({
    data: global[APP_KEY].resources[resource],
    loading: global[APP_KEY].loading,
  });

  const Controller = connect(mapStateToProps)(withRouter(memo(ShowController)));
  return <Controller {...props} />;
};
