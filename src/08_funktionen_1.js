

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

//Funktionsaufruf call
//test();

// Funktionsrumpf / Funktionsdeklaration / callee
function test()
{
    console.log("Hallo, Peter!")
}
    
/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// CALL
//ausgabeNamen();

//FUNKTION
function ausgabeNamen() 
{

    // interne Variable
    let firstName = "Anja"
    console.log("Hallo, " + firstName +"!");  

}

//console.log(firstName); //FEHLER!!SCOPE

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN


// ausgabeNamen2("Maria"); // ARGUMENTE SIND DATEN FÜR PARAMETER
// ausgabeNamen2("Mary Jane"); 

function ausgabeNamen2(firstName) //PARAMETER
{

    console.log("Hallo, " + firstName +"!");  

}


/***** Funktionen 02c *****/
////MEHRERE PARAMETER/////


// ausgabeNamenParams("Max","Mütze");

// const prompt = require('prompt-sync')({sigint: true});

// ausgabeNamenParams(prompt ("Bitte Vornamen eingeben: "),prompt("Bitte Nachnamen eingeben: "));  //PIPING

function ausgabeNamenParams(firstName, familyName) //PARAMETER
{

    console.log("Hallo, " + firstName + " " + familyName + "!");  

}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

//ausgabeNamenSRP("max","mütze");

function ausgabeNamenSRP(firstName, familyName) //PARAMETER
{

    // 1. Funktionalität: string composing
const GAP = " ";
let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    // 2. Funktionalität: string output

    console.log(outputStr);  

}

/****FUNKTIONEN 03b*****/

// 1. Funktionalität: string composing

output(getString("max", "mütze"));

function getString(firstName, familyName)
    {
        const GAP = " ";
        let outputStr = "Hallo, " + firstName + GAP + familyName + "!"
        return outputStr; //return schickt die Daten an den call...
        console.log("Hi");
    }


// 2. Funktionalität: string output

// output("hi");
// output("2");
// output("true");

function output(outputData)
{
    console.log(outputData);
}