/*
  Axios is een library die http requests altijd beantwoordt met een Promise. Ongeacht wat de server teruggeeft. Axios is de standaard library die hiervoor gebruikt wordt.

  We gaan de data van een user opvragen met deze mockup API:
*/

import axios from 'axios';
const userPromise = axios.get('https://randomuser.me/api/');
console.log('User promise', userPromise);

//then() method om een succesvolle request (state: FULFILLED) af te vangen
userPromise.then(data => {
  console.log('userData succesvol: ', data.data);
});

//catch method om een mislukte request af te vangen
userPromise.catch(data => {
  console.log('Userdata mislukt: ', data.data);
});

//Je kunt ze ook chainen
userPromise
  .then(data => {
    console.log('userData succesvol: ', data.data);
  })
  .catch(data => {
    console.log('Userdata mislukt: ', data.data);
  });
