import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"
import { lerp } from "../../utils/arithmetic"

export default new NativeFunction({
  name: "$lerp",
  description: "Linearly interpolates between two numbers.",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("a", "Starting value."),
    Arg.requiredNumber("b", "Ending value."),
    Arg.requiredNumber("t", "Interpolation factor (usually between 0 and 1).")
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [a, b, t]) {
    return this.success(lerp(a, b, t))
  },
})
