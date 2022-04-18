const axios = require("axios");

axios.get('https://api.github.com/users/RibleBlock')
  .then(res => {
    console.log(res.data);
  })