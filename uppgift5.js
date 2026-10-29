"use strict";
// Uppgift 5: Lagrar och ändrar en lista med maträtter. Av Henriette Heikki.

// Sparar fem maträtter i en array.
const dishes = ["Lasagne", "Tacos", "Sushi", "Pizza", "Ärtsoppa"];
// Skriver ut hela listan med maträtter.
console.log(dishes);

// Skriver ut den första och den sista maträtten i listan.
console.log("Första maträtten: " + dishes[0]);
console.log("Sista maträtten: " + dishes[dishes.length - 1]);

// Lägger till en ny maträtt sist i listan.
dishes.push("Köttbullar");

// Tar bort den första maträtten i listan.
dishes.shift();

// Skriver ut listan efter ändringarna.
console.log("Maträtter efter ändringarna:");
console.log(dishes);
