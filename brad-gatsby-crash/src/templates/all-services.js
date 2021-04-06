
import React from 'react';
import { Link } from 'gatsby';

import { data } from '../../gatsby-node';

const AllServices = () => (
  <div>
    <h1>Choose a service</h1>
    <ul>
      {data.map(service => (
        <li
          key={service.id}
          style={{
            listStyle: 'none',
            fontWeight: 'bold'
          }}>
          <Link to={`/services/${service.name.toLowerCase()}`}>
            <p>{service.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AllServices;
