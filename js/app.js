document.addEventListener('DOMContentLoaded', () => {

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseUl = document.querySelector('#phrase ul')
let missed = 0;
const overlay = document.getElementById('overlay');
const reset = document.getElementsByClassName('btn__reset')[0];
let phrases = ['A fish out of water',
               'Different kettle of fish',
               'Let sleeping dogs lie',
               'The apple of my eye',
               'The birds and the bees'];

reset.addEventListener('click', (event) => {
 if(overlay.style.display == 'none') {
  overlay.style.display = 'block';
 } else {
  overlay.style.display = 'none';
 }
});

function getRandomPhraseAsArray(arr) {
  for(let i = 0; i < arr.length; i += 1) {
   let randomPhrase = phrases[Math.floor(Math.random() * arr.length)];
   let splitString = randomPhrase.split("");
   console.log(splitString);
   return splitString;
 }
}
getRandomPhraseAsArray(phrases);

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
  for(let i = 0; i < arr.length; i += 1) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    phraseUl.appendChild(li);
    if(arr[i] == ' ') {
     li.className = 'space';
    } else {
     li.className = 'letter';
    }
  }
}
addPhraseToDisplay(phraseArray);

function checkLetter() {

}





});
