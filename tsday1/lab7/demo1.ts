// Overload signatures
function reverse(input: string): string;
function reverse(input: number[]): number[];
function reverse(input: boolean[]): boolean[];

// Implementation

function reverse(input: string | number[] | boolean[]): string | number[] | boolean[] {
  return typeof input === "string"
    ? input.split("").reverse().join("")
    : input.slice().reverse();
}

console.log(reverse("hello"));   // "olleh"
console.log(reverse([1, 2, 3])); // [3, 2, 1]

