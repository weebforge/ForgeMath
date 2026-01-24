import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"
import { clamp } from "../../utils/arithmetic"

export default new NativeFunction({
  name: "$clamp",
  description: "Clamps a number between a minimum and maximum value.",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("x", "The number to clamp."),
    Arg.requiredNumber("min", "Minimum value."),
    Arg.requiredNumber("max", "Maximum value."),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [x, min, max]) {
    return this.success(clamp(x, min, max))
  },
})
