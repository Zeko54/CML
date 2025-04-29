const container = document.querySelector(".circle-container");

const circles = [
  { top: "0%", left: "85%", size: "60vmin" },
  { top: "60%", right: "80%", size: "60vmin" },
  { top: "8%", right: "80%", size: "40vmin" },
  { top: "30%", left: "55%", size: "40vmin" },
  { top: "80%", left: "70%", size: "30vmin" },
  { top: "60%", right: "60%", size: "30vmin" },
];

circles.forEach((data) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.style.width = data.size;
  circle.style.height = data.size;
  circle.style.top = data.top;
  circle.style.left = data.left;
  circle.style.right = data.right;

  container.appendChild(circle);
});
