'use strict';


/* 

Code die ik bijvoorbeeld wil toevoegen (die ik uiteraard nog aanpas).
   if (card === card) {
      message = 'You\'ve got a match'
      tries += 1;
      matches += 1;
    } else if (card !== card) {
      message = 'Let\'s try again!'
      tries += 1;
    } else if (myCardSet.lenght === myCardArrray.lenght){
      message = 'You\'ve won the match!'; 
    }
    console.log(message, + ',' + tries: ' + tries + ',' +  'matches: ' + matches);

    function flippedCards() {
      //functie die telt hoeveel kaarten zijn omgedraaid, 
      // wanneer meer dan 2 kaarten gedraaid werkt de klikfunctie niet meer.
      }
    }
*/ 
 


//Maak kaarten en ken ze waarden toe.
class Card {
  constructor(cardObject) {
    this.card1 = cardObject.card1;
    this.card2 = cardObject.card2;
    this.sound = cardObject.sound;
    this.set = cardObject.set;
  }
}

//haal variabelen uit JSON bestand
fetch('js/cards.json')  //Fetch Json File
  .then(response => response.json())
  .then(data => {
    myCardArray = data.map(card => new Card(card));
    //map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. 
  //voor elke variabale(card) uit mycardArray, maak voor elke card een nieuwe card aan in de class Card. 
    console.log(myCardArray);
  })

// Losse variabelen en koppelingen met html
const myField = document.getElementById('field'); //Koppel field uit HTML aan const myField
const mySelect = document.getElementById('field-size');
myField.addEventListener('click', onClickCard); //Wanneer myField wordt aangeklikt, registreer dit als 'click' event. 
mySelect.addEventListener('change', onSelectFieldSize); //Verander size speelveld
let myCardArray = ['duck', 'kitten', 'piglet', 'puppy', 'calf', 'veal', 'lamb', 'rooster', 'horse', 'mouse', 'dog', 'cat', 'goose', 'goat', 'sheep', 'pig', 'cow', 'chick', 'hen'];
let boardClass;//declare boardClass voor later
let myCardSet;//declare myCardSet voor later


//Kies maat speelveld
function onSelectFieldSize(e) {
  let fieldSize = e.target.value; //Fieldsize is waarde van geselecteerde variabele
  let boardsize = document.getElementById('boardsize'); //Laad boardsize uit HTML
  let myCardSet = myScrambledArray(myCardArray); //myCardSet is geshuffelede myCardArray 

  switch (fieldSize) {
    case '4':
      boardClass = 'board4'; //Als keuze is board 4
      myCardSet = myCardArray.slice(0,8); //selecteer 8 kaartjes uit myCardArray 
      break;
    case '5':
      boardClass = 'board5';
    myCardSet = myCardArray.slice(0,12);
      break;
    case '6':
      boardClass = 'board6';
    myCardSet = myCardArray.slice(0,18);
      break;
  }

  // Hier zorgen dat de boel verdubbeld. 
  console.log('myCardSet is ' + myCardSet.length)

  myCardSet = myCardSet.concat(myCardSet); //myCardSet = mysizeCardArray + mySizeCardArray;
  console.log('myCardSet.concat is ' + myCardSet.length)
  myScrambledArray(myCardSet);
  populateField(myCardSet); //Activeer functie populateField;
  boardsize = myCardSet;
  console.log(boardsize);
}


//Voeg kaarten toe aan veld functie
function populateField(myCardSet) {
  myField.innerHTML = ''; // Koppel input uit functie myField aan HTML bestand.'
  let message;
  let tries = 0;
  let matches = 0;

  myCardSet.forEach(card => {  // haal uit const myCardSet elk element en wijs dat toe aan 'card'.
    let newTile = document.createElement('div'); //maak variabele newTile die is gekoppeld aan nieuw 'div' element in html.
    let newCard = document.createElement('img'); // zelfde maaar dan met 'img' 
    let newCoverCard = document.createElement('img'); //zelfde maar dan voor Covercard
    newTile.setAttribute('class', boardClass); //Deze stond niet echt goed bescherven in de opdracht. maar: -->
    //Haalt de juiste specificaties uit de CSS om newTile vorm te geven.
    let imageURL = 'img/' + card.card1 + '.jpg'; //ken elke afbeelding uit folder img toe aan imageURL.
    newCard.setAttribute('src', imageURL); //elke afbeelding uit imageURL vormt een nieuwe card
    newCoverCard.setAttribute('src', 'img/cover.png') //haal afbeelding cover.jpg uit de src(folder) img.
    newCoverCard.setAttribute('class', 'covered') //ken aan newcovercard de class covered toe, die weer in CSS gedefinieerd wordt. 
    newCard.setAttribute('naamDier', card.card1); //koppel newCard aan naam kaart en variabele card
    newTile.appendChild(newCard); //maak newCard kind van newTile
    newTile.appendChild(newCoverCard);//maak newCoverCard kind van newTile
    myField.appendChild(newTile); //maak newTile kind van myfield.
  });
}

//Draai kaart om wanneer er op geklikt wordt. 
function onClickCard(e) { //Wanneer kaart in myField wordt aangeklikt:
  if (e.target.className === 'covered') { //wanneer target class covered heeft:
    e.target.className = 'uncovered'; //verander naam class in uncovered (waardoor als het goed is de afbeelding van het dier verschijnt).

    console.log(e.target.parentNode.firstChild.getAttribute('naamDier')); //In console toon welke kaart wordt aangeklikt.
 
  }
}

// shuffle functie
function myScrambledArray(myCardSet, myCardArray) {
let x;
  if (myCardArray || myCardSet) {
    x = myCardArray || myCardSet;
    // Fisher Yates Shuffle sauce: https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2
      for (let i = x.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = x[i]
        x[i] = x[j]
      x[j] = k
      }

      //Met || kon code korter. 

  /*} else if (myCardSet) {
    console.log('myCardSet' + myCardSet)
    x = myCardSet;
    for (let i = x.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = x[i]
      x[i] = x[j]
    x[j] = k
    }*/
  }
  return myCardSet;
}

