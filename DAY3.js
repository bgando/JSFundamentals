


//******************************
// Time and audience permitting
//******************************

funFunctions.intro = function() {
	var me = {
		name: 'Bianca Gondolfo',
		follow: '@BiancaGondolfo',
		info: [
			'HR Cohort 4',
			'Hacker in Residence Cohort 1',
			'Community Evangelist',
			'JS Engineer'
			]
		}

	var lostandFound = email('frontdesk@hackreactor.com'),
		wifi = {name: 'HackReactor', PW: 'awesomebullets'};

	if (YOU === NeedToPee && location === 'projector') {
		return 'Bathrooms are past the kitchen on the left';
	}
	else {
		return 'Bathrooms are past the staircase on the right';
	}

};

// Takeaways

funFunctions['takeaways'] = function(){
	return ['Scope:', 
				'what is function scope',
					'global', 'local', 'nesting' 
				'what is closure scope', //TODO: tomorrow
				'what is the module pattern', //TODO: tomorrow
			'Higher Order Functions',
				'what is a first class function',
				'how to pass functions to other ‘,
				functions to complete basic 
				programming problems'
			];
}

// Functions quick review

var add = function(a, b){
 	return a + b
};
add(3, 4, 5); // 7

// this function has 2 named parameters
// it is being called with 3 arguments
// The function body references 2 arguments by name
// The function does work on 2 arguments


// 'arguments' keyword

var add = function(a, b){
	console.log(arguments); //logs [3,4,5]!
 	return a + b
};
add(3, 4, 5); // 7


// Exercise: Take turns explaining to your partner the following:
//parameters, 
//arguments,
//the difference between being called with x arguments vs doing work on x arguments

// Function scope - Global

//1. not inside a function
var x = ‘global!’

//2. attached to the window object 
window.x = ‘also global!’

//3. defined without the word ‘var’
 x = ‘global here, too!’

//Exercise

//Declare a global variable attached to the global window object and assign it a value.

//Declare a global variable without using var and practice feeling really fearful about this. Quickly add a var before it is too late!

//Function Scope	- Local

var g = "global";

function go() { 
	var l = "local";
}
go();
alert(l); //out of scope! l is not defined


// Function Scope - hoisting

var scope = "global";
function f() {
    		console.log(scope);  			// Prints "undefined", not "global"
    		var scope = "local"; 			// Variable initialized here, but defined everywhere
    		console.log(scope);  			// Prints "local"
	}

function f() {
	var scope;          					// Local variable is declared at the top of the function
	console.log(scope); 				// It exists here, but still has "undefined" value
	scope = "local";   				// Now we initialize it and give it a value
	console.log(scope); 				// And here it has the value we expect
}

//Function Scope - Precedence
//If there are two variables of the same name within overlapping scope, the most local value overwrites any values from an outer scope. 


//Function Scope - exercise 2
var first = function(x) {
var z = “it’s lonely on top”;
console.log(“in the first function y = not declared.”);
var second = function() {
  		var y = “I’m down here!!”;
		console.log(‘y is a local variable to this child function. it equals,’ y);
		console.log(“z is an inherited variable from the parent scope. The child function can access it. They value is: ‘, z);
	};
second();
};

//Play with this in the console and explore nested local scopes!

//The first function is the parent function and cannot access y since it is inside the child function.

//The second function can access the variables and values from the parent function. That is why second can refer to z in the second console.log


//Function Scope - exercise 2 pt 2
var first = function(x) {
	var z = “it’s lonely on top”;
	console.log(“in the first function y = not declared”);
	var second = function() {
	  	var y = “I’m down here!!”;
		var third = function() {
			console.log(“remember variable hoisting? y = “, y);
			var y = “I’m in this pretty deep..”;
			console.log(“What do you think y is down here? It is “, y);
		};
		third();
	};
	second();
};

//Now we have added a third function the the equation.
//Which functions have access to which variables?
//Which functions can’t access other function’s locally scoped variables?
//Why are we calling the third(); and second(); functions where we do and not somewhere else?


//Function Scope vs Block Scope
function test(o) {								//JS has only Function Scope!! 
var i = 0;                      				// i is defined throughout function
    	if (typeof o == "object") {
        		var j = 0;                 		// j is defined everywhere, not just block
	        	for(var k=0; k < 10; k++) {		// k is defined everywhere, not just loop
	            	console.log(k);         	// print numbers 0 through 9
	        	}
	        	console.log(k);             	// k is still defined: prints 10
    	}
    	console.log(j);                			// j is defined, but may not be initialized
} 

//Lexical Scope
var f2 = function () {
    return n;
};

var f = function () {
    var n = 42;
    return f2;
}(); 

var result = f();
console.log(result())

//JavaScript is not dynamically scoped. This means that the scope is defined at run-time, based on the location of the text.

//Scope - chaining
function A(x) {
	function B(y) {
		function C(z) {
        	alert(x + y + z);
     	}
     	C(3);
   	}
  	B(2);
}
A(1); // alerts 6 (1 + 2 + 3)

//Closures - definition

//A closure happens when you nest a function inside another function. This creates a private function.

//The inside functions can then access the arguments and variables of outside, parent functions, but the parent functions cannot touch //inside the child function.

//Something really special happens when you return that function inside another function. Let’s take a look!

//Closure - Recipe
1. create your parent function 
ex. the checkscope function
2. define some variables in the parent’s local scope (this can be accessed by the child function)
ex. var scope = “local scope”
3. define a function inside the parent function. We call this a child.
	ex. the innerFunc function
4. return that function from inside the parent function
	ex. where it says ‘return innerFunc’


function checkscope() {
	var scope = "local scope";
	function innerFunc() {
		return scope;
	};
return innerFunc;
};



//Closure Scope - Execution
1. run parent function and save to a variable. This variable will hold whatever that function RETURNS
2. optional: check what that variable holds as its value. (Hint: it should be the inner function)
3. run the inner function.
4. what happens??
	
var scope = "global scope";
function checkscope() {
	var scope = "local scope";
	function innerFunc() {
		return scope;
	}
return innerFunc;
};
var test = checkscope();
test
test()


//Closure Scope - more examples
function outside(x) {
	var z = x + 1;
	console.log(z);
 	function inside(y) {
      		console.log(z + y);
		function moreInside(a) { console.log(‘new argument a: ’, a, ‘ previous argument y: ’, y, ‘ and the first two arguments z: ’, z, ‘ and x: ‘, x );}
		return moreInside();
  	 }
   return inside;
}

fn_inside = outside(3); 
result = fn_inside(5); // returns 9
result1 = outside(3)(5); // returns 9



//Closure Scope - Module Pattern
var Module = (function(){
var privateProperty = 'foo';	    
	function privateMethod(args){
		// do something
	}
	return {
publicProperty: "",
publicMethod: function(args){
			// do something
		},
		privilegedMethod: function(args){ privateMethod(args); }
	}
})(); 	//immediate invocation



//Closure Scope - more examples
var makeStopwatch = function(){
                        console.log('initialized');
				var elapsed   = 0;
                        console.log(elapsed);
				var stopwatch = function(){   console.log('stopwatch');
return elapsed; 
};
				var increase  = function(){ elapsed++; };
				setInterval(increase, 1000);
						return stopwatch;
					};
var x = makesStopwatch();


//A Closure exercise
Write a function that takes a number as it’s only argument, let’s name the parameter firstNum and includes one function inside. Have the inner function take one number as it’s argument, let’s name that one secondNum. Now in the inner function, add firstNum and secondNum. See closure recipe for step-by-step guidance!




//Closure Scope - more examples
function counter() {
	var n = 0;
	return {
		count: function() { return n++; },
		reset: function() { n = 0; }
	};
}
var c = counter(), d = counter(); c.count()
d.count()
c.reset()
c.count()
d.count()



//Closure Scope - more examples
//Closures have access to the outer function’s variable even after the outer function returns:
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName ("Michael");
mjName ("Jackson");


//Closure Scope - Private variables ex.
//Closures store references to the outer function’s variables, NOT THE VALUE
function celebrityID () {
    var celebrityID = 999;
    return {
        getID: function ()  {
          return celebrityID;
        },
        setID: function (theNewID)  {
            celebrityID = theNewID;
        }
    }
}
var mjID = celebrityID (); 
mjID.getID(); 
mjID.setID(567); 
mjID.getID(); 


//Closures gone wrong (extra credit)
//Because closures have access to the updated values of the outer function’s variables, they can also lead to bugs when the outer function’s variable changes with a for loop.
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    return theCelebrities;
}
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
var stalloneID = createIdForActionCelebs[0];  console.log(stalloneID.id()); //103

//Fixing closures (extra credit)
//To fix this side effect (bug) in closures, you can use an Immediately Invoked Function Expression (IIFE), such as the following:
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  {
            return function () {
                return uniqueID + j;
            } ()
        } (i);
    }
    return theCelebrities;
}

//Fixing closures (extra credit)
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
 console.log(stalloneID.id); // 100

var cruiseID = createIdForActionCelebs [1]; console.log(cruiseID.id); // 101

//Higher Order Functions as First-Class Objects
This means that you can pass functions as arguments to create callbacks or do other functional goodness

AND return functions from functions which creates closures. 

Exciting right??

//Higher Order Functions - example
	var increment = function(n){
		return n + 1;
	}
	var square = function(n){
		return n*n;
	}
	var doMath = function(n, func){
		return func(n);
	}

	doMath(5, square);
	doMath(4, increment)

//window.setTimeOut()
var fun = function(){
	function(x){ log(x);}(‘hi’);
}
setTimeout(function(){ fun(‘hi’); }, 1000);

//Callbacks - exercise
What if we wanted to write a function that calls a function twice?

It will have two named parameters, func for the function and arg for the argument that you will pass it. If you pass the alert function, and the string ‘hi’, you want the function to result in 2 alert pop ups with the word hi alert(‘hi’)

//Callbacks - exercise
What if we wanted to write a function that calls a function twice?

It will have two named parameters, func for the function and arg for the argument that you will pass it. If you pass the alert function, and the string ‘hi’, you want the function to result in 2 alert pop ups with the word hi alert(‘hi’)

//Call vs Apply

//Review Exercise 1
function splat(fun) {
   return function(array) {
      return fun.apply(null, array);
   };
}

var addArrayElements = splat(function(x, y) { return x + y });

addArrayElements([1, 2]);

//forEach

//Write filter
Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]

//re-write these functions
select('>2', [1,2,3,4])
returns [3,4]

map(1, '+' , [2, 3])
returns [3,4];

//Further Steps	
Want to TA one of these classes? Please e-mail me bianca@hackreactor.com

I recommend: (O’Reilly Press) Functional JavaScript 
Eloquent JS Ch. 6 (functional programming part)





