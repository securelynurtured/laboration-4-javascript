"use strict";
// Uppgift 8: Lagrar och skriver ut bokinformation. Av Henriette Heikki.

// Samlar information om en bok i ett objekt.
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationYear: 1937
};

// Tar emot ett bokobjekt och skriver ut dess information.
function printBookInfo(bookInfo) {
    console.log("Titel: " + bookInfo.title);
    console.log("Författare: " + bookInfo.author);
    console.log("Utgivningsår: " + bookInfo.publicationYear);
}

// Anropar funktionen med vår bok som argument.
printBookInfo(book);
