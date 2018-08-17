// Kaycee Ingram
// Writing our own Promise
// ------------------------

const request = require('request');
const axios = require('axios');

function getData(api) {
  return new Promise((resolve, reject) => {
    request(api, (error, res, starWarsData) => {
      error ? reject(error) : resolve(starWarsData);
    });
  });
}

getData('https://swapi.co/api/people/1/')
  .then(data => console.log(data)) // do stuff with data (if succeeds).
  .catch(error => console.error('Uh oh... ', error)); // do stuff with error (if fails).

// --------------------------------------------

// Using Async and Await
// ----------------------

async function getData(url) {
  const res = await axios.get(url);
  console.log(res.data);
}

getData('https://swapi.co/api/people/1/');