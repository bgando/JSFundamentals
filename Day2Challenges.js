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

 //Cool, so now that we've got an idea of how they work, lets
 //use em!
 //write a function named guessingGame that takes a number
 //as an argument and logs some encouraging works if they're close
 ================================================

//Create an array and populate it with four colors
=================================================


//Now add another color that is not already in colors using a 
//native method (unshift/push)
=================================================


//how will the below evaluate
=================================================
Array.isArray(colors) && undefined ==> ???
Array.isArray(colors) && "undefined" ==> ???
Array.isArray(colors) && colors.pop(); => ??




Assume you receive this nested data structure from a database for 
your new dating site:

var data = { results: [ 
  { animal: 'fox', 
    numberOfLegs: 4, 
    says: '??', 
    matches: 
      [ 'dog', 'cat', 'pig']
  },
  { animal: 'frog', 
    numberOfLegs: 4, 
    says: 'ribbit', 
    matches: 
      [ 'whale', 'cat', 'pig', 'rabbit']
  },
  { animal: 'dog', 
    numberOfLegs: 4, 
    says: 'woof', 
    matches: 
      [ 'dog', 'fish', 'pig']
  },
  { animal: 'human', 
    numberOfLegs: 2, 
    says: 'hello', 
    matches: 
      [ 'frog', 'duck', 'pig']
  },
  { animal: 'fish', 
    numberOfLegs: 0, 
    says: 'blub', 
    matches: 
      [ 'dog', 'rabbit', 'frog', 'human']
  },
  { animal: 'whale', 
    numberOfLegs: 0, 
    says: 'aaarrrhhh', 
    matches: 
      [ 'duck', 'fish', 'pig']
  },
  { animal: 'duck', 
    numberOfLegs: 2, 
    says: 'quack', 
    matches: 
      [ 'fish', 'human', 'chicken', 'whale']
  }
  ]};

  Use the .length property to console.log the length of the results
  array.

  Imagine you want are making a search results page,
  (console.log) all of the animal names in order.

  Next, Capitalize the first letter of each name and put a label
  Your end result should look like this:
  Name: Fox
  Name: Dog
  Name: Frog
  Name: Human
  Name: Fish
  etc.

  Next, console.log the number of legs next to their name.
  Your end result should look like this:
  Name: Fox, Legs: 4
  Name: Dog, Legs: 4
  Name: Frog, Legs: 4
  Name: Human, Legs: 2
  Name: Fish, Legs: 0

  Now, redo the steps in the previous one and 
  take this data and add it to an array with nested objects. 
  Your result should look like this:
  var results = [
  {Name: 'Fox', Legs: 4},
  {Name: 'Dog', Legs: 4},
  {Name: 'Frog', Legs: 4},
  {Name: 'Human', Legs: 2},
  {Name: 'Fish', Legs: 0}
  ];

  For another search result, console.log the animals whose matches are 'fish'

  Next, add it to an array called 'FishMatches'. 
  Make each match an object with two properties 'name' and 'index'
  Your end result should look like this:
  var fishMatches = [{name: 'dog', index: 2}, {name: 'whale', index:5}];
