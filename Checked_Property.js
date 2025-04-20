const myCheck = document.getElementById("checkbox");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const paypal = document.getElementById("paypal");
const subRes = document.getElementById("subRes");
const paymentRes = document.getElementById("paymentRes");
const mySub = document.getElementById("sub");

mySub.onclick = function() {
    if (myCheck.checked) {
        subRes.textContent = `You are Subscribed!!`;
    }

    else {
        subRes.textContent = `You are NOT Subscribed!!`
    }

    if (visa.checked) {
        paymentRes.textContent = `You Payment is Made by Visa Card`;
    }

    else if (master.checked) {
        paymentRes.textContent = `You Payment is Made by Master Card`;
    }

    else if (paypal.checked) {
        paymentRes.textContent = `You Payment is Made by PayPal Card`;
    }

    else {
        paymentRes.textContent = "Subscribe First!!";
    }
}