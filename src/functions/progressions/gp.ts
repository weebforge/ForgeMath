import { Arg, ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$gp",
  description: "Calculates nth term of the geometric progression.",
  version: "1.0.1",
  args: [
    Arg.requiredNumber("first", "The first term."),
    Arg.requiredNumber("ratio", "The common ratio between two terms."),
    Arg.requiredNumber("n", "The n to find nth term."),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [first, ratio, n]) {
    if (!Number.isInteger(n)) return this.customError("n is not an integer.")
    return this.success(first * Math.pow(ratio, n - 1))
  },
})
