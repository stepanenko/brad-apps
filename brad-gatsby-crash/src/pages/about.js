
import React from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Us</h1>
    <p>
      Candid conversations with the most interesting and inspirational people that you’ve never heard of. Host, Chris Do, interviews people from all walks of life about the fringes of design, technology, marketing and business all in hopes of changing the way you think.
      </p>
    <Link to="/">Go to Home</Link>
  </Layout>
);

export default AboutPage;
