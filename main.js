// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let like = document.querySelector('.like-glyph')

like.addEventListener('click', liker)

function liker () {
  mimicServerCall()
  .then(resp => {
    if (like.textContent===EMPTY_HEART){
      like.classList.add('activated-heart')
      like.textContent = FULL_HEART
    }else{
      like.classList.remove('activated-heart')
      like.textContent=EMPTY_HEART
    }
  })
  .catch((err) =>{
    let error = document.getElementById('modal')
    return error.classList.remove("hidden")
  })
} 




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
