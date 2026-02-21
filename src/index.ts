import { VectorManager } from "./structures/VectorManager"

export * from "./structures/ForgeMath"
export * from "./structures/Vector"
export * from "./structures/VectorManager"

export * from "./constants"

declare module "@tryforge/forgescript" {
  interface Context {
    vectorManager?: VectorManager
  }
}
