const calculate = document.getElementById("calculate");

calculate.addEventListener("click", calculateTip);
window.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    calculateTip();
  }
});

function calculateTip() {
  // get input values
  // convert values to integers using parseFloat
  const billBeforeTip = parseFloat(document.getElementById("bill_value").value);
  const tipPercentage = parseFloat(document.getElementById("tip_value").value);

  // calculate tip
  const tipTotal = billBeforeTip * (tipPercentage / 100);
  // calcuate total bill with tip
  const billTotal = billBeforeTip + tipTotal;

  // display total bill with tip
  const totalContainer = document.getElementById("total");
  totalContainer.innerText = billTotal.toLocaleString('en', {style: "currency", currency: "USD"});
}

// EDGE CASES ======
// make sure the tip is not '0'! the purpose of the calculator is to get the tip!
// make sure the bill is not a negative value!

// STRETCH =====
// add number of people
// divide bill by the number of people and show that tip