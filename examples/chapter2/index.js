//Uitleg van arrow functions in ES6 zodat de syntax niet verwarrend wordt!

//Een functie uitvoeren die geen value returned is nog steeds:
function sayPoop() {
  console.log('Oldskool Poop!');
}

sayPoop(); // 'Oldskool Poop!'

//of anonieme functie die een value returned toekennen aan variabel
var poopy = function() {
  return 'Var Poop!';
}

console.log(poopy()); // 'Var Poop!'

//Met arrow function gaat dat zo:
const arrowPoop = () => {
  return 'Arrow Poop!';
}

console.log(arrowPoop()); // 'Arrow Poop!'
