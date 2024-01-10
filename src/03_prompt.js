const prompt = require('prompt-sync')({sigint: true});

// Alles musss man selber machen lassen! ...
let firstName = prompt("Vorname?: ");
let familyName = prompt("Name?: ");
console.log("Hallo, " + firstName + " " + familyName +"!");