import { Arg, ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$bitOr",
  description: "Performs a bitwise OR operation on two integers.",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("a", "First integer."),
    Arg.requiredNumber("b", "Second integer.")
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [a, b]) {
    if (!Number.isInteger(a)){ return this.customError("a must be an integer.")}
    if (!Number.isInteger(b)) {return this.customError("b must be an integer.")}

    return this.success(a | b)
  },
})
