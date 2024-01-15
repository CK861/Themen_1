

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "DIV durch 0 ist nicht möglich!"

// module: divison a / b

// output(div(4,2));
// output(div(4,2));
// output(div(3,2));
// output(div(3,-2));
// output(div(0,2));
 output(div(0,0));

function div(a,b)
{
	if (b == 0) 
	{
		return ERROR_STR_DIV;	// Ausnahme
	}

	if (b !== 0) // b ungleich 0
	{
		return a / b;   // Reguläres Verhalten
	}
	// else 
	// {
	// 	return ERROR_STR_DIV;     // Ausnahme
	// }	
}


// module: multiplikation a * b

// output(multiply(3,2));

function multiply(a,b)
{
	return a * b;	
}

// module: substraction a - b / test:

// output(substract(4,3));

function substract(a,b)
{
	return a - b;	
}


// module: addition a + b / test:

// output(add(2,2));

function add(a,b) 
{
	return a + b;
}


// module: output | test:
// output("hello");
// output(2);
function output(outputData) 
{
	console.log(outputData);
}
  