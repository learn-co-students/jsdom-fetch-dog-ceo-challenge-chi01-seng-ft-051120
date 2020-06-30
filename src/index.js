const imageContainer = document.getElementById("dog-image-container")
const nameContainer = document.getElementById("dog-breeds")
const filter = document.getElementById("breed-dropdown")

function fetchDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(dogsImageData => addDogImages(dogsImageData))
  .catch(err => console.log(err));
}

function addDogImages(dogsImageData) {
  const dogsImageArray = dogsImageData.message
  dogsImageArray.forEach( dogImage => addDogImage(dogImage));
}

function addDogImage(dogImage){
  const image = `<img src="${dogImage} alt="">`
  imageContainer.innerHTML += image
}
////////////////////////CHANGE DOG NAME COLOR/////////////////////
function changeNameColor() {
  if (event.target.tagName === 'LI') {
    event.target.style.color = "powderblue"
  }
}

///////////////////////FETCH DOG NAMES///////////////////
function fetchDogNames() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(dogsNameData => addDogNames(dogsNameData))
  .catch(err => console.log(err))
}

function addDogNames(dogsNameData) {
  const dogNameArray = Object.keys(dogsNameData.message)
  dogNameArray.forEach(dogName => addDogName(dogName))
}

function addDogName(dogName) {
  const li = `<li>${dogName}</li>`
  nameContainer.innerHTML += li
}

//////////////////////FILTER DOG NAMES////////////////////////////////
function filterDogNames() {
  const filterChoice = event.target.value
  const nameCollect = nameContainer.children
  showAllNames(nameCollect)
  if (filterChoice !== 'all') {
    hideDogNames(nameCollect, filterChoice)
  }
}

function hideDogNames(nameCollect, filterChoice) {
  for (let name of nameCollect) {
    const liChar = name.textContent[0]
    if (liChar !== filterChoice) {
      name.style.display = "none"
    }
  }
}

function showAllNames(nameCollect) {
  for (let name of nameCollect) {
    name.style.display = 'list-item'
  }
}


///////////////////////////////EVENT LISTENERS///////////////////////////
nameContainer.addEventListener('click', changeNameColor)
filter.addEventListener('change', filterDogNames)
//////////////////////////////////INVOKED FUNCTIONS////////////////////////
fetchDogImages();
fetchDogNames(); 