// Elements
const form = document.querySelector("#registerForm");
const steps = document.querySelectorAll(".step");
const indicators = document.querySelectorAll(".indicator");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

// Step
let currentStep = 0;

// Moving Trough Steps
const move = (n) => {
  // Stop Movement if Form is Not Valid
  if (n === 1 && !validateForm()) return false;

  // Remove current step and pass value for next one
  steps[currentStep].style.display = "none";
  currentStep = currentStep + n;

  // Submit for mand stop register if submit button is clicked
  if (currentStep >= steps.length) {
    form.submit();
    return false;
  }

  // Show next step
  showStep(currentStep);
};

// Validation for Form
const validateForm = () => {
  // Set Initial Data
  let inputs = steps[currentStep].querySelectorAll("input");
  let valid = true;

  // Check if any inputs is empty
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      inputs[i].className += "invalid";
      valid = false;
    }
  }

  // If everthing is okay, continue with movement
  if (valid) {
    indicators[currentStep].className += " finish";
  }
};

// Show exact step
const showStep = (n) => {
  // Show next step
  steps[n].style.display = "block";

  // Update buttons based on changes
  if (n === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (n === steps.length - 1) {
    nextBtn.innerHTML = "Submit";
  } else {
    nextBtn.innerHTML = "Next";
  }

  // Update indicators
  stepIndicator(n);
};

// Set step indicators
const stepIndicator = (n) => {
  // Remove active indicator styling
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace("active", "");
  }

  // Show active indicator
  indicators[n].className += " active";
};

// Show first step
showStep(currentStep);
