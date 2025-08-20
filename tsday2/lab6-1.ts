type EmailNotification = { email: string; subject: string }
type SMSNotification = { phone: string; message: string }

function sendNotification(noti: EmailNotification | SMSNotification) {
    if ("email" in noti) {
        console.log(`Sending EMAIL to ${noti.email}: ${noti.subject}`)
    } else {
        console.log(`Sending SMS to ${noti.phone}: ${noti.message}`);
    }

}

sendNotification({ email: "user@test.com", subject: "Welcome!" });
sendNotification({ phone: "0812345678", message: "OTP: 1234" });