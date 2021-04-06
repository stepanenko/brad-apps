
const data = [
  {
    id: 1,
    name: 'Branding',
    brief: 'We help create a unique brand',
    description: 'You will have a great brand identity and will stand out among competitors'
  }, 
  {
    id: 2,
    name: 'Design',
    brief: 'You will get an amazing logo and types',
    description: 'You will have a great logo and will stand out among competitors'
  }, 
  {
    id: 3,
    name: 'Website',
    brief: 'We will help you to build a great website',
    description: 'You will have a great website and will reach your clients everywhere in the world'
  }
];

exports.createPages = ({ actions: { createPage }}) => {
  const allServices = data;

  allServices.forEach(service => {
    createPage({
      path: `/services/${service.name.toLowerCase()}`,
      component: require.resolve("./src/templates/service.js"),
      context: { service }
    });

    createPage({
      path: `/services/${service.name.toLowerCase()}/description`,
      component: require.resolve("./src/templates/description.js"),
      context: { service }
    });
  });
}

exports.data = data;


/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
