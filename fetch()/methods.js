//type 1 : 

const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.example.com';

const url = `${apiUrl}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });



//   type 2

const apiKey = 'YOUR_API_KEY';
const accessToken = 'YOUR_ACCESS_TOKEN';
const apiUrl = 'https://api.example.com';

const url = `${apiUrl}?key=${apiKey}`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

fetch(url, { headers })
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });


//   using axios

const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
const accessToken = 'YOUR_ACCESS_TOKEN';
const apiUrl = 'https://api.example.com';

const url = `${apiUrl}?key=${apiKey}`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

axios.get(url, { headers })
  .then(response => {
    // Handle the API response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });


//   using node fetch

const fetch = require('node-fetch');

const apiKey = 'YOUR_API_KEY';
const accessToken = 'YOUR_ACCESS_TOKEN';
const apiUrl = 'https://api.example.com';

const url = `${apiUrl}?key=${apiKey}`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

fetch(url, { headers })
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });
