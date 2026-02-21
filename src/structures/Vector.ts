export class Vector {
  readonly values: number[]

  constructor(values: number[]) {
    if (!values.length) {
      throw new Error("Vector must have at least one value.")
    }

    if (!values.every((v) => typeof v === "number" && !isNaN(v))) {
      throw new Error("Vector values must be valid numbers.")
    }

    this.values = values
  }

  get dimension(): number {
    return this.values.length
  }

  magnitude(): number {
    return Math.sqrt(this.values.reduce((sum, v) => sum + v * v, 0))
  }

  add(other: Vector): Vector {
    this.#assertSameDimension(other)

    return new Vector(this.values.map((v, i) => v + other.values[i]))
  }

  subtract(other: Vector): Vector {
    this.#assertSameDimension(other)

    return new Vector(this.values.map((v, i) => v - other.values[i]))
  }

  scale(scalar: number): Vector {
    return new Vector(this.values.map((v) => v * scalar))
  }

  dot(other: Vector): number {
    this.#assertSameDimension(other)

    return this.values.reduce((sum, v, i) => sum + v * other.values[i], 0)
  }

  normalize(): Vector {
    const mag = this.magnitude()
    if (mag === 0) throw new Error("Cannot normalize a zero vector.")

    return this.scale(1 / mag)
  }

  clone(): Vector {
    return new Vector(this.values)
  }

  #assertSameDimension(other: Vector) {
    if (this.dimension !== other.dimension) {
      throw new Error("Vectors must have the same dimension.")
    }
  }
}
