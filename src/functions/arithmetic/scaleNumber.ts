import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"
import { scaleNumber } from "../../utils/arithmetic"

export default new NativeFunction({
  name: "$scaleNumber",
  description: "Scales a number from one range to another.",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("x", "The value to scale."),
    Arg.requiredNumber("inMin", "Input range minimum."),
    Arg.requiredNumber("inMax", "Input range maximum."),
    Arg.requiredNumber("outMin", "Output range minimum."),
    Arg.requiredNumber("outMax", "Output range maximum."),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [x, inMin, inMax, outMin, outMax]) {
    return this.success(scaleNumber(x, inMin, inMax, outMin, outMax))
  },
})
