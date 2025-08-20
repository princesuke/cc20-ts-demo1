function lastElement<T>(arr: T[]): T | undefined {
    return arr[arr.length  - 1];
    // return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log(lastElement([10, 20, 30]));

const a = [];

console.log(a[-1]);