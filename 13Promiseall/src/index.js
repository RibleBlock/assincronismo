const axios = require("axios");

Promise.all([   // <-- tudo vai dentro de um array
  axios.get('https://api.github.com/users/maykbrito'),
  axios.get('https://api.github.com/users/RibleBlock'),
  axios.get('https://api.github.com/users/Xar0p')
])
.then(responses => {  //<-- é array tambem
  for(let res of responses) {
    console.log(res.data);
  }
})
.catch(e => console.log(e));
