

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  check!! / TODO!
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const prompt = require('prompt-sync')({sigint: true});

const ERROR_STR_DIV = "DIV durch 0 ist nicht möglich!";
const ERROR_STR_GEN = "Irgendwas ging schief!";

startApp();

function startApp()
{
	output(calculator(getNum1(),getNum2(),getOp()));	
}

function getNum1() 
{
	return	parseInt(prompt("Zahl 1: "));
}

function getNum2() 
{
	return parseInt(prompt("Zahl 2: "));
}

function getOp() 
{
	return prompt("OP?: ");
}
// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));


function calculator(a,b,op)
{
	switch (op) 
	{
		case "+":  		// ADD()
			return add(a,b);
		case "-":         //SUB()	
			return substract(a,b);
		case "*":			//mul()
			return multiply(a,b);
		case "/":			//div()
		case ":":			//div()
			return div(a,b);
		default: //ERROR
			return ERROR_STR_GEN;
	}
}

// module: divison a / b

// output(div(4,2));
// output(div(4,2));
// output(div(3,2));
// output(div(3,-2));
// output(div(0,2));
// output(div(0,0));

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
  