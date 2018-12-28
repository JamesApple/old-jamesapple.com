class Maybe<T> {
  public static some<T>(value: T) {
    if (!value) {
      throw Error('Maybe.some cannot be null')
    }
    return new Maybe(value)
  }

  public static none<T>() {
    return new Maybe<T>(null)
  }

  public static from<T>(value: T) {
    return value ? Maybe.some(value) : Maybe.none<T>()
  }

  private constructor(private value: T | null) {}

  public map<R>(fn: (value: T) => R): Maybe<R> {
    return this.value == null ? Maybe.none<R>() : Maybe.some(fn(this.value))
  }

  public fmap<R>(fn: (value: T) => Maybe<R>): Maybe<R> {
    return this.value == null ? Maybe.none<R>() : fn(this.value)
  }

  public get any(): boolean {
    return this.value !== null
  }

  public getOr(defaultValue: T) {
    return this.value === null ? defaultValue : this.value
  }
}

export default Maybe
