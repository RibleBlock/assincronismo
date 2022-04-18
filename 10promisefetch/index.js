fetch('https://api.github.com/users/RibleBlock')
  .then(response => response.json())
  .then(data => fetch(data.repos_url)) // <-- uma nova promise
  .then(res => res.json(res))
  .then(res => console.log(res))