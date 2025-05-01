function calculateCost() {
  // Define costs per day by destination
  const costs = {
    Mexico: 80,
    Oaxaca: 65,
    Cancun: 110,
  };

  const air = {
    Mexico: 500,
    Oaxaca: 400,
    Cancun: 650,
  };

// Get selected destination (JS Feature - Feedback Storage)
const destinationRadios = document.getElementsByName("destination");
let selectedDestination;
for (let radio of destinationRadios) {
  if (radio.checked) {
    selectedDestination = radio.value;
    break;
  }
}

// Get duration (JS Feature - Feedback Storage)
const days = parseInt(document.getElementById("numDays").value, 10);

// Validate inputs (JS Feature - Form Validation)
if (!selectedDestination) {
  document.getElementById("result").innerText = "Please select a destination.";
  return;
}
if (isNaN(days) || days <= 0) {
  document.getElementById("result").innerText = "Please enter a valid number of days (greater than 0).";
  return;
}

// Calculate total cost (JS Feature - Total Price Calculation)
const totalCost = air[selectedDestination] + (costs[selectedDestination] * days);

// Display result
document.getElementById("result").innerText = 
  `Total cost for ${days} days in ${selectedDestination.replace(/([A-Z])/g, ' $1')}: $${totalCost}`;
}

//Footer - Back to Top Button (JS Feature - Interactive Button)
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
