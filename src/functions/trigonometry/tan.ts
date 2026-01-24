import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$tan",
  aliases: ["$tangent"],
  description: "Calculates the tangent of an angle (radians by default).",
  version: "1.0.0",
  args: [
    Arg.requiredNumber("angle", "Angle to find tangent of."),
    Arg.optionalBoolean("asDeg", "Set to true if the angle is in degrees."),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [angle, asDeg]) {
    if (asDeg === true) {
      angle *= Math.PI / 180
    }

    return this.success(Math.tan(angle))
  },
})
