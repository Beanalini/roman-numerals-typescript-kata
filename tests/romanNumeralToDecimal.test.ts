import { romanNumeralToDecimal } from "../src/roman-numeral-to-decimal";

describe("romanToNumeral()", () => {
  test("Test direct mapping of single numeral to decimal conversion", () => {
    expect(romanNumeralToDecimal("I")).toEqual(1); //act,arrange,assert
    expect(romanNumeralToDecimal("V")).toEqual(5);
    expect(romanNumeralToDecimal("C")).toEqual(100);
    expect(romanNumeralToDecimal("D")).toEqual(500);
  });
  test("Test direct mapping of repeated numerals", () => {
    expect(romanNumeralToDecimal("II")).toEqual(2);
    expect(romanNumeralToDecimal("III")).toEqual(3);
    expect(romanNumeralToDecimal("XX")).toEqual(20);
    expect(romanNumeralToDecimal("MMM")).toEqual(3000);
  });
});
