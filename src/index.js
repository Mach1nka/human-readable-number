module.exports = function toReadable (num) {
  const hundreds = {
    1:'one hundred',
    2:'two hundred',
    3:'three hundred',
    4:'four hundred',
    5:'five hundred',
    6:'six hundred',
    7:'seven hundred',
    8:'eight hundred',
    9:'nine hundred',
  };
  const dozens ={
    0:'',
    1:'ten',
    2:'twenty',
    3:'thirty',
    4:'forty',
    5:'fifty',
    6:'sixty',
    7:'seventy',
    8:'eighty',
    9:'ninety',
  };
  /*const tener={
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen'
  };*/
  const numerals={
    0:'', //добавляет пробел в конец строки!!
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
  };
  let name;
  let numToArray = num.toString().split('');
  let numToString = num.toString();
  let dozen = numToString.slice(1);
  //let numeral = numToString(0);
  if (num === 0) {
    name = 'zero';
  }else if(numToString.length ===3) {
    if (dozen <= 19) {
      name = `${hundreds[numToArray[0]]} ${numerals[+dozen]}`;
    }else{
      name =`${hundreds[numToArray[0]]} ${dozens[numToArray[1]]} ${numerals[numToArray[2]]}`;
    }
  }else if(numToString.length ===2){
    if(numToString <= 19){
      name = `${numerals[+numToString]}`;
    }else {
      name = `${dozens[numToArray[0]]} ${numerals[numToArray[1]]}`
    }
  }else if (numToString.length ===1) {
    name = `${numerals[+numToString]}`;
  }

  name=name.trim();
  
  return name;
}
