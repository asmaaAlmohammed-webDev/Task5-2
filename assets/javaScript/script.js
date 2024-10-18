const inputBox = document.getElementById("input_box");
const resultBox = document.getElementById("result_box");
const btnClear = document.querySelector(".btn-danger");
const btnConversion = document.querySelector(".btn-secondary");
let fromCategory, toCategory;

// events listener & functions

btnClear.addEventListener("click", () => {
  inputBox.value = "";
  resultBox.value = "";
});

btnConversion.addEventListener("click", () => {
  fromCategory = inputCategory.value;
  toCategory = resultCategory.value;
  if (fromCategory === "meter" && toCategory === "kilometer")
    resultBox.value = Number(inputBox.value) * 0.001;
  else if (fromCategory === "meter" && toCategory === "centimeter")
    resultBox.value = Number(inputBox.value) * 100;
  else if (fromCategory === "meter" && toCategory === "meter")
    resultBox.value = inputBox.value;
  else if (fromCategory === "kilometer" && toCategory === "meter")
    resultBox.value = Number(inputBox.value) * 1000;
  else if (fromCategory === "kilometer" && toCategory === "centimeter")
    resultBox.value = Number(inputBox.value) * 100000;
  else if (fromCategory === "kilometer" && toCategory === "kilometer")
    resultBox.value = inputBox.value;
  else if (fromCategory === "centimeter" && toCategory === "kilometer")
    resultBox.value = Number(inputBox.value) * 0.00001;
  else if (fromCategory === "centimeter" && toCategory === "meter")
    resultBox.value = Number(inputBox.value) * 0.01;
  else if (fromCategory === "centimeter" && toCategory === "centimeter")
    resultBox.value = inputBox.value;
});
