// const dogImage = document.getElementById("dog-image")

// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => retrieveImage(data));
  
// function retrieveImage(data){
//     dogImage.innerHTML = `<img src="${data.message}">`
// }
const ideaBtn = document.getElementById("idea-btn")
const resultBox = document.getElementById("result-box")

ideaBtn.addEventListener("click", function(){
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => resultBox.innerHTML = `${data.activity}`)
})

