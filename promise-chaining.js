//example of promises
let add = function (x, y){
  return new Promise(function(resolve, reject){
    let resultAdd = x + y;
    if(resultAdd){
      resolve(resultAdd)
    } else {
      reject(new Error('Could not add the two values'))
    }
  })
}

let subtract = function (x, y){
  return new Promise(function(resolve, reject){
    let resultMinus = x - y;
    if(resultMinus){
      resolve(resultMinus)
    } else {
      reject(new Error('Could not minus the two values'))
    }
  })
}



let multiply = function (x, y){
  return new Promise(function(resolve, reject){
    let resultMult = x * y;
    if(resultMult){
      resolve(resultMult)
    } else {
      reject(new Error('Could not multiply the two values'))
    }
  })
}

let divide = function (x, y){
  return new Promise(function(resolve, reject){
    let resultDiv = x / y;
    if(resultDiv){
      resolve(resultDiv)
    } else {
      reject(new Error('Could not divide the two values'))
    }
  })
}











