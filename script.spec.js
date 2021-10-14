const groupArrayElements = require("./script");

describe("Should group array elements as intended", () => {
  it("Groups elements without leftovers", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
  it("Groups elements with leftovers", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 4)).toEqual([
      [1, 2, 3, 4],
      [5, 6],
    ]);
  });
  it("Should handle empty array", () => {
    expect(groupArrayElements([], 4)).toEqual([]);
  });
	it("Should throw on invalid arrLength param", () => {
    expect(() => groupArrayElements([1, 2, 3], null)).toThrow();
    expect(() => groupArrayElements([1, 2, 3], -1)).toThrow();
	});
});
