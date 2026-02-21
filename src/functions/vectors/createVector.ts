import { Arg, NativeFunction } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"

export default new NativeFunction({
  name: "$createVector",
  aliases: ["$loadVector"],
  description: "Create a vector.",
  version: "1.0.1",
  args: [
    Arg.requiredString("name", "The name of the vector"),
    Arg.restNumber("values", "The values of the vector", true),
  ],
  brackets: true,
  unwrap: true,
  execute(ctx, [name, values]) {
    if (!(ctx.vectorManager instanceof VectorManager)) {
      ctx.vectorManager = new VectorManager()
    }

    if (values.length < 2) {
      return this.customError("Vector must have at least 2 values.")
    }

    ctx.vectorManager.create(name, values)
    return this.success()
  },
})
