var each = function(arr, func){ 
  for(var i = 0; i < arr.length; i++){
    func(arr[i], i, arr);
  }
}

var log = function(val, i){console.log(val, i)}

each([1,2,3,4], log);


var filter = function(arr, test){
    results = [];
    _.each(arr, function(val){
      if(test(val)) {
        results.push(val);
      }
    })
    return results; 
}


[1,0,[1,2,3,4]]
[2,1,[1,2,3,4]]
[3,2,[1,2,3,4]]



var isEven = function(num){
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}



filter([2,3,4,5,16], isEven)





var makeStopwatch = function(){
  var elapsed, stopwatch, increase;

  console.log('initialized');
  elapsed = 0;
  console.log(elapsed);
  stopwatch = function(){   
    console.log('stopwatch');
    return elapsed;
  };
  increase  = function(){ 
    elapsed++; 
  };

  setInterval(increase, 1000);
  return stopwatch;
};

var x = makesStopwatch();




