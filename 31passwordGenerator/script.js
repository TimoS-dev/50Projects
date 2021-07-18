const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  upper: randomUpper,
  lower: randomLower,
  number: randomNumber,
  symbol: randomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("copied");
});

generateEl.addEventListener("click", function () {
  const length = parseInt(lengthEl.value);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(upper, lower, number, symbol, length) {
  let password = "";
  let typesCount = upper + lower + number + symbol;
  let typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return "";
  }
  console.log(typesArr);
  for (let i = 1; i <= length; i++) {
    if (upper == true) {
      password = password + randomUpper();
    }
    if (lower == true) {
      password = password + randomLower();
    }
    if (number == true) {
      password = password + randomNumber();
    }
    if (symbol == true) {
      password = password + randomSymbol();
    }
  }
  password = password.slice(0, length);
  return password;
}

function randomUpper() {
  return String.fromCharCode(Math.floor(65 + Math.floor(Math.random() * 26)));
}
function randomLower() {
  return String.fromCharCode(Math.floor(97 + Math.floor(Math.random() * 26)));
}
function randomNumber() {
  return String.fromCharCode(Math.floor(48 + Math.floor(Math.random() * 10)));
}
function randomSymbol() {
  const symbols = '!"§$%&/()=?`{[]}+*~<>|-²³€@µ^°';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
