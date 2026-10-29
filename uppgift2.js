"use strict";
// Uppgift 2: Beräknar produktkostnad och moms. Av Henriette Heikki.

// Sparar priset per produkt i kronor och antalet produkter.
const price = 100;
const quantity = 7;

// Beräknar totalpriset för alla produkter före moms.
const totalPrice = price * quantity;

// Skriver ut pris och antal med tydliga etiketter.
console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + totalPrice + " kr");
