/*
  Filereader API een preview van een image maken. Onthoud: Filereader is asynchroon.

  Maak een generieke herbruikbare functie die raw data van een afbeelding teruggeeft die je selecteert via een input[type="file"]. Deze data gebruik je vervolgens om een plaatje te previewen. Maak gebruik van een Promise.

  Denk bijvoorbeeld aan preview voordat je upload.

  Check https://developer.mozilla.org/en-US/docs/Web/API/FileReader of stackoverflow.
*/

const img = document.getElementById('placeholderImage');
const btn = document.getElementById('imagePreviewBtn');

//werkt niet - zonder promise
function getImageData(event) {
  const reader = new FileReader();
  let image = '';

  reader.readAsDataURL(event.currentTarget.files[0]);
  reader.addEventListener('load', (e) => {
    console.log('Dit duurde even! Veel data!', e.target.result);
    image = e.target.result;
  }, false);

  return image;
}

btn.addEventListener('change', (event) => {
  img.src = getImageData(event);
});

//werkt wel - met promise
function getImageData(event) {
  const reader = new FileReader();
  reader.readAsDataURL(event.currentTarget.files[0]);

  return new Promise(resolve => {
    reader.addEventListener('load', (e) => {
      const imageData = e.target.result;
      if (imageData) {
        resolve({
          image: imageData
        });
      }
    });
  });
}

btn.addEventListener('change', (event) => {
  //eventueel een loader toevoegen..

  //image
  getImageData(event)
    .then(data => {
      img.src = data.image;
    });
});
