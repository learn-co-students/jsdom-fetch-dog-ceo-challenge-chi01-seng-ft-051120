/////////////////////Variables///////////////////////////
const imgContainer = document.getElementById("dog-image-container")
const nameContainer = document.getElementById("dog-breeds")
const filter = document.getElementById("breed-dropdown")

///////////////////////FETCH DOG IMAGE FUNCTIONS/////////////////

function fetchDogImgs(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(dogsImgData => addDogImgs(dogsImgData))
    .catch(err => console.log(err))
}

function addDogImgs (dogsImgData) {
  //debugger // up dogImgData// 
  const dogsImgArr = dogsImgData.message
  dogsImgArr.forEach(dogImg => addDogImg(dogImg))
}

function addDogImg (dogImg) {
  //debugger look up dogImg 
  const img = `<img src=${dogImg} alt="">`
  //debugger look up imgContainer
  imgContainer.innerHTML += img  
}

///////////////////////FETCH DOG NAME FUNCTIONS/////////////////

function fetchDogNames() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(resp => resp.json())
      .then(dogsNameData => addDogNames(dogsNameData))
      .catch(err => console.log(err))
}

function addDogNames(dogsNameData){
  // debugger // look up dogsNameData dogsNameData.message -- it's an object
  // can turn to array with Object.keys(dogsNameData.message)
  // set to variable
  const dogNameArr = Object.keys(dogsNameData.message)
  dogNameArr.forEach(dogName => addDogName(dogName))
}

function addDogName(dogName){
  // debugger // look up dogName
  const li = `<li>${dogName}</li>`
  nameContainer.innerHTML += li
}

///////////////CHANGE DOG NAME COLOR FUNCTIONS//////////
function changeNameColor() {
  // debugger with an eventListener you always have event so look that up
  // look up event.target.tagName
  if (event.target.tagName === "LI") {
    // debugger look up event.target.style.color = "green"
    event.target.style.color = "powderblue"
  }
}


///////////////////////////FILTER DOG NAMES FUNCTIONS/////////
function filterDogNames() {
  // debugger event.target.value
  // nameContainer nameContainer.children nameContainer.children.length
  const filterChoice = event.target.value
  const nameCollect = nameContainer.children //nameContainer is a ul with a bunch of li's 
  showAllNames(nameCollect)
  if (filterChoice !== "all"){
    hideDogNames(nameCollect, filterChoice)
  }
}

function hideDogNames(nameCollect, filterChoice) {
  for (let name of nameCollect){
    //debugger name.textContent event.target.value
    // name.textContent[0] === event.target.value
    const liChar = name.textContent[0] 
    if (liChar !== filterChoice) {
      //debugger liChar name.style.display = "none" to make it disappear 
      name.style.display = "none"
    }
  }
}

function showAllNames(nameCollect) {
  for (let name of nameCollect) {
    name.style.display = "list-item"
  }
}


///////////////EVENT LISTENERS////////////////
nameContainer.addEventListener("click", changeNameColor)
filter.addEventListener("change", filterDogNames)



///////////////INVOKED FUNCTIONS/////////////////
fetchDogImgs()
fetchDogNames()