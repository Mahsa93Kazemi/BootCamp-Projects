const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = parseInt(localStorage.getItem("currentActive")) || 1;

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;

  localStorage.setItem("currentActive", currentActive);
};

next.addEventListener("click", () => {
  currentActive = Math.min(currentActive + 1, circles.length);
  update();
});

prev.addEventListener("click", () => {
  currentActive = Math.max(currentActive - 1, 1);
  update();
});

circles.forEach((circle, idx) => {
  circle.addEventListener("click", () => {
    currentActive = idx + 1;
    update();
  });
});

update();
