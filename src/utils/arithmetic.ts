export function clamp(x: number, min?: number, max?: number) {
  if (min === undefined) {
    return max === undefined ? x : Math.max(x, max)
  }
  if (max === undefined) {
    return Math.min(x, min)
  }

  if (min > max) {
    ;[min, max] = [max, min]
  }

  return Math.min(Math.max(x, min), max)
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}
export function scaleNumber(x: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  return outMin + ((x - inMin) * (outMax - outMin)) / (inMax - inMin)
}
export function between(x: number, min: number, max: number) {
  if (min > max) {
    ;[min, max] = [max, min]
  }

  return x >= min && x <= max
}
