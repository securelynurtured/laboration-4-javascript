"use strict";
// Uppgift 9: Hanterar personer med array, objekt, funktion och villkor. Av Henriette Heikki.

// Sparar tre exempelpersoner i en array av objekt.
const people = [
    { name: "Anna", age: 30, city: "Sundsvall" },
    { name: "Sofie", age: 45, city: "Hudiksvall" },
    { name: "Markus", age: 16, city: "Härnösand" }
];

// Tar emot en person och skriver ut bostadsort och om personen är myndig.
function printPersonInfo(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig.");
    }
}

// Testar funktionen med den första personen.
printPersonInfo(people[0]);
