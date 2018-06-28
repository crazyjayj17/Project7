document.addEventListener('DOMContentLoaded', () => {

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
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

function getRandomPhraseAsArray() {
  for(let i = 0; i < phrases.length; i += 1) {
   let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
   let splitString = randomPhrase.split("");
   console.log(splitString);
   return splitString;
 }
}
getRandomPhraseAsArray();

function addPhraseToDisplay() {
  
}
addPhraseToDisplay();








});
