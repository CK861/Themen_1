const prompt = require('prompt-sync')({sigint: true});
const ERROR_STR_GEN = "Irgendwas ging schief!";
const ERROR_STR_DIV = "DIV durch 0 ist nicht möglich!";

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

}


    function multiply(a,b)
{
	return a * b;	
}


function substract(a,b)
{
	return a - b;	
}

function add(a,b) 
{
	return a + b;
}

function output(outputData) 
{
	console.log("Das Ergebnis lautet: " + outputData);
}
  