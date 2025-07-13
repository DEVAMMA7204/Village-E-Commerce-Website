// JS functionality for toggles, UI, etc.
// js/app.js

// Basic Cart Total Calculator
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.querySelectorAll("tbody tr");
  let total = 0;

  cartItems.forEach((row) => {
    const price = parseInt(row.children[1].textContent.replace("₹", ""));
    const qtyInput = row.querySelector("input[type='number']");
    const quantity = parseInt(qtyInput.value);
    const rowTotal = price * quantity;
    row.children[3].textContent = "₹" + rowTotal;
    total += rowTotal;

    qtyInput.addEventListener("input", () => {
      const updatedQty = parseInt(qtyInput.value);
      const updatedTotal = price * updatedQty;
      row.children[3].textContent = "₹" + updatedTotal;
      updateGrandTotal();
    });
  });

  function updateGrandTotal() {
    let grandTotal = 0;
    document.querySelectorAll("tbody tr").forEach((row) => {
      const price = parseInt(row.children[1].textContent.replace("₹", ""));
      const qty = parseInt(row.querySelector("input").value);
      grandTotal += price * qty;
    });

    const totalElement = document.querySelector(".cart-summary strong");
    if (totalElement) totalElement.textContent = "Total: ₹" + grandTotal;
  }
});

