function filterBy<T>(items: T[], pred:(x:T) => boolean): T[] {
    return items.filter(pred);
}

const result = filterBy([1,2,3,4], n=> n%2===0);
console.log(result);