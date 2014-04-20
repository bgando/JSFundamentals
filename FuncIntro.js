www.github.com/bgando/JSFundamentals

var results = data.results;
var nameArr = [];
for(var i = 0; i < results.length; i++){
  var nameStr = results[i].animal;
  var firstLetter = nameStr[0];
  var theRest = nameStr.slice(1);
  var name = firstLetter.toUpperCase() + theRest;
  console.log('Name: ' + name);
  nameArr.push(name);


}

var data = { 
  results: [ 
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





//ternary operators
=================================================

var test = true;
//if test is true, log true, else log false
if(test === true) {
  console.log(true);
} else{
  console.log(false)
}

test ? console.log(true) : console.log(false);

//logic operators
=================================================
&& AND

var x = true;
var z = true;

x && z

|| OR 

var potatoes = false;
var tomatoes = true;

potatoes || tomatoes => true

! NOT

(cond1 || cond2) === !(!cond1 && !cond2)

(cond1 && cond2) === !(!cond1 || !cond2)


if(){
  console.log('whatever')
}

!!

//truthy + falsy
=================================================
JavaScript Falsy Values: 
null, false, 0, undefined, NaN, and “” 

(this last item is an empty string).
— Note that Infinity, which is a special 
number like NaN, is truthy; it is 
not falsy, while NaN is falsy.

JavaScript Truthy Values: 
Anything other than the falsy values.

// functions + logic operators
=================================================

function documentTitle(theTitle)
  theTitle  = theTitle || "Untitled Document";
  return theTitle;
}

var data = documentTitle();
data => "Untitled Document"

function isAdult(age) {
  if (age && age > 17) {
  return true;
}
else {
  return false;
  }
}
Use this:

function isAdult(age) {
   return age && age > 17 ;
}

if (userName) {
  logIn (userName);
}
 else {
   signUp ();
}
Use this:

userName && logIn(userName) || signUp();
