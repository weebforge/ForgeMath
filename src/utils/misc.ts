export const fibCache = new Map<number, number>()
export const factCache = new Map<number, number>()
export function fibonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("fibonacci: n must be a non-negative integer.")
  }

  if (n === 0) return 0
  if (n === 1) return 1

  if (fibCache.has(n)) return fibCache.get(n)!

  const result = fibonacci(n - 1) + fibonacci(n - 2)
  fibCache.set(n, result)
  return result
}

export function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("factorial: n must be a non-negative integer.")
  }

  if (n === 0) return 1

  if (factCache.has(n)) return factCache.get(n)!

  const result = n * factorial(n - 1)
  factCache.set(n, result)
  return result
}

export function gcd(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("gcd: both arguments must be integers.")
  }

  while (b !== 0) [a, b] = [b, a % b]
  return Math.abs(a)
}

export function lcm(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("lcm: both arguments must be integers.")
  }
  if (a === 0 || b === 0) return 0

  return Math.abs(a * b) / gcd(a, b)
}
