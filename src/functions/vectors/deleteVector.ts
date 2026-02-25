import { NativeFunction, Arg } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$deleteVector",
  description: "Deletes a vector by name.",
  version: "1.0.0",
  args: [Arg.requiredString("name", "Vector name")],
  brackets: true,
  unwrap: true,
  execute(ctx, [name]) {
    if (!(ctx.vectorManager instanceof VectorManager)) return this.customError("No vectors exist.")

    if (!ctx.vectorManager.delete(name)) return this.customError(`Vector "${name}" does not exist.`)

    return this.success()
  },
})
