//Overload signatures
function formatInput(value: number): string;
function formatInput(value: string): string;

// const formatInput = (value: number): string => ''; 
// function formatInput(value: number): string {
//     return ''
// }

//Implementation

function formatInput(value: number | string): string {
    if(typeof value === "number") {
        return `Number: ${value}`;
    }
    return `String: ${value}`;
}

console.log(formatInput(123));
// console.log(formatInput("hello"));

