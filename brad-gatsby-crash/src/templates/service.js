
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ServicePage = ({ pageContext: { service } }) => (
  <Layout>
    <h1>{service.name}</h1>
    {/* <h3>{service.brief}</h3> */}
    <Link
      style={{
        display: 'block',
        marginBottom: '20px'
      }}
      to="./description">
      Read more...
    </Link>
    <Link to="/services">Back to Services</Link>
  </Layout>
);

export default ServicePage;
