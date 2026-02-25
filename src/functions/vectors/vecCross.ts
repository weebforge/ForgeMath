import { NativeFunction, Arg } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$vecCross",
  description: "Computes cross product of two 3D vectors.",
  version: "1.0.1",
  args: [
    Arg.requiredString("newName", "New vector name"),
    Arg.requiredString("v1", "First vector"),
    Arg.requiredString("v2", "Second vector"),
  ],
  brackets: true,
  unwrap: true,
  execute(ctx, [newName, n1, n2]) {
    if (!(ctx.vectorManager instanceof VectorManager)) return this.customError("No vectors have been created yet.")

    try {
      const v1 = ctx.vectorManager.get(n1)
      const v2 = ctx.vectorManager.get(n2)

      const result = v1.cross(v2)
      ctx.vectorManager.create(newName, result.values)

      return this.success()
    } catch (err) {
      return this.customError(String(err))
    }
  },
})
