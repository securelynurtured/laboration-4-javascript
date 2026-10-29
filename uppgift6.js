"use strict";
// Uppgift 6: Beräknar arean av en rektangel. Av Henriette Heikki.

// Tar emot bredd och höjd och returnerar rektangelns area.
function calculateArea(width, height) {
    return width * height;
}

// Anropar funktionen och sparar resultatet.
const area = calculateArea(4, 5);

// Skriver ut den beräknade arean.
console.log("Arean är " + area);
