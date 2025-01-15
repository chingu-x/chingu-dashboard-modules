import { generateRandomNumbers } from "./test";

describe("random function", () => {
  it("should generate random numbers", () => {
    const numbers = generateRandomNumbers({ count: 1, min: 2, max: 2 });

    expect(numbers).toEqual([2]);
  });
});
