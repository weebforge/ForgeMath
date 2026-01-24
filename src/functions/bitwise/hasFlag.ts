import { NativeFunction, Arg, ArgType } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$hasFlag",
  description: "Checks whether a bit flag is set.",
  version: "1.0.0",
  args: [Arg.requiredNumber("value", "Integer value."), Arg.requiredNumber("flag", "Flag to check.")],
  brackets: true,
  unwrap: true,
  output: ArgType.Boolean,
  execute(ctx, [value, flag]) {
    if (!Number.isInteger(value)) {
      return this.customError("value must be an integer.")
    }
    if (!Number.isInteger(flag)) {
      return this.customError("flag must be an integer.")
    }

    return this.success((value & flag) === flag)
  },
})
