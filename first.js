const myObject = {
    a: 1,
    b: 2,
    c: 3
};
const mobile = {
    brand: 'apple',
    charge: 50
}

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
}

// for (const prop in myObject) {
//     console.log(myObject[prop]);
// }

// for (const prop in mobile) {
//     console.log(prop);
// }