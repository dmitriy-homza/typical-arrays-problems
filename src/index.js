
exports.min = function min () {
        let array =[];
  let z = 999999999999999999999999;
  if (arguments.length == 0) {
      z = 0;
  }
  for (var i = 0; i < arguments.length; i++) {
 array = array.concat(arguments[i]);
 }
  for (var i = 0; i <= array.length-1; i++) {
      if (array[i]<z) {
          z=array[i];
      }
  }
  z = 0;
  z = Math.min.apply(0, array);
  if (z == Infinity) {
      z = 0;
  }
  return(z);
}

exports.max = function max () {
        let array =[];
    let z = -9999999999999999;
    for (var i = 0; i < arguments.length; i++) {
   array = array.concat(arguments[i]);
   }
    for (var i = 0; i <= array.length-1; i++) {
        if (array[i]>z) {
            z=array[i];
        }
    }
    if (z=='') {
        z=0;
    }
    if (z == -9999999999999999) {
        z = 0;
    }
    return(z);
}

exports.avg = function avg () {
    let array =[];
     for (var i = 0; i < arguments.length; i++) {
    array = array.concat(arguments[i]);
    }
    z=0;
    if (array.length > 1){
    z = array.reduce((a, b) => (a + b)) / array.length;
}
        return(z);
    }
