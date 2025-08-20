function wrapInArray<T>(value: T): T[] {
    return [value];
}

const a = wrapInArray("hello");
const b = wrapInArray(42);

console.log(a, b);