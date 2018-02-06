var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(3, 4).then((res) => {
  console.log('Result: ', res);
}, (errorMessage) => {
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('It worked!');
//     reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((messgae) => {
//   console.log('Success', messgae);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
