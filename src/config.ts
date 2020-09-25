const config = {
  'FACEBOOK_APP_ID': process.env.REACT_APP_FACEBOOK_APP_ID || '490466604947035',
  'GOOGLE_APP_ID':
    process.env.REACT_APP_GOOGLE_APP_ID ||
    '767956916860-kkqvsqniunrhal5j5gco8njs6d0u7t1i.apps.googleusercontent.com',
  'REACT_APP_GOOGLE_KEY':
    process.env.REACT_APP_GOOGLE_KEY ||
    'AIzaSyAhohptKzKOOndCrj_6R-gIzYUfMQ3Gs-c',
  'apiBaseURL':
    process.env.REACT_APP_API_URL ||
    'https://blueclerk-node-api.deploy.blueclerk.com/api/v1/',
  'appBaseURL': process.env.REACT_APP_BASE_URL || 'http://localhost:3000/'
};

export default config;
