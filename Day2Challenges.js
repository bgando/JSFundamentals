1. "Loop through the array FAMOUS and console.log ONLY when it gets
to ashton kutcher, and mila kunis";

var famous = ['alex smith', 'amy whinehouse', 
'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg',
'morgan freeman', 'mila kunis'];

2. "Loop through the object POLITICAL and console.log first the
VALUE then the KEY";

var political = {secretary of state: 'hillary clinton',
 potus: 'barack obama', flotus: 'michelle obama', vice prez: 'joe biden'
 governerOfCalifornia: 'jerry brown'};

3. "Loop through the political object and add the values to the famous array"


4. "Take the array digits and place each value into an empty object where
The object keys will be the index numbers of DIGITS and the values 
of the object are the digit values * 2"

example: 

var digits = [0, 1, 2, 3, 4, 5]
var newDigits = {} ======> {0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 10};

5. "Without using a loop, take the 2nd and 3rd array values out of 
FRIENDS and push it to the array ENEMIES"

var friends = ['albrey', 'will', 'bianca', 'abe'];
var enemies = [];

6. "Join the array friends AND the array enemies into an string with 
the variable name 'frenemies'" 

7. 'Loop through the array scramble and through each iteration take out 
the FIRST and LAST value, and store it into the lovepoem array. then
turn the values in the lovepoem array into a string.'

var scramble: ['roses', 'red', 'are', 'bacon', 'crispy', 'i', 'you'
,'love', 'and', 'is', 'blue', 'violets', 'are']
var lovepoem = [];








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
