 let prom = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve({name : "aditya", age : 22})
    },4000)
 })

 let successCallback = (data) => {
    console.log(data)
 }
 let x = prom.then((data) => {
     console.log(data)
    })
    x.then(() => {
        console.log("success 2")
    })

    let pincode = 464221;
    console.log("before api call")
    let response = fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    console.log(response)
    console.log("after api call")
    response.then((data) => {
        console.log(data)
        console.log("loaded data")

        let prom = data.json();
        
        prom.then((data) => {
            console.log(data)
            appendOntoWebpage(data[0].PostOffice);
        })

        prom.catch((error) => {
            console.log(error)
        })

    })

    response.catch((data) => {
        console.log(info)
        console.log("went wrong")
    })
    const placesContainer = document.getElementById("places");

    function appendOntoWebpage(arr) {
        for(let j = 0 , j < arr.length, j++){
            let div = document.createElement("div");
            div.innerText = arr[j].Name;
            placesContainer.append(div);
        }
    }
    










