/*
  Als we een Promise returnen kunnen we de 'state' beinvloeden met de interne methods die je verkrijgt uit de callback van de constructor. Dit zijn de zogenaamde 'resolve' en 'reject' methods.

  Als de 'resolve' method wordt aangeroepen, gaat de status van de Promise op FULFILLED
    Dit betekent dat de then() een waarde krijgt
  Als de 'reject' method wordt aangeroepen, gaat de status van de Promise op REJECTED
    Dit betekent dat de catch() een waarde krijgt

  Deze methods geven altijd een value terug. Als een van deze methods wordt aangeroepen is de ander niet meer van toepassing.

  setTimeout simuleert een request die wat langer duurt
*/

const reqUserData = (success = true) => {
  return new Promise((resolve, reject) => {
    //resolve en reject kun je ook anders noemen als je dat wilt
    setTimeout(() => {
      if(success){
        resolve({
          firstName: 'Koning',
          lastName: 'Sam',
          email: 'sam@keytoe.nl'
        });
      } else{
        reject({
          msg: 'Er is iets misgegaan!'
        });
      }
    }, 2000);
  });
}

function showUserData(willResolve){
  reqUserData(willResolve)
    .then(data => {
      console.log('User succesvol opgehaald:', data);
    })
    .catch(data => {
      console.log('User ophalen gefaald:', data);
    });
}

showUserData(false);
