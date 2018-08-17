// Kaycee Ingram
// Writing our own Promise
// ------------------------

const request = require('request');

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

async function main() {
  const res = await getData('https://swapi.co/api/people/1/');
  console.log(res);
}

main();