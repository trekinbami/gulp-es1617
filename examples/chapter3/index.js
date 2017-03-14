/*  Waar hebben we Promises voor nodig? - Asynchrone code
    Referentie: https://medium.com/@trekinbami/its-not-magic-understanding-asynchronous-code-7ab2f5d3296c#.kpf9o7i12

    Asynchrone code zorgt ervoor dat functies niet in de gewenste volgorde worden uitgevoerd, omdat, voordat de ene klaar is, de andere alweer begint. Stel dat functie 2 dus data nodig heeft van functie 1, maar die data is nog niet aanwezig, omdat functie 1 er eventjes over doet om die data te verkrijgen/genereren, zou dat betekenen dat functie 2 foutief is.
*/

function fetchUserData() {
  let userData;

  setTimeout(() => {
    userData = {
      firstName: 'Koning',
      lastName: 'Sam',
      email: 'sam@keytoe.nl'
    };
  }, 3000);

  return userData;
}

function logUserData() {
  const userData = fetchUserData();
  console.log('Dit werkt niet', userData);
}

logUserData();
