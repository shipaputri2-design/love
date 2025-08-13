const container = document.getElementById("heart");

for (let t = 0; t < Math.PI * 2; t += 0.2) {
  let x = 16 * Math.pow(Math.sin(t), 3);
  let y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
  
  let scale = 15;
  let left = 250 + x * scale;
  let top = 250 - y * scale;
  let span = document.createElement("span");
  span.className = "love";
  span.style.left = `${left}px`;
  span.style.top = `${top}px`;
  span.textContent = "I Love You";

  span.style.animationDelay = `${Math.random() * 2}s`;

  container.appendChild(span);
}