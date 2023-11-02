import { romanNumeralToDecimal } from "../src/roman-numeral-to-decimal";

describe("romanToNumeral()", () => {
  test("Test direct mapping of single numeral to decimal conversion", () => {
    expect(romanNumeralToDecimal("I")).toEqual(1); //act,arrange,assert
    expect(romanNumeralToDecimal("V")).toEqual(5);
    expect(romanNumeralToDecimal("C")).toEqual(100);
    expect(romanNumeralToDecimal("D")).toEqual(500);
  });
  test("Test direct mapping of repeated numerals e.g. II, XX", () => {
    expect(romanNumeralToDecimal("II")).toEqual(2);
    expect(romanNumeralToDecimal("III")).toEqual(3);
    expect(romanNumeralToDecimal("XX")).toEqual(20);
    expect(romanNumeralToDecimal("MMM")).toEqual(3000);
  });
  test("Tests higher numeral followed by lower", () => {
    expect(romanNumeralToDecimal("XV")).toEqual(15);
    expect(romanNumeralToDecimal("CL")).toEqual(150);
    expect(romanNumeralToDecimal("CX")).toEqual(110);
    expect(romanNumeralToDecimal("DC")).toEqual(600);
    expect(romanNumeralToDecimal("MD")).toEqual(1500);
  });
  test("Tests subtractive classes of roman numeral groupings", () => {
    expect(romanNumeralToDecimal("IV")).toEqual(4);
    expect(romanNumeralToDecimal("IX")).toEqual(9);
    expect(romanNumeralToDecimal("MCM")).toEqual(1900);
    expect(romanNumeralToDecimal("XLIX")).toEqual(49);
    expect(romanNumeralToDecimal("XIV")).toEqual(14);
  });
});
