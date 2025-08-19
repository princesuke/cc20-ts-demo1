function introduce(
    name: string,
    age?: number,
    country: string = "Thailand"
): string {
    if(age !== undefined) {
        return `Hi, my name is ${name}, I'm ${age} year old from ${country},`
    }
    return `Hi, my name is ${name} from ${country}`;
}


console.log(introduce("Alice"));
console.log(introduce("Bob", 30, "Japan"));
console.log(introduce("Charlie", undefined, "USA"));