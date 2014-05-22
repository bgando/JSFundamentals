Recursion: 

Recursion is like a while loop for functions.

- CONVERTING LOOPS INTO RECURSIVE FUNCTIONS:


while (condition)
{
	//do this
}
// while loop:
function albrey(x) { // 1. argument
		
		while (x > 0) { // 2. base/terminating case 
		console.log(x) // 3. action
		x = x - 1 // 4. incrementer
		}

}


function albrey2(x) {
	if (x <= 0) { // 1. terminating case 
		return;
	} else {
		console.log(x) // 2. action
		return albrey2(x - 1); // 3. incrementer 
	}
}


RECURSIVE FUNCTIONS NEED 3 THINGS:

INPUT: input argument, where you start. 

TERMINATING CASE: the if statement. You need to know when to stop, and what
to return when you finally do.

INCREMENTER: the path between your base case and your terminating case.
STEPS include your base case and an action that brings it closer
to your terminating case.

1. Write a function 'addition' that takes an argument and uses
a while loop to adds up all the integers between 0 and the argument.

// 1. terminating case is num equals zero;
// 2. action: adding each positive integer to a total
// 3. incrementer is going to subtract by 1

2. Change your while loop into a recursive function.

function addition(num) {
	var total = 0;
	while (num > 0) { // base case!!!!!
		total += num	// action	
		num--; // incrementer 
	}

	return total;
}

function recursiveAddition(num) { 
	if (num <= 0) { // terminating case
		return num;
	} else {
		return num + recursiveAddition(num - 1); //decrementer
	}
}

function recursiveAdditionStack(num) {
	var stack = [];
	function addition(num) {
		if (num <= 0) {
			return stack;
		} else {
			stack[num - 1] = num;
			return addition(num - 1);
		}
	}

	return addition(num);
}

3. Write a function 'exponent' that takes two arguments
base, and expo, uses a while loop to return the exponenet value
of the base.

4. Write a function 'RecursiveExponent' that takes two arguments
base, and expo, recursively returns exponent value
of the base.

Write a function 'recursiveMultiplier' that takes
two arguments, 'arr and num', and multiplies
each arr value into by num and returns 
an array of the values.

/* hint use closure */

Write a function 'recursiveReverse' that takes an array
and uses recursion to return its contents in reverse

/* hint use closure */




