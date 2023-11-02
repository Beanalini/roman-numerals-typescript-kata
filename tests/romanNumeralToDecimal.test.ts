import { romanNumeralToDecimal } from "../src/roman-numeral-to-decimal";

describe("romanToNumeral()", () => {
  test("Test direct mapping of single numeral to decimal conversion", () => {
    expect(romanNumeralToDecimal("I")).toEqual(1);
    //expect(romanNumeralToDecimal("M")).toEqual(1);
  });
});
