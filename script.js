let inputColor1 = document.getElementById("color1");
let inputColor2 = document.getElementById("color2");
let css = document.querySelector("h3");
let body = document.getElementsByTagName("body")[0];
let btnRandom = document.querySelector("#randomColor");

const linearGradient = () => {
  return `linear-gradient(to right, ${inputColor1.value}, ${inputColor2.value})`;
};

const setBackground = () => {
  return body.style.background = linearGradient();
};

const setCssText = () => {
  return css.innerText= linearGradient();
};

const inputColor = () => {
  setBackground();
  setCssText();
};

const generateRandomColor = () => {
  let maxValue = 0xFFFFFF;
  let randomNumber = Math.random() * maxValue;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  randomColor = randomNumber.padStart(6, 0);
  return `#${randomColor}`;
};

setBackground();
setCssText();

inputColor1.addEventListener('input', inputColor);
inputColor2.addEventListener('input', inputColor);
btnRandom.addEventListener("click", () => {
  inputColor1.value = generateRandomColor();
  inputColor2.value = generateRandomColor();
  inputColor();
})
