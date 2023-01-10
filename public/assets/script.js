//Lever Control
let leverControl = document.getElementById("leverControl");

leverControl.addEventListener(
  "click",
  () => {
    gsap.fromTo(
      ".lever",
      { rotate: 30 },
      { rotate: -80, duration: "1", repeat: 0, ease: "Sine.out" }
    );
  },
  { once: true }
);
