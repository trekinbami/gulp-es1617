const delay = () => new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve({
      msg: 'uw0tm8'
    });
  }, 2000);
});

async function x(){
  try {
    console.log('%cHallo! Wij zoeken devs! Check http://www.keytoe.nl voor vacatures!', 'color: orange; font-size: x-large');
    const result = await delay();
    console.log('result', result);
    console.log('Second message!');
  } catch (e) {
    console.error('error!', e);
  }
}

x();
