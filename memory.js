
"use strict";

class Card {
  constructor(card1, card2 = card1, set = card1, sound = card1) { 
   this.card1 = card1;
   this.card2 = card2;
   this.sound = sound;
   this.set = set;
  }
}




const myField = document.getElementById(`field`); //Koppel field uit HTML aan const myField
myField.addEventListener(`click`, onClickCard); //Wanneer myField wordt aangeklikt, registreer dit als 'click' event. 

let myCardArray = ["duck", "kitten", "piglet", "puppy", "calf", "veal", "lamb", "rooster", "horse", "mouse", "dog", "cat", "goose", "goat", "sheep", "pig", "cow", "chick", "hen"];
let doubleArray = myCardArray.concat(myCardArray);
myCardArray = doubleArray;
document.onload = myScrambledArray();
let clickedCard = false;

// Const veranderd in let zodat de array kon worden aangepast.:
//"Const veranderd in let" is voor arrays niet nodig. 
//De Const heeft alleen betrekking op de definitie, niet de inhoud van de array.

//const voor alle namen van de afbeeldingen.
const myCardSet = myCardArray.map(card => new Card(card)); 
document.onload = populateField(); //Laad deze functie bij openen van de pagina. Een functie moet worden aangeroepen.

function populateField() {
    myField.innerHTML = ``; // Koppel input uit functie myField aan HTML bestand.
   
    myCardSet.forEach (card => {  // haal uit const myCardSet elk element en wijs dat toe aan 'card'.
          let newTile = document.createElement(`div`); //maak variabele newTile die is gekoppeld aan nieuw 'div' element in html.
          let newCard = document.createElement(`img`); // Zelfde idee als bovenstaande maar dan een `img`. 
          newTile.setAttribute("class", "board6"); //Deze stond niet echt goed bescherven in de opdracht. maar: -->
          //Haalt de juiste specificaties uit de CSS om newTile vorm te geven.
          let imageURL = `img/` + card.card1 + `.jpg`;
		   //variabele imageURL maakt de juiste verwijzing naar de afbeeldingen + hun naam. 	
		      newCard.setAttribute('src', imageURL); //koppel newCard aan source imageURL
          newCard.setAttribute('naamDier', card.card1); //koppel newCard aan naam kaart en variabele card
          newTile.appendChild(newCard);//koppel newTile aan newCard zodat
          myField.appendChild(newTile); //koppel myField aan newTile    
  });
}

function onClickCard(e) { //Wanneer kaart in myField wordt aangeklikt
  console.log(e.target.getAttribute(`naamDier`)); //Toon naamDier
}

function myScrambledArray() {
  // Fisher Yates Shuffle sauce: https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2
	for (let i = myCardArray.length -1; i > 0; i--) {
	  let j = Math.floor(Math.random() * i)
	  let k = myCardArray[i]
	  myCardArray[i] = myCardArray[j]
	  myCardArray[j] = k
	}
}
