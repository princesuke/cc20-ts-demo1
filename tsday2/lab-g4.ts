function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

const a = reverseArray([1,2,3]); 
const b = reverseArray(["a", "b"]);

console.log(a);