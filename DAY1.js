http://goo.gl/NUUFVU

wifi: hackreactor
pw: awesomebullets

PLEASE EAT THE SNACKS :)
































LECTURE 1
06:00 - 06:20

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


EXERCISES 1
06:20 - 06:40

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
06:00 - 06:20

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


//native methods + constructor methods arrays
=================================================
The term "method" just means a function that interacts with an object, 
and is stored as a property of that object

var arrayMethods = ['push', 'pop', 'shift', 'unshift', 'join', 'slice', 'splice'];
var arrayConstructorMethods = ['Array.isArray()'];
FURTHER READING:
http://www.w3schools.com/jsref/jsref_obj_array.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

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




