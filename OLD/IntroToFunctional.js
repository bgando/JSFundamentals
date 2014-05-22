function splat(fun) {

 return function(array) {

  return fun.apply(null, array);

 };

}

var addArrayElements = splat(function(x, y) { return x + y });

addArrayElements([1, 2]);


.sort();

write a function

select('>2', [1,2,3,4])
that returns [3,4]

map(1, '+' , [2, 3])



var first = function(x) {
var z = "it's lonely on top"
console.log("in the first function y = ", y)
var second = function() {
      var y = "I'm down here!!"
    var third = function() {
      console.log("remember variable hoisting? y = ", y);
  var y = "I'm in this pretty deep.."
  console.log("What do you think y is down here? It is ", y);
}
}
}

function test(o) {
var i = 0;                              // i is defined throughout function
      if (typeof o == "object") {
            var j = 0;                       // j is defined everywhere, not just block
            for(var k=0; k < 10; k++) {    // k is defined everywhere, not just loop
                console.log(k);             // print numbers 0 through 9
            }
            console.log(k);                   // k is still defined: prints 10
      }
      console.log(j);                      // j is defined, but may not be initialized
} 
