import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$bitNot",
  description: "Performs a bitwise NOT operation on an integer.",
  version: "1.0.0",
  args: [Arg.requiredNumber("a", "Integer to invert.")],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [a]) {
    if (!Number.isInteger(a)) {
      return this.customError("a must be an integer.")
    }

    return this.success(~a)
  },
})
