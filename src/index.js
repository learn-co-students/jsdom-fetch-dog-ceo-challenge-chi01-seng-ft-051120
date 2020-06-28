const imgContainer = document.getElementById("dog-image-container");
const breedsContainer = document.getElementById("dog-breeds");
const breedFilter = document.getElementById("breed-dropdown");

// DOG BREEDS FUNCTIONS
function fetchDogBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((dogsBreedData) => addDogsBreeds(dogsBreedData));
}

function addDogsBreeds(dogsBreedData) {
  const dogsBreedsArr = Object.keys(dogsBreedData.message);
  dogsBreedsArr.forEach((dogBreed) => addDogBreed(dogBreed));
}

function addDogBreed(dogBreed) {
  breedsContainer.innerHTML += `
    <li>${dogBreed}</li>
  `;
}

// CHANGE DOG COLOR NAME FUNCTIONS
function changeNameColor() {
  if (event.target.nodeName == "LI") {
    event.target.style.color = "green";
  }
}

// FILTER DOG BREEDS
function filterDogs() {
  const charSelection = event.target.value;
  const allDogs = breedsContainer.children;
  for (let dog of allDogs) {
    if (dog.innerText[0] !== charSelection) {
      dog.style.display = "none";
    } else {
      dog.style.display = "list-item";
    }
  }
}

// LISTENERS
breedsContainer.addEventListener("click", changeNameColor);
breedFilter.addEventListener("change", filterDogs);

// DOG IMAGES FUNCTIONS
function fetchDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((dogsImgData) => addDogsImages(dogsImgData));
}

function addDogsImages(dogsImgData) {
  const dogsImgArr = dogsImgData.message;
  dogsImgArr.forEach((dogImg) => addDogImage(dogImg));
}

function addDogImage(dogImage) {
  imgContainer.innerHTML += `
    <img src= ${dogImage} width=200px height=200px/>
  `;
}

// INVOKED FUNCTIONS
fetchDogImages();
fetchDogBreeds();
