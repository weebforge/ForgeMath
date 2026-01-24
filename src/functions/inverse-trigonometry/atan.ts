import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$atan",
  aliases: ["$arctan"],
  description: "Calculates the inverse tangent (radians by default).",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("x", "Value to find inverse tangent of."),
    Arg.optionalBoolean("asDeg", "Set to true to return degrees."),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [x, asDeg]) {
    let result = Math.atan(x)

    if (asDeg === true) {
      result *= 180 / Math.PI
    }

    return this.success(result)
  },
})
