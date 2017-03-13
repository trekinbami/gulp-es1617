# Readme!
Deze repository heeft een simpele Gulp taskrunner lopen, die ervoor zorgt dat onze ES2015 code en ook onze ES2016 code gecompiled wordt naar ES5. Dit houdt in dat we alle ES2015 en ES2016 syntax crossbrowser kunnen gebruiken (arrow functions bijvoorbeeld) en ook het ES2016 `await/async`.

## Repository clonen
Ga naar Terminal of je commandline interface, navigeer naar je gewenste directory:

`$ cd DIRECTORY-WAAR-JE-WILT-CLONEN`

`$ git clone git@github.com:trekinbami/gulp-es1617.git promises-workshop`

Nu is de repository gecloned, en moeten we dependencies installeren. Zorg ervoor dat je NodeJs op je computer geinstalleerd hebt! Check [https://nodejs.org/en/](https://nodejs.org/en/) en installeer gewoon via de downloadable wizard. Als je NodeJs al hebt, update deze wizard je huidige versie.

## Dependencies installeren
Ga naar de root van de geclonede map waar je `gulpfile.js` staat:

`$ npm install`

## Gulp starten
In de root van de map typ je:

`$ npm run start`

## Werkbestand
Het bestand `/js/app.js` is ons werkbestand. Als je daarin iets aanpast, en opslaat, doet Gulp het automatisch compilen. Ga in je browser naar index.html en check het resultaat.
