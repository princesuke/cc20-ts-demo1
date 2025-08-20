function mapIdentity<T>(items: T[]): T[] {
    return items;
}

mapIdentity(["a", "b"]);

console.log(mapIdentity([1,2,3]));