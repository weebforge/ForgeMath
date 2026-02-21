import { Arg, ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$sumHp",
  description: "Calculates the sum of n terms of the harmonic progression.",
  version: "1.0.1",
  args: [
    Arg.requiredNumber("first", "The first term."),
    Arg.requiredNumber("difference", "The common difference between two terms."),
    Arg.requiredNumber("n", "The number of terms."),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [first, diff, n]) {
    if (!Number.isInteger(n)) return this.customError("n is not an integer.")
    let sum = 0
    for (let i = 0; i < n; i++) {
      sum += 1 / (first + i * diff)
    }
    return this.success(sum)
  },
})
