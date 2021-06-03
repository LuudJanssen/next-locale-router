export const alwaysReturn =
  <TValue = any>(value: TValue): (() => TValue) =>
  () =>
    value
