import { Arg, NativeFunction, ArgType } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$vecDot",
  description: "Returns the dot product of two vectors.",
  version: "1.0.1",
  args: [Arg.requiredString("name1", "First vector name"), Arg.requiredString("name2", "Second vector name")],
  brackets: true,
  unwrap: true,
  output: ArgType.Number,
  execute(ctx, [name1, name2]) {
    if (!(ctx.vectorManager instanceof VectorManager)) {
      return this.customError("No vectors have been created yet.")
    }

    try {
      const v1 = ctx.vectorManager.get(name1)
      const v2 = ctx.vectorManager.get(name2)
      return this.success(v1.dot(v2))
    } catch (err) {
      return this.customError(String(err))
    }
  },
})
