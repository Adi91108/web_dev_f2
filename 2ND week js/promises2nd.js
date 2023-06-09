let prom = new Promise((resolve, reject) => {
    console.log("before resolve")
    setTimeout(() => {
        resolve();
    },0)
    console.log("after resolve")
});
console.log(prom)
console.log("1")
prom.then(() => {
    console.log("3")
})
console.log("4")