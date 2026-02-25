import { NativeFunction, Arg } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$vecProjection",
  aliases: ["$projectVector"],
  description: "Projects one vector onto another.",
  version: "1.0.1",
  args: [
    Arg.requiredString("newName", "New vector name"),
    Arg.requiredString("v1", "Vector to project"),
    Arg.requiredString("v2", "Vector to project onto"),
  ],
  brackets: true,
  unwrap: true,
  execute(ctx, [newName, n1, n2]) {
    if (!(ctx.vectorManager instanceof VectorManager)) return this.customError("No vectors have been created yet.")

    try {
      const v1 = ctx.vectorManager.get(n1)
      const v2 = ctx.vectorManager.get(n2)

      const result = v1.projectOnto(v2)
      ctx.vectorManager.create(newName, result.values)

      return this.success()
    } catch (err) {
      return this.customError(String(err))
    }
  },
})
