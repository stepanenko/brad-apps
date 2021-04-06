
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const DescriptionPage = ({ pageContext: { service } }) => (
  <Layout>
    <h1>{service.name}</h1>
    <h3>{service.brief}</h3>
    <h4>{service.description}</h4>
    <Link to={`/services/${service.name.toLowerCase()}`}>
      Back to {service.name}
    </Link>
  </Layout>
);

export default DescriptionPage;
