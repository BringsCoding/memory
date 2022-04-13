//Array mit Allen karten x2
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },

  {
    name: "ice-crema",
    img: "images/ice-cream.png",
  },

  {
    name: "milshake",
    img: "images/milkshake.png",
  },

  {
    name: "pizza",
    img: "images/pizza.png",
  },
  //Zweite Rheihe
  {
    name: "fries",
    img: "images/fries.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },

  {
    name: "ice-crema",
    img: "images/ice-cream.png",
  },

  {
    name: "milshake",
    img: "images/milkshake.png",
  },

  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

//Array mixen
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

//Neues Leeres Array
let cardChosen = [];
//Neues Leeres Array für Bilder
let cardChosenIds = [];
//Array für gewinne
const cardsWon = [];

//erstllen der Spielfläche
function creatBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
creatBoard();

//Was passiert wenn wir Zwei gleiche bilder haben, bzw wenn wir nicht zwei gleiche Bilder haben
function checkMatch() {
  const cardsImg = document.querySelectorAll("img");

  const optionsOneId = cardChosenIds[0];
  const optionsTwoId = cardChosenIds[1];

  if (optionsOneId === optionsTwoId) {
    cardsImg[optionsOneId].setAttribute("src", "images/blank.png");
    cardsImg[optionsTwoId].setAttribute("src", "images/blank.png");
    alert("Du hast auf das Gleiche Bild geklick");
  } else if (cardChosen[0] === cardChosen[1]) {
    cardsImg[optionsOneId].setAttribute("src", "images/white.png");
    cardsImg[optionsTwoId].setAttribute("src", "images/white.png");

    cardsImg[optionsOneId].removeEventListener("click", flipCard);
    cardsImg[optionsTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardChosen);

    alert("Es sind zwei elemente");
  } else {
    cardsImg[optionsOneId].setAttribute("src", "images/blank.png");
    cardsImg[optionsTwoId].setAttribute("src", "images/blank.png");
    alert("Versuche es Nocheinmal");
  }
  cardChosen = [];
  cardChosenIds = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Glückwunsch, du hast gewonnen";
  }
  console.log(cardArray.length);
}

function flipCard() {
  const cardId = this.getAttribute("data-id");

  cardChosen.push(cardArray[cardId].name); //// Name der Bilder werden ausgelesen und gepusht
  cardChosenIds.push(cardId); //Id wird in CardsChosen gepusht

  console.log(cardChosen);
  console.log(cardChosenIds);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
