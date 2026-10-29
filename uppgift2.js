"use strict";
// Uppgift 2: Beräknar produktkostnad och moms. Av Henriette Heikki.

// Sparar priset per produkt i kronor och antalet produkter.
const price = 100;
const quantity = 7;

// Beräknar totalpriset för alla produkter före moms.
const totalPrice = price * quantity;

// Beräknar totalpriset inklusive 25 procent moms.
const totalPriceWithVat = totalPrice * 1.25;

// Skriver ut pris, antal och beräknade totalpriser med tydliga etiketter.
console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + totalPrice + " kr");
console.log("Totalt inklusive moms: " + totalPriceWithVat + " kr");
