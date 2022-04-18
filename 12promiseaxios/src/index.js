const axios = require('axios');

axios.get('https://api.github.com/users/RibleBlock')
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(e => console.log(e));
