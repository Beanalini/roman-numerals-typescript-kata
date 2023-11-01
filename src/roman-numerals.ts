//conversion of numbers between 1 - 3000
//mapping between roman numerals and decimal number
//subtractive method - while input number > 0
//Break number down into thou, hundreds tens and ones
//divide input by by th
//use math floor to round down to nearest whole number
//ignore quotient 0
//if quotient > 0  add  roman numeral at current index n times defined by value of quotient.
//subtract baseNum from input number use % mod divide by basenum to get remainder
//decrement index

export function numToRomanNumeral(inputNum: number): string | undefined {
  const baseNum = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const romanSym = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let index = 12;
  let romanNumeral = "";
  if (isNaN(inputNum)) throw new Error("number is required");
  if (inputNum < 1 || inputNum > 3000)
    throw new Error("Number must be between 1 and 3000");
  while (inputNum > 0) {
    let quotient = Math.floor(inputNum / baseNum[index]);
    if (quotient > 0) {
      romanNumeral += romanSym[index].repeat(quotient);
    }
    inputNum = inputNum % baseNum[index];
    index--;
  }
  return romanNumeral;
}
