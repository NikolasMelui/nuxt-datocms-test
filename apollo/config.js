import 'dotenv/config';

export default context => {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    // getAuth: () => '1d8590def2d03e3ac7bd39c6a90810'
    getAuth: () => process.env.APOLLO_API_KEY
  };
};
