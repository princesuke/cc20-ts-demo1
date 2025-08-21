type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

enum PaymentMethod {
    CreditCard,
    Paypal,
    BankTransfer
}



interface Order {
  id: number;
  customer: string;
  status: OrderStatus;
  method: PaymentMethod;
  amount: number;
}


function getOrderSummary(order: Order): string {
    let payment: string;

    switch(order.method) {
        case PaymentMethod.CreditCard:
            payment = "Credit Card";
            break;
        case PaymentMethod.Paypal:
            payment = "Paypal";
            break;
        case PaymentMethod.BankTransfer:
            payment = "Bank Transfer";
            break;
    }

    return `Order #${order.id} (${order.customer}) → ${order.status}, amount: ${order.amount}, paid with: ${payment}`;
}


const orders: Order[] = [
    {
        id: 1,
        customer: "Alice",
        status: "pending",
        method: PaymentMethod.CreditCard,
        amount: 100
    },
    {
        id: 2,
        customer: "Bob",
        status: "paid",
        method: PaymentMethod.Paypal,
        amount: 250
    },
    {
        id: 3,
        customer: "Charlie",
        status: "shipped",
        method: PaymentMethod.BankTransfer,
        amount: 400
    }
];


orders.forEach((o) => console.log(getOrderSummary(o)));


function plunk<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map((item) => item[key]);
}


console.log("Order IDs", plunk(orders, "id"));
console.log("Status", plunk(orders, "status"));

//ข้อ5
type OrderBasic = Pick<Order, "id" | "status">;

const readonlyOrder: Readonly<Order> = orders[0]!;
// readonlyOrder.amount = 23;


const raw = '{"id":4,"customer":"David","status":"paid","method":0,"amount":999}';

const parsed = JSON.parse(raw) as Order

console.log("json=>", parsed.customer);