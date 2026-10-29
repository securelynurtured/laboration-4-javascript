"use strict";
// Uppgift 3: Skriver ut en ålderskategori. Av Henriette Heikki.

// Sparar en exempelålder för att testa villkoret.
const age = 15;

// Kontrollerar om personen är barn, vuxen eller pensionär.
if (age < 18) {
    console.log("Barn");
} else if (age < 65) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}
