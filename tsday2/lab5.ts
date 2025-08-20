function swap<A,B>(pair: [A, B]):[B, A] {
    return [pair[1], pair[0]];
}

const p1 = swap([1, "one"]);
const p2 = swap([true, 99]);

console.log(p1);
console.log(p2);