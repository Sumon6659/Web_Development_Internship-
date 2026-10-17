// Functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (b === 0 ? "Cannot divide by 0" : a / b);

function calculate(a, b, op) {
  if (op === "+") return add(a, b);
  if (op === "-") return sub(a, b);
  if (op === "*") return mul(a, b);
  if (op === "/") return div(a, b);
  return "Invalid";
}

// Wire
const aEl = document.getElementById("a");
const bEl = document.getElementById("b");
const op = document.getElementById("op");
const out = document.getElementById("out");

document.getElementById("go").addEventListener("click", (e) => {
  // Visual Ripple
  triggerRipple(e.currentTarget, e);

  const a = Number(aEl.value), b = Number(bEl.value);
  if (Number.isNaN(a) || Number.isNaN(b) || aEl.value.trim() === "" || bEl.value.trim() === "") {
    out.textContent = "= দুইটা number দাও";
    triggerShake();
    return;
  }

  const result = calculate(a, b, op.value);
  out.textContent = "= " + result;
  triggerPop();
});

console.log("QuickCalc loaded ✓");

/* ==========================================================================
   Smooth UI Animations & Interactions (Visual Enhancements)
   ========================================================================== */

const cardEl = document.getElementById("card");
const resetBtn = document.getElementById("resetBtn");
const opButtons = document.querySelectorAll(".op-btn");

// Trigger Result Pop Animation
function triggerPop() {
  out.classList.remove("pop");
  void out.offsetWidth; // Force Reflow
  out.classList.add("pop");
}

// Trigger Card Shake on Error
function triggerShake() {
  cardEl.classList.remove("shake");
  void cardEl.offsetWidth; // Force Reflow
  cardEl.classList.add("shake");
}

// Button Ripple Effect
function triggerRipple(button, event) {
  if (!button) return;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;

  const x = event && event.clientX ? event.clientX - rect.left - size / 2 : rect.width / 2 - size / 2;
  const y = event && event.clientY ? event.clientY - rect.top - size / 2 : rect.height / 2 - size / 2;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  const oldRipple = button.querySelector(".ripple");
  if (oldRipple) oldRipple.remove();

  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

// Sync Operator Pills with Select dropdown
opButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    triggerRipple(btn, e);
    const chosenOp = btn.getAttribute("data-op");
    op.value = chosenOp;

    opButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

op.addEventListener("change", () => {
  opButtons.forEach((b) => {
    if (b.getAttribute("data-op") === op.value) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
});

// Reset Button
if (resetBtn) {
  resetBtn.addEventListener("click", (e) => {
    triggerRipple(resetBtn, e);
    aEl.value = "";
    bEl.value = "";
    op.value = "+";
    opButtons.forEach((b) => b.classList.toggle("active", b.getAttribute("data-op") === "+"));
    out.textContent = "= 0";
    triggerPop();
    aEl.focus();
  });
}

// Support Enter Key inside inputs to trigger calculation
[aEl, bEl].forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.getElementById("go").click();
    }
  });
});
