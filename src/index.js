console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breeds = document.getElementsByClassName('breed');
const filter = document.getElementById('breed-dropdown');


filter.addEventListener("change", restoreAndFilter);

document.addEventListener("DOMContentLoaded", function() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
    fetchAllBreeds()
})

function renderImages(images) {
    const imageBank = document.getElementById("dog-image-container");
    for (const element of images.message) {
        const picture = document.createElement('img');
        picture.src = element; 
        picture.style.display = "block";
        picture.width = "200"
        picture.height = "200"
        imageBank.appendChild(picture); 
    }
}



function changeColor() {
    if (this.style.color === 'red') {
        this.style.color = 'black';
    } else {
        this.style.color = 'red';
    }
} 

function restoreAndFilter() {
    for (const element of breeds) {
        if (element.style.display === "none") {
            element.style.display = "list-item";
        }
    }
    filterOut();
}

function filterOut() { 
    let userInput = filter.value 
    for (const element of breeds) {
        let compareValue = element.innerText[0]; 
        if (compareValue !== userInput) {
            element.style.display = "none";
        }
    };
}

function fetchAllBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(breeds) {
    const breedList = document.getElementById("dog-breeds")
    for (const key in breeds.message) {
        const breed = document.createElement('li');
        breed.textContent = key; 
        breed.className = "breed";
        breed.addEventListener("click", changeColor);
        breedList.appendChild(breed); 
    }
}
