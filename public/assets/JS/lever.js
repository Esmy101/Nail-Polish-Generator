//Lever Control
let leverControl = document.getElementById("leverControl");

function reset() {
  gsap.fromTo(
    ".lever",
    { rotate: -30 },
    { rotate: 30, duration: "1", repeat: 0, ease: "Sine.out" }
  );
}

leverControl.addEventListener("click", () => {
  gsap.fromTo(
    ".lever",
    { rotate: 30 },
    { rotate: -30, duration: "1", repeat: 0, ease: "Sine.out" }
  );

  setTimeout(reset, 1000);
});

//Generate random nail polish combo
