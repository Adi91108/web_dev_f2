let obj = {} ;
let x = undefined ; 
try{
    console.log('trying')
    console.log(obj.name.fullName)
    console.log("trying 2")
}
catch(error){
    console.log("new error")
}
try{
    console.log("one")
console.log(obj.name.fullName)
}
catch(error) {
    console.log('inside catch')
}


// async and await
async function callme() {
    console.log("0")
    let prom1 = new Promise((resolve ,reject) => {
        setTimeout(() => {
            resolve();
        },1000)
    })
    prom1.then(() => {
        console.log("0.5")
    })
    console.log("1")
    
    let prom2 = new Promise((resolve ,reject) => {
        setTimeout(() => {
            resolve();
        },2000)
    })
    prom2.then(() => {
        console.log("1.5")
    })
    console.log("2")
    
}
callme();