let value: any = 30;
let safeValue: unknown = "Hello"; 

// console.log(value.toUpperCase());


if(typeof safeValue === "string"){
    console.log(safeValue.toUpperCase());
}

// safeValue.toUpperCase()