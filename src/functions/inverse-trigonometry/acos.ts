import { Arg, ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$acos",
  aliases: ["$arccos"],
  description: "Calculates the inverse cosine (radians by default).",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("x", "Value between -1 and 1."),
    Arg.optionalBoolean("asDeg", "Set to true to return degrees.")
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [x, asDeg]) {
    if (x < -1 || x > 1) {
      return this.customError("acos domain error: value must be between -1 and 1.")
    }
    let result = Math.acos(x)

    if (asDeg === true) {
      result *= 180 / Math.PI
    }

    return this.success(result)
  },
})
