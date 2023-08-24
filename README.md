# selection-set-to-type

**Experimental** utility to convert a GraphQL selection set into a TypeScript type.

Turn a string like this:

```ts
const selection = `
  {
    a
    b {
      a
      b
      c
    }
    c
    e
    f
    g
  }
`;
```

Into a type like this:

```ts
type T {
    a: unknown;
    b: {
        a: unknown;
        b: unknown;
        c: unknown;
    };
    c: unknown;
    e: unknown;
    f: unknown;
    g: unknown;
}
```
