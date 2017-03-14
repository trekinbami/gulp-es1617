/*
  await/async is een experimentele feature, in de opzet van Ecmascript2017. Omdat het nog experimenteel is, wordt hij nog niet ondersteund door browsers. Dus als je dit gebruikt, zorg er dan voor dat je compiler de code omzet naar ES5 code, zoals deze Gulp taskrunner.

  await en async zijn zogenaamde keywords. Net als bijvoorbeeld new of function.

  Met deze keywords kunnen we makkelijk en overzichtelijk Promises synchroon afhandelen.

  async is een keyword die we (alleen) voor een function zetten. Deze function MOET een Promise returnen.
  await is het keyword die ervoor zorgt dat alle code, die na de await komt, wacht met uitvoeren tot de Promise FULFILLED is. Normaal ken je die await toe aan een variable, zodat de waarde die uit de Promise komt meteen wordt toegekend aan die variable.

  try/catch voor error handling gebruiken
*/

const delay = () => new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve({
      msg: 'uw0tm8'
    });
  }, 2000);
});

async function sayThings(){
  try {
    console.log('%cHallo! Wij zoeken devs! Check http://www.keytoe.nl voor vacatures!', 'color: orange; font-size: x-large');
    const result = await delay();
    console.log('result', result);
    console.log('Second message!');
  } catch (e) {
    console.error('error!', e);
  }
}

sayThings();
