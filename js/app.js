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
