export class ThePowerSum {
  private x: number;
  private n: number;
  private devmode: boolean = true;
  constructor(x: number, n: number) {
    this.x = x;
    this.n = n;
    /// This prevents that X and N out of the bounds
    this.exceptionHandler();
  }
  private exceptionHandler() {
    if (!(this.x >= 1 && this.x <= 1000))
      throw new Error(`'x' must be a number betweeen 1 <= x <=1000`);
    if (!(this.n >= 2 && this.n <= 10))
      throw new Error(` 'n' must be a number between 2<=n<=10`);
  }

  private testingPrint(x: number, n: number, i: number, iToN: number) {
    console.log("\t".repeat(i) + `x=${x}`);
    console.log("\t".repeat(i) + `n=${n}`);
    console.log("\t".repeat(i) + `i=${i}`);
    console.log("\t".repeat(i) + `${i}^${n}=${iToN}`);
    console.log("=".repeat(100));
  }

  private calculate(x: number, n: number, i: number = 1): number {
    const iToN: number = i ** n;
    /// This is only for debugging process and simple visualization
    if (this.devmode) this.testingPrint(x, n, i, iToN);

    if (iToN > x) return 0;
    else if (iToN === x) return 1;
    else
      return this.calculate(x, n, i + 1) + this.calculate(x - iToN, n, i + 1);
  }

  process(x?: number, n?: number) {
    this.x = x ? x : this.x;
    this.n = n ? n : this.n;
    this.exceptionHandler();
    return this.calculate(this.x, this.n);
  }
}
