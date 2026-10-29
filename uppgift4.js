"use strict";
// Uppgift 4: Skriver ut jämna tal med loop och villkor. Av Henriette Heikki.

// Går igenom alla heltal från 1 till och med 20.
for (let number = 1; number <= 20; number++) {
    // Skriver bara ut tal som är delbara med 2 utan rest.
    if (number % 2 === 0) {
        console.log(number);
    }
}
