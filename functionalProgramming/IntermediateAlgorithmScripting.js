function diffArray(arr1, arr2) {

    const container = arr1.concat(arr2);
  
    console.log(container);
  
    const newArr = container.filter((element) => {
      return container.indexOf(element) === container.lastIndexOf(element);
    })
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  function destroyer(arr, ...args) {
    const container = [...args];
    const newArr = [];
  
    arr.forEach(element1 => {
      if (container.indexOf(element1) === -1)
      newArr.push(element1);
    })
  
    console.log(newArr)
    return newArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  function whatIsInAName(collection, source) {

    const newArr = [];
    let flag = 1;
  
    collection.forEach(element => {
      for(let property in source) {
        if(!(element.hasOwnProperty(property) && element[property] === source[property])) {
          flag = 0;
          break;
        }
      }
  
      (flag === 1) ? newArr.push(element) : flag = 1;
    })
  
    return newArr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


  function spinalCase(str) {
    return str.replace(/[\s_]/g, "-")
              // replace lowercase letter [a-z] followed by uppercase letter [A-Z]
              .replace(/[a-z](?=[A-Z])/g, function(match) {
                match = match + "-";
                return match;
              })
              .toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');

function translatePigLatin(str) {
  const words = str.split("");
  const auxWords = words.slice();
  const aux = [];
  let ending = ""; 
  const regex = /[bcdfghjklmnpqrstvwxyz]/i;

   (!regex.test(words[0])) ? ending = "way" : ending = "ay";
  

  for (let i=0; i<words.length; i++){
    if(regex.test(words[i])) aux.push(auxWords.shift())
    else break;
  }

  return (auxWords.concat(aux.concat(ending)).join(""))
}

translatePigLatin("algorithm");

function pairElement(str) {
  const arr = str.split("");
  const outputArr = [];
  

  arr.forEach(element => {
    const pairArr = [];
    pairArr.push(element);

    switch(element){
      case "G": pairArr.push("C");
      break;
      case "C": pairArr.push("G");
      break;
      case "A": pairArr.push("T");
      break;
      case "T": pairArr.push("A");
      break;
    }
    outputArr.push(pairArr);
  })

  console.log(outputArr);
  return outputArr;
}

pairElement("GCG");

function fearNotLetter(str) {
  const abecedarie = "abcdefghijklmnopqrstuvwxyz".split("");
  const cadena = str.split("");
  const answer = [];

  let index = abecedarie.findIndex(element => {
   return element === cadena[0]
  })

  for(let i=0; i<cadena.length; i++) {
    if (cadena[i] !== abecedarie[index]) {
      answer.push(abecedarie[index]);
      break;
    };

    index++;
  }

  if (answer.length === 0) return undefined;
  return (answer.join(""));

}

fearNotLetter("abce");

function uniteUnique(...arr) {
    const fullArray = [];
    [...arr].forEach(element => {
      fullArray.push(...element);
    })
  
    let answer = fullArray.filter((element, index) => {
      return fullArray.indexOf(element) === index;
    })
  
    console.log(answer);
  
    return answer;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  function convertHTML(str) {
    let auxArr = str.split("");
  
    for(let i=0; i<auxArr.length; i++) {
      switch (auxArr[i]) {
        case ("&") : auxArr[i] = "&amp;";
        break;
  
        case ("<") : auxArr[i] = "&lt;";
        break;
  
        case (">") : auxArr[i] = "&gt;";
        break;
  
        case ('"') : auxArr[i] = "&quot;";
        break;
  
        case ("'") : auxArr[i] = "&apos;";
        break;
  
        default: break;
      }
    }
  
    console.log(auxArr.join(""));
    return auxArr.join("");
  }
  
  convertHTML("Dolce & Gabbana");

  function sumFibs(num) {
    const oddFibo = [1];
    let num1=0;
    let num2=1;
    let aux=1;
  
    while (aux<=num){
  
      if(aux%2!==0) {
        oddFibo.push(aux);
      } 
      num1=num2;
      num2=aux;
      aux = num1+num2;
    }
  
  return (oddFibo.reduce((accumulator, currentValue)=>accumulator+currentValue,0));
  }
  
  sumFibs(75025);

  function sumPrimes(num) {
    const primeNumbers = [];
    let flag = 0;
  
    for(let i=2; i<=num; i++){
      for(let j=2; j<i; j++){
        if (i%j === 0) {
          flag = 1;
          break;
        }
      }
  
      if (flag !== 1) primeNumbers.push(i);
      flag = 0;
    }
  
  console.log(primeNumbers)
  return (primeNumbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0));
  }
  
  sumPrimes(11);

  function smallestCommons(arr) {
    let answer = 1;
  
    while(true) {
      for(let i = Math.min(...arr); i<=Math.max(...arr);i++) {
        if (answer%i !== 0) break;
        if(i===Math.max(...arr)) return answer;
      }
      answer++;
    }
  }
  
  smallestCommons([23,18]);

  function dropElements(arr, func) {
    let answer = arr.slice();
  
    for(let i=0; i<arr.length;i++) {
      if (func(arr[i]) === false) {
        answer.shift();
      }
      else break;
    }
    
    console.log(answer);
    return answer;
  }
  
  dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});

  function steamrollArray(arr) {
    const answer = [];
  
    function recursive(arreglo){
      arreglo.forEach(element => {
        if (!Array.isArray(element)) answer.push(element)
        else recursive(element);
      })
    }
  
    recursive(arr);
  
    console.log(answer)
    return answer
  
  }
  
  steamrollArray([1, {}, [3, [[4]]]]);

  function binaryAgent(str) {
    const auxArr = str.split(" ");
    const answer = [];
  
    auxArr.forEach(element => {
      const binaries = element.split("").reverse();
      
      answer.push(binaries.reduce((acc, current, index) =>{
        return acc+Math.pow(2,index)*parseInt(current);
      }, 0));
  
      });
  
      return String.fromCharCode(...answer);
  
    } 

    binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");

    function truthCheck(collection, pre) {
        for (let i=0; i<collection.length; i++){
          if(!collection[i][pre]) return false;
        }
      
        return true;
      }
      
      truthCheck([{name: "Quincy", role: "Founder"
      , isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

      function addTogether(...args) {

        for(let i=0; i<[...args].length;i++) {
          if (typeof [...args][i] !== "number") return undefined;
        }
      
        if([...args].length === 2) return [...args].reduce((acc, current) => acc+current,0)
      
        if([...args].length === 1) {
          return function (a) {
            if (typeof a !== "number") return undefined;
            return [...args][0] + a;
          }
        }
      }
      
      addTogether(2,3);
      console.log(addTogether(2,[3]))

      const Person = function(first, last) {

        let firstName = first;
        let lastName = last;
      
        this.getFirstName = function() {
          return firstName;
        };
      
        this.getLastName = function() {
          return lastName;
        };
      
        this.getFullName = function() {
          return firstName + " " + lastName;
        };
      
        this.setFirstName = function(firstFunc) {
          firstName = firstFunc;
        };
      
        this.setLastName = function(lastFunc) {
          lastName = lastFunc
        };
      
        this.setFullName = function(firstFunc,lastFunc) {
          firstName = firstFunc;
          lastName = lastFunc;
        };
      
      };

      function orbitalPeriod(arr) {
        const GM = 398600.4418;
        const earthRadius = 6367.4447;
        const a = 2*Math.PI;
        const newArr = [];
      
        const getOrbPeriod = function(obj) {
          const c = Math.pow(earthRadius + obj.avgAlt, 3);
          const b = Math.sqrt(c / GM);
          const orbPeriod = Math.round(a * b);
          // create new object
          return {name: obj.name, orbitalPeriod: orbPeriod};
        };
      
        for (let elem in arr) {
          newArr.push(getOrbPeriod(arr[elem]));
        }
      
        return newArr;
      
      }
      
      orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);