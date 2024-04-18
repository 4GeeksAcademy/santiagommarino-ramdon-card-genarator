/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pickSuit = () => {
  let suits = ["♥", "♦", "♠", "♣"];
  let randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
};

let pickCardNumber = () => {
  let cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomIndex = Math.floor(Math.random() * cardNumbers.length);
  return cardNumbers[randomIndex];
};
let generateDisplayCard = () => {
  let suit = pickSuit();
  let cardNumber = pickCardNumber();
  let topIcon = document.querySelector(".top-icon");
  let bottomIcon = document.querySelector(".bottom-icon");
  let cardContent = document.querySelector(".card-content p");

  topIcon.className = "top-icon";
  bottomIcon.className = "bottom-icon";

  if (suit === "♥" || suit === "♦") {
    topIcon.classList.add("red-suit");
    bottomIcon.classList.add("red-suit");
  }

  topIcon.innerHTML = suit;
  bottomIcon.innerHTML = suit;
  cardContent.innerHTML = `<strong>${cardNumber}</strong>`;
};
window.onload = function() {
  generateDisplayCard();
  document
    .getElementById("generateCard")
    .addEventListener("click", generateDisplayCard);
};
