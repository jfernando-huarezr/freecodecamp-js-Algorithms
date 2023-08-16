Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  this.forEach((...args) => {
    newArray.push(callback(...args))
  });
  // Only change code above this line
  return newArray;
};

const arr = [23,65,98,5,13];
console.log(arr.myMap(item => item * 2));


//same but with filter function: 

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((arg1, ...args) => {
      if (callback(arg1, ...args)) newArray.push(arg1);
    })
    // Only change code above this line
    return newArray;
  };


  const squareList = arr => {
    // Only change code below this line
    let newArr = [];
    let answer =0;
  
    newArr = arr.filter(element => (element>0) && (element%1 === 0));
  
    return newArr.map(element => element*element);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);


  