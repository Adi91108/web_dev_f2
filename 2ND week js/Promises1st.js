// class Prom {
//     constructor(executor){
//         let f1 = () => {
//             console.log("Inside f1")
//         }
//         let f2 = () => {
//             console.log("inside f2")
//         }
//         executor(f1, f2);
//         // f1 => resolve
//         // f2 => reject
//     }
// } 

// let executor = (a, b) => {// #300
//     // a = function(f1) , b = function(f2)
//     a();
//     b();
// }

// let p1 = new Prom(executor);

// let executor = (resolve, reject) => {
//     // reject();
// }

// let prom1 = new Promise(executor); 
// console.log(prom1);

// every Promise object/instance will have three states 
// i. Pending (intial state)
// ii. fullfilled(later stage)
// iii. rejected(later stage)
let executor = function(resolve, reject){
    console.log(typeof resolve , typeof reject);
    console.log("inside")
    resolve();
    reject();
}

let promise = new Promise(executor)
console.log(promise)
setTimeout(() => {
    console.log(promise)
},3000)

function successCallback() {
    console.log("Success")
}
function errorCallback() {
    console.log("failure")
}
function finallyCallback() {
    console.log("finally")
}
promise.then(successCallback)

promise.catch(errorCallback)

promise.finally(finallyCallback)