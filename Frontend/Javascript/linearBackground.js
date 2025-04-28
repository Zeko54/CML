const container = document.querySelector(".circle-container");

const circles = [
  { top: "5%", left: "80%", size: "40vmin" },
  { top: "20%", left: "20%", size: "30vmin" },
  { top: "40%", left: "60%", size: "50vmin" },
  { top: "60%", left: "25%", size: "35vmin" },
  { top: "80%", left: "65%", size: "45vmin" },
  { top: "35%", left: "45%", size: "30vmin" },
  { top: "15%", left: "50%", size: "25vmin" },
];

circles.forEach((data) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.style.width = data.size;
  circle.style.height = data.size;
  circle.style.top = data.top;
  circle.style.left = data.left;

  container.appendChild(circle);
});
