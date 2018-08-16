// Kaycee Ingram
// Writing our own Promises to gain a real understanding.

const request = require('request');

function getData() {
  return new Promise((resolve, reject) => {
    request('https://swapi.co/api/people/1/', (error, res, starWarsData) => {
      error ? reject(error) : resolve(starWarsData);
    });
  });
}

getData()
  .then(data => console.log(data))
  .catch(error => console.log(error));