const refs = {
  buttonForGen: document.querySelector(".btn"),
  inputPass: document.querySelector(".input"),
  copyBtn: document.querySelector(".fa-copy"),
  alertContainer: document.querySelector(".alert-container"),
};
/* const symbolForPassLow =  */
refs.buttonForGen.addEventListener("click", () => {
  createPassword();
});
refs.copyBtn.addEventListener("click", () => {
  if (refs.inputPass.value) {
    copyPassword();
    refs.alertContainer.classList.add("active");
    setTimeout(() => {
      refs.alertContainer.classList.remove("active");
    }, 2000);
  }
});

// ---Переменные------------------------------------------
const arrayLowLetter = [];
const arrayUpLetter = [];
const arraySymbols = [];
const arrayNumbers = [];
const passwordLength = 14;
arrayOfSymbols(arrayLowLetter, "low");
arrayOfSymbols(arrayUpLetter, "high");
arrayOfSymbols(arraySymbols, "symb");
arrayOfSymbols(arrayNumbers, "num");
const newString = arrayLowLetter
  .concat(arrayUpLetter, arraySymbols, arrayNumbers)
  .join("");

// ---Функции------------------------------------------
function createPassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i += 1) {
    const randomNum = Math.floor(Math.random() * newString.length);

    password += newString.substring(randomNum, randomNum + 1);
  }
  refs.inputPass.value = password;
  refs.alertContainer.innerText = `${password} copied`;
}
function arrayOfSymbols(evt, symbols) {
  if (symbols === "low") {
    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
      evt.push(String.fromCharCode(i));
    }
  }
  if (symbols === "high") {
    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
      evt.push(String.fromCharCode(i));
    }
  }
  if (symbols === "symb") {
    for (let i = "!".charCodeAt(0); i <= "?".charCodeAt(0); i++) {
      if (Number(String.fromCharCode(i)) >= 0) {
      } else {
        evt.push(String.fromCharCode(i));
      }
    }
  }
  if (symbols === "num") {
    for (let i = "0".charCodeAt(0); i <= "9".charCodeAt(0); i++) {
      evt.push(String.fromCharCode(i));
    }
  }
}
function copyPassword() {
  refs.inputPass.select();
  refs.inputPass.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(refs.inputPass.value);
}
