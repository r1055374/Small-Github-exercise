const button = document.getElementById("changeTitle");

//Found this random color generator at https://stackoverflow.com/questions/74280613/how-to-change-background-color-randomly-in-a-javascript-function
const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  newColor = r * 0.299 + g * 0.587 + b * 0.114;
  if (newColor > 186) {
    newColor = "black";
  } else {
    newColor = "white";
  }
  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", () => {
  document.querySelector("h1").innerText = "JavaScript is geweldig!";
  document.getElementById("mainText").innerText += " Hier is extra tekst!";
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById("hiddenText").style.display = "none";
});
