import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let myValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', ' J' ,'Q', 'K'];
let suits = ['♦', '♥', '♠', '♣'];

let randomSuit = suits[Math.floor(Math.random() * 4)]
let randomValue = myValues[Math.floor(Math.random() * 12)]

let myTop = document.querySelector('#top');
let myValue = document.querySelector('#value');
let myBottom = document.querySelector('#bottom');

function randomizer () {
  if (randomSuit === '♥' || randomSuit === '♦') {
    myTop.style.color = 'red'
    myBottom.style.color = 'red'
    myTop.innerHTML = randomSuit
    myBottom.innerHTML = randomSuit
  }
  if (randomValue === '10') {
    myValue.style.top = '26%'
    myValue.style.left = '25%'
    myValue.innerHTML = randomValue
  }
  myTop.innerHTML = randomSuit
  myBottom.innerHTML = randomSuit
  myValue.innerHTML = randomValue
}

window.onload = randomizer();
