"use strict";
// Uppgift 7: Beräknar summan av talen i en array. Av Henriette Heikki.

// Sparar sju tal som ska summeras.
const numbers = [2, 4, 6, 8, 10, 12, 14];

// Tar emot en array och returnerar summan av dess tal.
function calculateSum(values) {
    // Börjar med en tom summa.
    let sum = 0;

    // Lägger till ett tal i taget i summan.
    for (let index = 0; index < values.length; index++) {
        sum = sum + values[index];
    }

    // Skickar tillbaka summan när loopen är klar.
    return sum;
}

// Anropar funktionen med talarrayen och skriver ut resultatet.
const total = calculateSum(numbers);
console.log("Summan är " + total);
