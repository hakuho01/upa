const upa = document.getElementById("upa")

let mouseX = 0
let step = 0;
let direction = 1;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX
});

function moveUpa() {
  const stats = upa.getBoundingClientRect()
  const centerX = stats.left + stats.width / 2
  let right = parseFloat(getComputedStyle(upa).right) || 0;
  if (mouseX < centerX) {
      right += 1;
      direction = 1;
  } else if (mouseX > centerX) {
      right -= 1;
      direction = -1;
  } else {
      return;
  }

  upa.style.right = right + "px";

  step = 1 - step;
  upa.src = step === 0
      ? "image/upa_01.png"
      : "image/upa_02.png";

  upa.style.transform = `scaleX(${direction})`;

}

setInterval(() => moveUpa(), 200)



