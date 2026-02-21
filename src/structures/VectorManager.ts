import { Vector } from "./Vector"

export class VectorManager {
  private store = new Map<string, Vector>()

  create(name: string, values: number[]): Vector {
    const vector = new Vector(values)
    this.store.set(name, vector)
    return vector
  }

  get(name: string): Vector {
    const vector = this.store.get(name)
    if (!vector) throw new Error(`Vector "${name}" does not exist.`)
    return vector
  }

  delete(name: string): boolean {
    return this.store.delete(name)
  }

  exists(name: string): boolean {
    return this.store.has(name)
  }

  clear() {
    this.store.clear()
  }

  list(): string[] {
    return [...this.store.keys()]
  }
}
