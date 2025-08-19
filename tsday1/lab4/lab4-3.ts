interface Order {
    readonly orderId: number;
    customer: string;
    items: string[];
}

const order1: Order = {
    orderId: 1001,
    customer: "Charlie",
    items: ["Book", "Pen"],
}

order1.orderId = 2;
order1.customer = "john";

console.log(order1);