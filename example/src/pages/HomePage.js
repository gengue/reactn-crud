import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'reactn-crud';

function HomePage(props) {
  const admin = Provider.getGlobal().rc_admin;
  const resources = admin && admin.resources ? admin.resources : {};
  return (
    <div>
      <h2>All resources</h2>
      <ul>
        {Object.keys(resources).map(i => (
          <li key={i}>
            <Link to={`${resources[i].props.basePath}`}>{i}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
