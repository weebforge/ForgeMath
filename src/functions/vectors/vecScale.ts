import { NativeFunction, Arg } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$vecScale",
  description: "Scales a vector by a scalar and stores the result.",
  version: "1.0.1",
  args: [
    Arg.requiredString("newName", "New vector name"),
    Arg.requiredString("vector", "Vector name"),
    Arg.requiredNumber("scalar", "Scalar value"),
  ],
  brackets: true,
  unwrap: true,
  execute(ctx, [newName, name, scalar]) {
    if (!(ctx.vectorManager instanceof VectorManager)) {
      return this.customError("No vectors have been created yet.")
    }

    try {
      const vector = ctx.vectorManager.get(name)
      const scaled = vector.scale(scalar)

      ctx.vectorManager.create(newName, scaled.values)
      return this.success()
    } catch (err) {
      return this.customError(String(err))
    }
  },
})
