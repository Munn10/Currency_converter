// console.log("script star");

// setTimeout(() => {
//   console.log("Hello from set timeout function!");
// }, 2000);

// setTimeout(() => {
//   console.log("second timeout function!");
// }, 1000);
// console.log("Script end");

//? callback: callback is a function passed to another function as an argument.

// Ex:

// function twoNums(a, b) {
//   console.log(a + b);
// }

// function addNums(a, b, callback) {
//   callback(a, b);
// }

// addNums(1, 2, twoNums);

function getData(userId, cb) {
  setTimeout(() => {
    console.log("user : ", userId);
    cb();
  }, 2000);
}

// getData(1, () => {
//   console.log("getting data 2");
//   getData(2, () => {
//     console.log("getting data 3");
//     getData(3, () => {
//       console.log("getting data 4");
//       getData(4, () => {
//         console.log("getting data 5");
//         getData(5, () => {
//           console.log("getting data 6");
//           getData(6, () => {});
//         });
//       });
//     });
//   });
// });

//! To overcome callback hell problem we use promises in JS:

// let p1 = new Promise((resolve, reject) => {
//   console.log("Inside Promise");
//   //   resolve("Fulfilled");
//   //   reject("something went wrong");
// });

// console.log(p1);

// function getData(userid, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("user : ", userid);
//       resolve("success");
//       if (cb) {
//         cb();
//       }
//     }, 4000);
//   });
// }

// let p1 = getData(123);
// p1.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

//? Promise chaining

function asyncFun1() {
  console.log("Fetching data 1");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}

function asyncFun2() {
  console.log("Fetching data 2");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 4000);
  });
}
function asyncFun3() {
  console.log("Fetching data 3");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 3");
      resolve("success");
    }, 4000);
  });
}
function asyncFun4() {
  console.log("Fetching data 4");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 4");
      resolve("success");
    }, 4000);
  });
}

// let p1 = asyncFun1();
// p1.then((data) => {
//   console.log(data);
// });

// let p2 = asyncFun2();
// p2.then((data) => {
//   console.log(data);
// });

// let p1 = asyncFun1();
// p1.then((data) => {
//   console.log(data);
//   let p2 = asyncFun2();
//   p2.then((data) => {
//     console.log(data);
//     let p3 = asyncFun3();
//     p3.then((data) => {
//       console.log(data);
//       let p4 = asyncFun4();
//       p4.then((data) => {
//         console.log(data);
//       });
//     });
//   });
// }).catch((err) => {
//   console.log(err);
// });

// ============ or ============
// asyncFun1()
//   .then((data) => {
//     console.log(data);
//     asyncFun2().then((data) => {
//       console.log(data);
//       asyncFun3().then((data) => {
//         console.log(data);
//         asyncFun4().then((data) => {
//           console.log(data);
//         });
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Apply this to callbacks:

function getData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data : ", userId);
      resolve("success");
    }, 4000);
  });
}

// getData(1)
//   .then(() => {
//     return getData(2);
//   })
//   .then(() => {
//     return getData(3);
//   })
//   .then(() => {
//     return getData(4);
//   })
//   .then(() => {
//     return getData(5);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//? async await:
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherDetails() {
  await api();
}

// getWeatherDetails();

// Will apply this in getData function:

function getData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("user : ", userId);
      resolve(200);
    }, 2000);
  });
}

async function printUsers() {
  await getData(1);
  await getData(2);
  await getData(3);
}

// printUsers();

//! IIFE: Immediately Invoked Function Expression
(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
})();

// We can only use IIFE function onece. If we want to use to multiple times we need to define multiple times.
