type PaymentStatus = "paid" | "unpaid" | "pending";

// enum PaymentStatus {
//     Paid = "paid",
//     Unpaid = "unpaid",
//     Pending = "pending"
// }

function checkStatus(status: PaymentStatus) {
    if(status === "paid") {
        console.log("Payment completed!");
    } else if(status === "unpaid") {
        console.log("Payment not receivd");
    } else {
        console.log("Waiting for payment")
    }
}

checkStatus("paid");
checkStatus("unpaid");
checkStatus("pending");