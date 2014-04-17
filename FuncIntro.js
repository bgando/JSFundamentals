//ternary operators
=================================================
var test = true;
//if test is true, log true, else log false
test ? console.log(true) : console.log(false);
//logic operators
=================================================
&&

||

!!

!


cond1 || cond2 === !(!cond1 && !cond2)
cond1 && cond2 === !(!cond1 || !cond2)


//truthy + falsy
=================================================
JavaScript Falsy Values: 
null, false, 0 undefined, NaN, and “” (this last item is an empty string).
— Note that Infinity, which is a special number like NaN, is truthy; it is 
not falsy, while NaN is falsy.
JavaScript Truthy Values: Anything other than the falsy values.
// functions + logic operators
=================================================

function documentTitle(theTitle)
  theTitle  = theTitle || "Untitled Document";
}

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

userName && logIn (userName) || signUp ();