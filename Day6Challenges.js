write a function that takes two parameters, one, 'arr', is an array
and the second, 'x',  is the number. The function returns
the first 'x' indices of the array
firstIndex([1,2,3,4], 3) => [1,2,3]

write a function that returns the last elements of an 
array using the previous function (note: you cannot 
  use slice here!)

lastIndex([1,2,3,4], 3) => [4,3,2]

write a function that will merge the first object into
the second object. If the property already exists, on the second
object, do not overwrite it. 

rewrite the previous function using _.each

write a function that takes a nested array and returns
a one dimentional array.

rewrite the previous function using _.map

write a function that takes a random number(1-10) of randomly
generated num inputs (1-10). With those inputs, you add 
them all together and return the result.

randomAdder(1,4,7,2) => 14

generate the random numbers by using this function:
var generateNum = function(){
  return Math.floor(Math.random() * 11);
}

step 1: create an array of catNames:

var catNames = [];

step 2: use _.map to loop through the catnames and apply it
to the CatMaker function. This will return an array of cat objects


function CatMaker(name) {
    var owner = "me";
    return {
        speak: function () {
            console.log("Meow my name is " + name +" and my owner is" + owner);
        },
        changeOwner: function(newOwner){
          owner = newOwner;
        }
    };
}

step 3: use _.each to loop through all the cat objects 
and call the speak method.

re-write the makeStopWatch exercise from class yesterday
without looking (it will be difficult but it will not help you
  if you do not try for at least 20min to do it on your own. 
    Instead ask for help rather than peek.) 
Remember, you need to have a function called
stop watch that you can access outside of the parent function so
that you can check the number of seconds that have elapsed. 

now implement it using the module pattern (return an object with
a method called stopwatch that returns the elapsed time). Now, 
add another priveleged method that resets the timer and
another one that pauses the timer and one that restarts the 
timer after being paused.






