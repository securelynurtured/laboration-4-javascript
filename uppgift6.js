"use strict";
// Uppgift 6: Beräknar arean av en rektangel. Av Henriette Heikki.

// Tar emot bredd och höjd och returnerar rektangelns area.
function calculateArea(width, height) {
    return width * height;
}

// Anropar funktionen med tre olika par av mått och sparar resultaten.
const area = calculateArea(6, 7);
const secondArea = calculateArea(4, 5);
const thirdArea = calculateArea(10, 3);

// Skriver ut de beräknade areorna.
console.log("Arean är " + area);
console.log("Arean är " + secondArea);
console.log("Arean är " + thirdArea);
