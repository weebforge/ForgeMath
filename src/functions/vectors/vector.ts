import { Arg, NativeFunction, ArgType } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"
import vecAdd from "./vecAdd"

export default new NativeFunction({
  name: "$vector",
  aliases: ["$getVector"],
  description: "Returns the values of a vector.",
  version: "1.0.1",
  args: [Arg.requiredString("name", "The name of the vector")],
  brackets: true,
  unwrap: true,
  output: ArgType.Json,
  execute(ctx, [name]) {
    if (!(ctx.vectorManager instanceof VectorManager)) {
      return this.customError("No vectors have been created yet.")
    }

    try {
      return this.successJSON(ctx.vectorManager.get(name)?.values ?? [])
    } catch (err) {
      return this.customError(String(err))
    }
  },
})
