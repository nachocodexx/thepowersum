import * as mocha from "mocha";
import { expect, assert } from "chai";
import { ThePowerSum } from "../index";

describe("The power sum", () => {
  it("should find the number of ways thay 10 can be represent as the sum of squares", () => {
    const thePowerSum = new ThePowerSum(10, 2);
    const result = thePowerSum.process();

    expect(result).to.be.equal(1);
  });

  it("should find the number of ways thay 100 can be represent as the sum of squares", () => {
    const thePowerSum = new ThePowerSum(100, 2);
    const result = thePowerSum.process();

    expect(result).to.be.equal(3);
  });

  it("should find the number of ways thay 100 can be represent as the sum of cubes", () => {
    const thePowerSum = new ThePowerSum(100, 3);
    const result = thePowerSum.process();

    expect(result).to.be.equal(1);
  });
});
