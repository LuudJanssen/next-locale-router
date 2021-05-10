/**
 * This method returns a copy of an object with the properties of an object frozen **forgivingly**. That means
 * that whenever you try to write a value to a property which is frozen, no error is thrown. The value is simply
 * ignored.
 *
 * This is in contrast to using `Object.freeze()` which makes a property immutable and throws an error if you
 * try to overwrite it.
 */
export const createForgivingFrozenObject = <TObject extends Record<string, any>>(
  object: TObject,
): TObject => {
  const newObject = {}

  for (const [key, value] of Object.entries(object)) {
    Object.defineProperty(newObject, key, {
      enumerable: true,
      configurable: true,
      get() {
        return value
      },

      // An empty setter, which simply doesn't alter the property
      set() {},
    })
  }

  return newObject as TObject
}
