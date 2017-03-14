/*
  Promise heeft ook een .all method die je kunt gebruiken om meerdere Promises proberen te resolven
  Net als dat je Object.keys() of Array.from() kunt gebruiken, kun je ook een Promise.all gebruiken.

  Alle Promises die in de array worden meegegeven moeten resolven. Pas dan wordt then() geinitieerd en de de data beschikbaar
  Als ook maar een van de Promises de status REJECTED krijgt, wordt de catch() op de .all() geinitieerd.
*/

import axios from 'axios';

const posts = axios.get('https://jsonplaceholder.typicode.com/posts'); // promise
const comments = axios.get('https://jsonplaceholder.typicode.com/comments'); //promise

Promise.all([posts, comments])
  .then(data => {
    console.log('Promise all values:', data);
  });
