export type RemoveNull<TObject extends Record<string, any>> = {
  [key in keyof TObject]: NonNullable<TObject[key]>
}

export type RequiredNonNull<
  TObject extends Record<string, any>,
  TKeys extends keyof TObject
> = Omit<TObject, TKeys> & RemoveNull<Pick<TObject, TKeys>>
