import { Arg, NativeFunction, ArgType } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$vecAngle",
  description: "Returns the angle between two vectors in radians.",
  version: "1.0.1",
  args: [
    Arg.requiredString("v1", "First vector"),
    Arg.requiredString("v2", "Second vector"),
    Arg.optionalBoolean("asDeg", "Output in degrees"),
  ],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [n1, n2, asDeg]) {
    if (!(ctx.vectorManager instanceof VectorManager)) return this.customError("No vectors have been created yet.")

    try {
      const v1 = ctx.vectorManager.get(n1)
      const v2 = ctx.vectorManager.get(n2)
      let angle = v1.angle(v2)
      return this.success(asDeg !== null && asDeg ? (angle * 180) / Math.PI : angle)
    } catch (err) {
      return this.customError(String(err))
    }
  },
})
