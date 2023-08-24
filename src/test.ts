import { TypedSelection } from ".";

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

const typedObject = {} as TypedSelection<typeof selection>;

console.log(typedObject.a);
console.log(typedObject.b.a);
console.log(typedObject.b.b);
console.log(typedObject.b.c);
console.log(typedObject.c);
console.log(typedObject.e);
console.log(typedObject.f);
console.log(typedObject.g);
