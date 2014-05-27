Welcome to JS Fundamentals: Objects, Array and Functions

wifi: hackreactor
pw: awesomebullets

Teachers: Bianca and Monthy
Lead Mentors: Jeff and Spencer
TAs: Xian, Aaron, Drew

Bathrooms: past the kitchen on the left

=================================================

Setup 

1. Download Github Repo
2. Download Text Editor (sublime recommended)
3. Running a js file in your browser
4. Using the console





















LECTURE 1

//Warmup (5 mins)

//create an array named recipe and add the steps, in order to make your favorite
//food. Use different methods to do so.
=================================================


//data structures
=================================================
var simpleDataStructures = ['arrays', 'objects'];

// similarities
=================================================
0. Both Arrays and Objects are Objects // interesting
1. Both are what we call in computer sciences "associative arrays"
2. Which means they are just *a bucket that hold name-value pairs* // also called key-value
3. Each name-value pair is a property (property name and property value)


//what's the difference??
=================================================
0. Arrays are enclosed in brackets, Objects use curly braces
2. Objects are unordered and have named properties
3. Arrays are ordered with numbers
4. Arrays have a length property

//how to add values and indices to arrays
=================================================
var addValues = ['bracket-notation', 'bracket-notation with variable'];
var otherWaysToAdd =['dot-notation', 'native methods', 'lengthproperty'];

//how to access values and indices in an array
=================================================
var accessValues = ['bracket-notation', 'bracket-notation with variable'];
var otherWaysToAccess =['dot-notation', 'native methods', 'length property'];

//access the first step of your recipe using bracket notation. 
=================================================

//access the last step of your recipe use a variable. 
=================================================

//access the second to last step of your recipe.
=================================================


//how to add values to objects
=================================================
var addProperties = ['bracket-notation', 'dot-notation', 'bracket-notation with variable'];
var otherWaysToAddProperties = [];


LECTURE 2

What is property assignment?

//how to access values and properties to objects
=================================================
var accessProperties = ['loop'];
var accessValues = ['bracket-notation', 'dot-notation', 'bracket-notation with variable'];
var otherWaysToAccess = [];

//Failed property lookups always evaluate to the value undefined
=================================================
var myObj = { one: 1, two: 2, three: 3};
myObj['two'] => ??
myObj[one] => ?? //what does no quotes mean?

//You can't use dot notation with variables or special characters
=================================================
var myOtherObj = { loves : 'candy', likes: 'fries' }
var likes = 'loves';

myOtherObj['likes']; => ??
myOtherObj.likes => ??

What about weird symbols in property names?


//create an object called myCatInfo
//add some properties and values using bracket notation
=================================================

//now recreate myCatInfo using dot notation (do not copy/paste!)
=================================================

//some weird things
=================================================
Since arrays are objects...

Property + Index stringification with brackets

var obj = {
	x: 9,
	0: 'cat'
};

obj[('x').toString()] = 9;
obj[( 0 ).toString()] = 'cat';
log(obj[('x').toString()]);//logs 9
log(obj[( 0 ).toString()]);//logs 'cat'
for(var k in obj){
  log(k); // logs 'x', '0' 
}

//What is an object/array literal?
=================================================
var obj1 = {};
obj['x']       = 9;
obj['~/ [."4'] = 'cat';

var obj2 = {
    'x'        : 9,
    '~/ [."4'  : 'cat'
};

obj1 === obj2; => ??



LECTURE 3

//how to loop through arrays vs objects
=================================================
Arrays, use for loop with semi-colons

var arr = ['a','b','c','d'];

for (var i = 0; i < arr.length; i++){
  console.log(arr[i]); //why don't we need quotes??
}

Objects, use for in loop

var obj = {hello: 'goodbye', up : 'down', blue : 'red', 'weird-symbol': 'need quotes'}

for(var key in obj) {
  console.log(obj[key]); //why don't we need quotes??
}

//Since arrays are objects...
=================================================

The difference is that arrays have a few optimizations and conveniences 
that make them good for storing sequences of data in sequential integer keys.

var arr = [];


arr['x'] = 9;
arr[ 0 ] = 'cat';
log(arr['x']); // logs 9
log(arr[ 0 ]); // logs 'cat'
for(var k in arr){
  console.log(k); // logs 'x', '0' 
}
console.log(arr.length);    // logs ??

You might expect length to hold 2, since there's also a property at 
the key 'x'. But remember: non-integer keys do not count toward the length value.

You don't see the length property when looping over the array using a for-in loop because
JavaScript hides certain built-in properties away when it's clear that 
you won't want to visit them in for-in loops. Properties like length that have this 
behavior are said to be unenumerable.

//Let's search arr for 'c'
=================================================

//Let's search obj for the value 'red'
=================================================

//Let's search obj for the property 'hello'
=================================================


//"Loop through the array FAMOUS and console.log ONLY when it gets
//to ashton kutcher, and mila kunis";

var famous = ['alex smith', 'amy whinehouse', 
'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg',
'morgan freeman', 'mila kunis'];
=================================================


//"Loop through the object POLITICAL and console.log first the
//VALUE then the KEY";

var political = {secretary of state: 'hillary clinton',
 potus: 'barack obama', flotus: 'michelle obama', vice prez: 'joe biden'
 governerOfCalifornia: 'jerry brown'};
=================================================


//"Loop through the political object and add the values to the famous array"
=================================================


//"Take the array digits and place each value into an empty object where
//The object keys the digits and the values 
//of the object are digit * 2"

//example: 

var digits = [0, 1, 2, 3, 4, 5]
var newDigits = {} ======> {0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 10};
=================================================

//'Loop through the array scramble and through each iteration take out 
//the FIRST and LAST value, and store it into the lovepoem array. then
//turn the values in the lovepoem array into a string.'

var scramble: ['roses', 'red', 'are', 'bacon', 'crispy', 'i', 'you'
,'love', 'and', 'is', 'blue', 'violets', 'are']
var lovepoem = [];
=================================================




LECTURE 4

//native methods + constructor methods arrays
=================================================
The term "method" just means a function that interacts with an object, 
and is stored as a property of that object

var arrayMethods = ['push', 'pop', 'shift', 'unshift', 'join', 'slice', 'splice'];
var arrayConstructorMethods = ['Array.isArray()'];
FURTHER READING:
http://www.w3schools.com/jsref/jsref_obj_array.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//Now add another color that is not already in colors using a 
//native method (unshift/push)
=================================================


//how will the below evaluate
//&& means AND, more logical operators below
=================================================
Array.isArray(colors) && undefined ==> ???
Array.isArray(colors) && "undefined" ==> ???
Array.isArray(colors) && colors.pop(); => ??



//"Without using a loop, take the 2nd and 3rd array values out of 
//FRIENDS and push it to the array ENEMIES"

var friends = ['albrey', 'will', 'bianca', 'abe'];
var enemies = [];
=================================================


//"Join the array friends AND the array enemies into an string with 
//the variable name 'frenemies'" 
=================================================


//native methods + constructor methods objects
=================================================
var objectMethods = ['hasOwnProperty'];
var objectConstructorMethods = ['Object.keys()'];
FURTHER READING:
http://www.w3schools.com/jsref/jsref_obj_array.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

//Why would you use an object vs an array?
=================================================
1. order
2. fast look ups
3. 'length' property
4. key value pair (named categories)


=======
//Native methods (Primitive Types)

//Let's build an array with the members of Destiny's Child
=================================================
var destinysChild = ['Kelly Rowland', 'Michelle Williams', 'Beyonce Knowles'];

//Return the last item in a multi-item array and save it in a
//new variable called star
=================================================


//Now add Beyonces sister Solange to star using native methods
=================================================


//Now remove Beyonce using native methods so that Beyonce
//is returned and  Solange is the only value in star
=================================================


//Let's check if star and destinysChild are arrays using
//the native array method Array.isArray(obj);
=================================================




//control flow
=================================================
0. The above are examples of Straight Control Flow, where code
is executed predictably, from top to bottom
1. Next we wll cover conditional execution, where one of two
routes are executed according to a conditional statements
boolean value

//Let's loop through the destinysChild array to see who's still around
//Also, where's conditional statement and boolean in the function
=================================================


//Cool, now what if we do the same with the following object
=================================================
var singers = {
  female: 'Whitney Houston',
  male: 'Prince'
};

//Remember that while arrays have a length property,
//objects don't so you'll need to add a length property and
//update it if you want to loop with a traditional for loop
=================================================


//So that's fine but is far from ideal since we'll have to update
// singers['length'] manually, let's use a for in loop instead
=================================================


/*The Spy Society has decided that Austin has messed up one
too many operations. They will let you join the spyRing array if
and only if you can write a for loop that searches the spyRing
array for Austin and puts you in his place */
===================================================
var spyRing = ['James Bond', 'Inspector Clouseau', 'Austin Powers'];



//logical operators
=================================================
0. They perform boolean algebra, always evaluating to true or false
1. They always evaluate left to right
2. && most simply means 'and'
3. || is either/or
4. !() is negation

//some examples
=================================================
var o = {x: 1};
var p = null;

//How do the following evaluate
=================================================
 o && o.x => ???
 p && p.x => ???
 o && p => ???
 o || p => ???
 !(o) => ???
 !(p) => ???


//Search the array dogs for the name property, if it exists,
//log the dogs names, if not, log that no dogs were named
=================================================
var dogs = [
  {name: 'Henry',
  age: 2,
  breed: 'Aussie',
  food: 'kibble',
  toy: 'tennis ball'},
  {name: 'Tilly',
  age: 5,
  breed: 'Mutt',
  food: 'kibble',
  toy: 'bone'}
];


//Now let's say we want to create a function that 
//logs all of the values for Henry
====================================================


//That's cool and all but what good are the Values without
// their keys? Write a function that will log the key/value pairs
=================================================
