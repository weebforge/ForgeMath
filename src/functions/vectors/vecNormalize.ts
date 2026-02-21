import { NativeFunction, Arg } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$vecNormalize",
  description: "Normalizes a vector and stores the result.",
  version: "1.0.1",
  args: [Arg.requiredString("newName", "New vector name"), Arg.requiredString("vector", "Vector name")],
  brackets: true,
  unwrap: true,
  execute(ctx, [newName, name]) {
    if (!(ctx.vectorManager instanceof VectorManager)) {
      return this.customError("No vectors have been created yet.")
    }

    try {
      const vector = ctx.vectorManager.get(name)
      const normalized = vector.normalize()

      ctx.vectorManager.create(newName, normalized.values)
      return this.success()
    } catch (err) {
      return this.customError(String(err))
    }
  },
})
