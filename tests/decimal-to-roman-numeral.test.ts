import { numToRomanNumeral } from "../src/decimal-to-roman-numerals";
describe("Converts a decimal number into the roman numeral number ", () => {
  // test("throws an error if not passed a number", () => {
  //   expect(() => {
  //     numToRomanNumeral("12");
  //   }).toThrow("number is required");
  // });

  test("throws an error if number is greater than 3000", () => {
    expect(() => {
      numToRomanNumeral(3001); //act
    }).toThrow("Number must be between 1 and 3000"); //assert
  });
  test("throws an error if number is less than 1", () => {
    expect(() => {
      numToRomanNumeral(-1);
    }).toThrow("Number must be between 1 and 3000");
  });

  test("returns the roman numeral", () => {
    expect(numToRomanNumeral(4)).toEqual("IV");
    expect(numToRomanNumeral(9)).toEqual("IX");
    expect(numToRomanNumeral(15)).toEqual("XV");
    expect(numToRomanNumeral(251)).toEqual("CCLI");
    expect(numToRomanNumeral(567)).toEqual("DLXVII");
    expect(numToRomanNumeral(1500)).toEqual("MD");
    expect(numToRomanNumeral(2999)).toEqual("MMCMXCIX");
  });
});
