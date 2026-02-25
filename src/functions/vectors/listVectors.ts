import { Arg, ArgType, NativeFunction } from "@tryforge/forgescript"
import { VectorManager } from "../../structures/VectorManager"
import array from "@tryforge/forgescript/dist/functions/array"

export default new NativeFunction({
  name: "$listVectors",
  description: "Lists all stored vector names.",
  version: "1.0.1",
  args: [Arg.optionalString("sep", "Seperator to use")],
  brackets: false,
  unwrap: true,
  output: array<ArgType.String>(),
  execute(ctx, [sep]) {
    if (!(ctx.vectorManager instanceof VectorManager)) return this.success("")

    const list = ctx.vectorManager.list()
    return this.success(list.join(sep ?? ", "))
  },
})
