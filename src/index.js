/// Variables ///
const imgContainer = document.getElementById("dog-image-container")
const nameContainer = document.getElementById("dog-breeds")
const filter = document.getElementById("breed-dropdown")


///img fetch functions///

function fetchDogImg(){

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(dogImgData => addDogImgs(dogImgData))
        .catch(err => console.log(err))
}

function addDogImgs(dogImgData){
    const dogImgArr = dogImgData.message
    dogImgArr.forEach( dogImg => addDogImg(dogImg) )
}

function addDogImg(dogImg){
    const img = `<img style="padding: 0 25px" height="275" width="300" src=${dogImg} alt="">`
    imgContainer.innerHTML += img
}


/// dog fetch name ///

function fetchDogNames(){
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(dogsNameData => addDogNames(dogsNameData))
        .catch(err => console.log(err))
}

function addDogNames(dogsNameData){
    const dogNameArr = Object.keys(dogsNameData.message)
    dogNameArr.forEach( dogName => addDogName(dogName))
}

function addDogName(dogName){
    const li = `<li>${dogName}</li>`
    nameContainer.innerHTML += li
}

/// change dog name color functions 

function changeNameColor(){
    if (event.target.tagName === "LI"){
        event.target.style.color = "red"
    } 
}

/// Filter dog names function ///

function filterDogNames(){
    const filterChoice = event.target.value
    const nameCollect = nameContainer.children
    showAllNames(nameCollect)
    
    for (let name of nameCollect){
        const liChar = name.textContent[0]
        if (liChar !== filterChoice ){
            name.style.display = "none"
        }
    }
}

function showAllNames(nameCollect){
    for (let name of nameCollect){
        name.style.display = "list-item"
        
    }

}

/// Event Listeners ///

nameContainer.addEventListener("click", changeNameColor)
filter.addEventListener("change", filterDogNames)

/// Invoked functions ///
fetchDogImg()
fetchDogNames()