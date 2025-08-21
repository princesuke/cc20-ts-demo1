type StackAPI<T> = {
    push: (item: T) => void;
    pop: ()=> T | undefined;
    size: ()=> number;
}

function createStack<T>() : StackAPI<T> {
    const storage: T[] = [];
    return {
       push(item: T) { storage.push(item) },
       pop(){ return storage.pop() },
       size(){ return storage.length }
    }
}

const numberStack = createStack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop());   // 20
console.log(numberStack.size());  // 1

const stringStack = createStack<string>();
stringStack.push("apple");
stringStack.push("banana");
console.log(stringStack.pop());   // "banana"
console.log(stringStack.size());  // 1

