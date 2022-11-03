const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
const nextButtons = multiStepForm.querySelectorAll("[data-next-step]");
const previousButtons = multiStepForm.querySelectorAll("[data-previous-step]");
const submitButton = multiStepForm.querySelector("[data-submit-step]");

let currentStep = formSteps.findIndex((step) => step.classList.contains("active"))

if (currentStep < 0) {
  currentStep = 0;
  formSteps[currentStep].classList.add("active");
}

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const allInputsAreValid = [...formSteps[currentStep].querySelectorAll("input")].every((input) => input.checkValidity());

    if (allInputsAreValid) {
      formSteps[currentStep].classList.remove("active");
      currentStep++;
      formSteps[currentStep].classList.add("active");
    }
  });
});

previousButtons.forEach((button) => {
  button.addEventListener("click", () => {
    formSteps[currentStep].classList.remove("active");
    currentStep--;
    formSteps[currentStep].classList.add("active");
  });
})

submitButton.addEventListener("click", () => {
  alert("Form submitted!");
})