import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$atan2",
  description: "Calculates the angle from Y and X coordinates (radians by default).",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("y", "Y coordinate."),
    Arg.requiredNumber("x", "X coordinate."),
    Arg.optionalBoolean("asDeg", "Set to true to return degrees.")
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [y, x, asDeg]) {
    let result = Math.atan2(y, x)

    if (asDeg === true) {
      result *= 180 / Math.PI
    }

    return this.success(result)
  },
})
