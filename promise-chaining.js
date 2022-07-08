//PROMISE CHAINING
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

/* in the example above, I simply created a function that would return a promise object. By definition, a Promise is a special JS object that produces a value after an asynchronous operation. The promise would get resolved if I got the result of the ,mathematical operation, otherwise it would be rejected with an error object. At this point, the promise is pending since it has neither bn resolved or rejected. I also took note of the executor function within the Promise Constructor Function. The executor function takes in two arguments - resolve and reject, both of which are callbacks provided within JS. the executor funtion completes the task asynchronously.
*/

// add(20, 10)
// .then(function(resultAdd){
//   return subtract(resultAdd, 15)
// })
// .then(function(resultSubtract){
//   console.log(`The answer is ${resultSubtract}`);
// })

/*
In the piece of code above, I called the add method and passed two arguments into it. this would allow the add function to find the sum of 20 and 10 =30. With promises, there's the executor function (mentioned in the notes above) and a consumer function. The latter uses the outcome of a promise. To link these two functions, JS makes use of handler methods, namely .then(), .catch() and .finally(). 

Once I created the promise, i called the .then() method to handle the resolved result from the add() function AND THEN use that result and a second number, in this case 15, for the subtract function. AND THEN use the result from the subtract operation to display the result
*/

// add(20, 10)
// .then(function(resultAdd){
//   return subtract(resultAdd, 15)
// })
// .then(function(resultMinus){
//   return multiply(resultMinus, 100)
// })
// .then(function(resultMult){
//   return divide(resultMult, 3)
// })
// .then(function(resultDiv){
//   console.log(`The answer is ${resultDiv}`);
// })

/*
In the code above, I have worked with promise chaining to 'pass down' the result of a mathermatical operation to the next one as one of the values. Once the four operations are complete, I then display the result.
*/

add(20, 10)
.then(function(resultAdd){
  return subtract(resultAdd, 15)
})
.then(function(resultMinus){
  return multiply(resultMinus, 100)
})
.then(function(resultMult){
  return divide(resultMult, 2)
})
.then(function(resultDiv){
  console.log(`The answer is ${resultDiv}`);
})
.catch(function(error){
  console.log(error.message);
})
.finally(function(){
  console.log('End of Math class');
})

/*
In the code above, I created a promise chain that would eventually display the answer after all the four operations. I then used the .catch
() handler to deal with errors, eg in the event that I pass a letter, instead of a number. Depending on the operation that I add the letter to, the error will be specific to that operation. eg: could not divide/add/multiply/subtract the values. 

the .finally() handler on the other hand, is tasked with cleanups/wrapups and will be called regardless of whether the promise is resolved or rejected. 
*/



let getUser = new Promise(function(resolve, reject){
  const user = {
    name: 'Jontez Diallo',
    email: 'jontez@goo.com',
    password: 123,
    permissions:['db', 'hr', 'dev']
  }
  resolve(user);
})

//1. RETURNING A PROMISE FROM THE .THEN HANDLER - oused when an async call is initiated based omn the result of a previous async call

// getUser
// .then(function(user){
//   console.log(`Got the user's name: ${user.name}`);
//   return new Promise(function(resolve, reject){
//     setTimeout(() => {
//       resolve('Bangla')
//     }, 1000);
//   })
// })
// .then(function(address){
//   console.log(`User lives in ${address}`);
// })

/*
In the code above, I have created a promise that allows me to access a user's details. I use the .then() handler to display the user's name and then return a promise that gets the user's address. From this promise, i use a .then() handler to display the address, based on the first results.
*/

//2. RETURN A SIMPLE VALUE FROM THE .THEN() HANDLER and process it in the next then() handler
// getUser
// .then(function(user){
//   console.log(`Got the user's name: ${user.name} `);
//   return user.email;
// })
// .then(function(email){
//   console.log(`The user's email is ${email}`);
// })

//3. THROW AN ERROR FROM THE .then() handler

getUser
.then(function(user){
  console.log(`Got the user's name: ${user.name}`);
  if(user.permissions.includes('hr')){
    throw new Error('Permission denied. You cannot access the HR module');
  }
  return user.email;
})
.then(function(email){
  console.log(`User email is ${email}`);
})
.catch(function(error){
  console.log(error);
})










