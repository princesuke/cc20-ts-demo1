type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const employee: Person = {
    name: "Alice",
    age: 30
}