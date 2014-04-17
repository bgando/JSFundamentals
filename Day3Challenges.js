//How will the following evaluate
===============================================================
false && true || true
false && (true || true)

//Some examples of logical operators in action
===============================================================
if (x > 5 && x < 10)
{
   // action to be performed if x is greater than 5
   // and less than 10
}

//And you might use these while setting up a website
===============================================================
function sayHi(name)
{
   name = name || 'stranger';
   alert('Hi there ' + name);
}

function isAdult(age) {
   return age && age > 17 ;
}



//Write a function that adds up all the numbers from 1 up to,
// but not including num
===============================================================


//Write a range function that takes a start and an end value
//and returns an array containing all number from start up to
//and including end
==============================================================


//Easy stuff right? How about making a function that takes
//two numbers, a base and exponent and returns the result
=============================================================


//Type conversions
==============================================================
1. Number('3');
2. String(false);
3. Boolean([]);
4. Object(3);

//change func so that it works with the for loop
//with semi colons
=================================================
var func = function(){};
for(var i = 0; i < func.length; i++){
  console.log(func[i]);
}
//change obj so that it works with the for loop
//with semi colons
=================================================
var obj = {};
for(var i = 0; i < func.length; i++){
  console.log(obj[i]);
}

//write a function that changes an object into an array of it's values
//input => {one: 1, two: 2, three: 3, four: 4} 
//output => [1,2,3,4]

//now write a function that takes an object and creates and array of it's 
//properties
//input => {one: 1, two: 2, three: 3, four: 4} 
//output => ['one','two', 'three', 'four']

//what is the difference between a side effect of a function and
//what a function returns?

//use a ternary operator