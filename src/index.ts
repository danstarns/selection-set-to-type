export type Trim<S extends string> = S extends ` ${infer R}` ? Trim<R> : S;

export type IsValidField<F extends string> = F extends "" | "{" | "}" | " "
  ? false
  : true;

export type ExtractFieldNames<
  T extends string,
  Result extends Record<string, any> = {}
> = T extends `${infer Field}\n${infer Rest}`
  ? IsValidField<Trim<Field>> extends true
    ? Field extends `${Trim<infer ParentField>} {${infer Inner}}`
      ? ExtractFieldNames<
          Rest,
          Result & { [K in Trim<ParentField>]: ExtractFieldNames<Inner> }
        >
      : Field extends `${infer Key}`
      ? ExtractFieldNames<
          Rest,
          Result & { [K in Trim<Key>]: Record<string, any> }
        >
      : ExtractFieldNames<Rest, Result>
    : ExtractFieldNames<Rest, Result>
  : Result;

export type NestedFields<T> = {
  [K in keyof T]: T[K] extends Record<string, any> ? NestedFields<T[K]> : never;
};

export type TypedSelection<T extends string> = NestedFields<
  ExtractFieldNames<T>
>;
