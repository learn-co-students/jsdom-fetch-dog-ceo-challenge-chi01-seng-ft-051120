console.log('%c HI', 'color: firebrick')


// CHALLENGE 1 //
function challengeOne() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => displayPics(json['message']))


  function displayPics(dogs) {
    const dogId = document.getElementById("dog-image-container")
    dogs.forEach(dog => {
      dogId.innerHTML += `<img src = ${dog} width = "100" height = "100" />`
    })
  }
}

challengeOne()

// CHALLENGES 2, 3, & 4 //
function challengeTwo() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  let firstLetter = document.getElementById("breed-dropdown")
  

  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => showBreed(json['message']))

  function showBreed(breeds) {
    const list = document.getElementById("dog-breeds")
    for (const breed in breeds) {
      if (firstLetter.value === breed[0]) {
      list.innerHTML += `<li id='${breed}'>${breed}</li>`
        // if (breed[0] !== null) {
        //   let foundBreed = document.getElementById(`${breed}`)
          // const innerBreedList = foundBreed.appendChild("ul")
        //   breed.forEach(subBreed => {
        //     foundBreed.innerHTML += `<li>${subBreed}</li>`
        //   })
        // }
    }}
    setColor()

    firstLetter.addEventListener("change", () => {
      list.innerHTML = ""
      for (const breed in breeds) {
        if (firstLetter.value === breed[0]) {
        list.innerHTML += `<li id='${breed}'>${breed}</li>`
      }}
      setColor()
    })
  }
}

challengeTwo()


function setColor() {
  allBreeds = document.getElementsByTagName("li")
  for (const foundBreed of allBreeds){
    foundBreed.addEventListener('click', () => {
    foundBreed.style = "color: red"
    })
  }
}