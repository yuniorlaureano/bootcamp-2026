document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submitted");
        console.log(event);
        const form = new FormData(event.target);
        const billAmount = parseFloat(form.get("billAmount"));
        const tipPercentage = parseFloat(form.get("tipPercentage"));
        const { tipAmount, totalAmount } = calculateTip(billAmount, tipPercentage);
        updateTipDisplay(tipAmount, totalAmount);
    });
});

function calculateTip(billAmount, tipPercentage) {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    return {
        tipAmount: tipAmount.toFixed(2),
        totalAmount: totalAmount.toFixed(2)
    };
}

function updateTipDisplay(tipAmount, totalAmount) {
    document.getElementById("tip-amount").textContent = tipAmount;
    document.getElementById("total-amount").textContent = totalAmount;
}