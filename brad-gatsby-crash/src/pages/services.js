
import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';
import SEO from "../components/seo";
import AllServices from '../templates/all-services';

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <AllServices />
    <Link to="/">Go to Home</Link>
  </Layout>
);

export default ServicesPage;
