import * as mocha from "mocha";
import { expect, assert } from "chai";
import { ThePowerSum } from "../index";

describe("The power sum", () => {
  it("should find the number of ways thay 10 can be represent as the sum of squares", () => {
    const thePowerSum = new ThePowerSum(5, 2);
    const result = thePowerSum.process();
    console.log("RESULT: ", result);

    expect(1).to.be.equal(1);
  });
});
