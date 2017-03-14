/*
  Als een functie data moet teruggeven, gebeurt dat in de vorm van object, array, string, whatever. Maar als die data nog niet beschikbaar is, is je resultaat undefined, of leeg. Je kunt dus ook een Promise (= Object) returnen. Die Promise is eigenlijk een soort capsule om je antwoord heen, die drie dingen kan zeggen:
  - Ik ben nog bezig met wat je hebt gevraagd (PENDING)
  - Ik ben klaar met wat je hebt gevraagd -> alsjeblieft hier heb je je data (FULFILLED)
  - Wat je hebt gevraagd is mislukt -> hier heb je de foutmelding (REJECTED)

  Deze drie dingen zijn de zogenaamde states van een Promise.

  De data die uit een FULFILLED of REJECTED state komt, kunnen we afvangen in methods die de Promise (= Object) met zich meebrengt. De zogenaamde .then() (FULLFILLED) en .catch() (REJECTED) methods.
*/
