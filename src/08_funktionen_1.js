

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


ausgabeNamen2("Maria"); // ARGUMENT DATEN FÜR PARAMETER
ausgabeNamen2("Mary Jane"); 

function ausgabeNamen2(firstName) //PARAMETER
{

    console.log("Hallo, " + firstName +"!");  

}