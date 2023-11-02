/* Rules
1] All Roman numerals have a direct mapping to a decimal number 
[2] Convert numerals to decimal equivalent and sum the values
[3] If  a letter of higher value follows a letter of lower value then the lower value is subtracted from the total value
*/

type RomanMap = {
  [key: string]: number;
};
const romanMap: RomanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
} as const;

export function romanNumeralToDecimal(romanInput: string): number {
  let count = 0;
  for (let i = 0; i < romanInput.length; i++) {
    count += romanMap[romanInput[i]];
  }
  return count;
}
