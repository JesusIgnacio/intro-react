const jeanBlue = { size : "XL", color : "Blue"}
const jeanRed = { size : "XL", color : "Red"}
const jeanYellow = { size : "XL", color : "Yellow"}



function myPromiseFunction() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(jeanBlue);
    }, 3000);
})};

function myPromiseFunctionTwo() {
  return new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(jeanRed);
  }, 3000);
});}

function myPromiseFunctionThree() {
  return new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(jeanYellow);
  }, 3000);
});}

async function ejecutar() {
  let result = await Promise.all([myPromiseFunction(), myPromiseFunctionTwo(), myPromiseFunctionThree()])
  console.log(result)
}
let result = await Promise.all([myPromiseFunction(), myPromiseFunctionTwo(), myPromiseFunctionThree()])
console.log(result)
console.log("Tuve que esperar lo anterior")