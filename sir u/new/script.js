const searchInput = document.getElementById("search-vedio");
const apiKey = "AIzaSyAtrBK-iWqX2oQe9EPAl_-i4MPKNPewO9M"

function searchVideos() {
    let searchValue = searchInput.value;
    fetchVideos(searchValue);
}

async function fetchVideos(searchValue) {
    let endpoint = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&
    q= ${searchValue} &key= ${apiKey}`

    try{
        let response = await fetch(endpoint);

        let result = await response.json();
        showThumbnails(result.items)
        console.log(result)
    }
    catch(error){
        alert("something wrong")
    }
    
}
function showThumbnails(items) {
    for(let i = 0 ; i < items.length ; i++){
        let vedioItems = items[i];
        let imageUrl = vedioItems.snippet.thumbnails.high.url;
        let imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.height = 200;
        imageElement.width = 200;
        document.body.append(imageElement);
    }
    }