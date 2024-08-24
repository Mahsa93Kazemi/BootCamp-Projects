function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(element) {
  const newColor = generateRandomColor();
  element.style.backgroundColor = newColor;
  element.querySelector(".color-code").innerText = newColor;
}

function changeColorsOnLoad() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    changeColor(box);
  });
}

function changeToPresetColor(event, color) {
  event.stopPropagation();
  const box = event.target.parentElement.parentElement;
  box.style.backgroundColor = color;
  box.querySelector(".color-code").innerText = color;
}
