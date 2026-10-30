"use strict";
// Uppgift 9: Hanterar personer med array, objekt, funktion och villkor. Av Henriette Heikki.

// Sparar tre exempelpersoner i en array av objekt.
const people = [
    { name: "Anna", age: 30, city: "Sundsvall" },
    { name: "Sofie", age: 45, city: "Hudiksvall" },
    { name: "Markus", age: 16, city: "Härnösand" }
];

// Kontrollerar att vi kan läsa den första personens namn och stad.
console.log(people[0].name + " bor i " + people[0].city + ".");
