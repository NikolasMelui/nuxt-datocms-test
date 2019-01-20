export default context => {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    getAuth: () => process.env.APOLLO_API_KEY
  };
};
