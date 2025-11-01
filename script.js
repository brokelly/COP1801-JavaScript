// ---------------------------------------------
// File: script.js
// Author: Brooke Kelly
// Description: Tip Calculator using Functions
// ---------------------------------------------

// Function to verify service quality
function checkServiceQuality(quality) {
  if (typeof quality !== "string") return false;
  quality = quality.trim().toLowerCase();
  return quality === "great" || quality === "ok" || quality === "poor";
}

// Function to verify service amount range
function checkServiceAmount(amount) {
  return typeof amount === "number" && !isNaN(amount) && amount >= 5 && amount <= 500;
}

// Function to calculate tip
function calculateTip(amount, quality) {
  const q = quality.trim().toLowerCase();
  let tipRate;
  if (q === "great") tipRate = 0.20;
  else if (q === "ok") tipRate = 0.15;
  else tipRate = 0.10;
  return amount * tipRate;
}

// Prompt user input
let amount = prompt("Enter the dollar amount of the service (between $5 and $500):");
let quality = prompt("Was the service great, ok, or poor?");

// Handle cancel / whitespace
if (amount === null || quality === null) {
  alert("Operation cancelled.");
} else {
  amount = parseFloat(amount);

  // Validation checks
  if (!checkServiceAmount(amount)) {
    alert("Invalid amount entered. Please enter a value between $5 and $500.");
  } else if (!checkServiceQuality(quality)) {
    alert("Invalid service quality entered. Please enter great, ok, or poor.");
  } else {
    const tip = calculateTip(amount, quality);
    alert(
      `For a $${amount.toFixed(2)} service with ${quality.trim().toLowerCase()} service, ` +
      `the recommended tip is $${tip.toFixed(2)}.`
    );
  }
}
