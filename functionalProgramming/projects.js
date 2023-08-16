function palindrome(str) {
    const regex = /[A-Za-z0-9]/g;
    const filtered = str.match(regex);
  
    console.log(filtered);
    
    if(filtered.join("").toLowerCase() === filtered.reverse().join("").toLowerCase()) return true;
    else return false;
  
    
  }
  
  palindrome("_eye");


  function convertToRoman(num) {
    const digits = [];
    const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let number = num;
   
    const translator = function (e) {
        switch (e) {
            case 1000 : return 'M'; break;
            case 900 : return 'CM'; break;
            case 500 : return 'D'; break;
            case 400 : return 'CD'; break;
            case 100 : return 'C'; break;
            case 90 : return 'XC'; break;
            case 50 : return 'L'; break;
            case 40 : return 'XL'; break;
            case 10 : return 'X'; break;
            case 9 : return 'IX'; break;
            case 5 : return 'V'; break;
            case 4 : return 'IV'; break;
            case 1 : return 'I'; break;
        }
    }
   
   while (number !== 0) {
       for (let i = 0; i < arabic.length; i++){
           while (number>=arabic[i]) {
               digits.push(arabic[i]);
               number = number - arabic[i];
           }
       }
   }
   
   const roman = digits.map(translator);
   
   return roman.join("");
   
   }
   
   convertToRoman(3999);
   console.log(convertToRoman(3999));

   function rot13(str) {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const auxArr = str.split("");
    let answer = [];
  
    answer = auxArr.map ( e => {
      if (!letters.includes(e)) return e;
  
      return letters[(letters.indexOf(e)+13)%letters.length]
  
    })
  
    return answer.join("");
  
  }
  
  rot13("SERR PBQR PNZC");


  function telephoneCheck(str) {
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
          rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
  
      if (rex1.test(str)) {
          return true;
      }
      else {
          return rex2.test(str) ? true : false
      }
  }


  
  function checkCashRegister(price, cash, cid) {
    let change = cash-price;
    let caja = cid.map(e=>e.slice());
    caja = caja.map(e=> e.pop()).reverse();
    const values = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    const labels = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE","ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
    const answer = [];
    const objectArray = [];
  
  console.log(change);
  
    for (let i=0; i< values.length; i++){
      
      if ((change%values[i] === change)) answer.push(0);
  
      else {
        
        let aux = 0;
        while(change%values[i] !== change && caja[i] !==0){
          aux = Math.round((aux+values[i])*100)/100;
          change = Math.round((change-values[i])*100)/100
          caja[i] = Math.round((caja[i]-values[i])*100)/100;
        }
        answer.push(aux);
      }
    }
  
    for (let i=0; i<labels.length; i++){
      const aux=[];
      if (answer[i]!==0) {
        aux.push(labels[i]);
        aux.push(answer[i]);
        objectArray.push(aux)
      }
    }
  
    console.log(caja);
    console.log(answer);
    console.log(objectArray)
  
    const sumAnswer = Math.round(answer.reduce((acc,c)=> acc+c,0)*100)/100;
    const sumCaja = Math.round(caja.reduce((acc,c)=> acc+c,0)*100)/100;
  
    if (sumAnswer === cash-price && sumCaja === 0) {
      return {
        status: "CLOSED",
        change: cid
      }
    }
  
    else if (sumAnswer === cash-price && sumCaja !== 0){
      return {
        status: "OPEN",
        change: objectArray
      }
    }
  
    else {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      }
    }
  
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));