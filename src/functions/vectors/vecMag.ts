import { Arg, NativeFunction, ArgType } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$vecMag",
  aliases: ["$vectorMagnitude"],
  description: "Returns the magnitude (length) of a vector.",
  version: "1.0.1",
  args: [Arg.requiredString("name", "The name of the vector")],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [name]) {
    if (!(ctx.vectorManager instanceof VectorManager)) {
      return this.customError("No vectors have been created yet.")
    }

    try {
      const vector = ctx.vectorManager.get(name)
      return this.success(vector.magnitude())
    } catch (err) {
      return this.customError(String(err))
    }
  },
})
