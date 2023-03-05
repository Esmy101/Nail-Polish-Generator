//Lever Control
let leverControl = document.getElementById("leverControl");
let Polish = $(".polish");
let Top = $(".topper");

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

  let polish = generateRandomPolish().name;
  let topper = generateRandomTopper().name;

  displayCombo(polish, topper);

  setTimeout(reset, 1000);
});

//Generate random nail polish combo
//window.location.href = "index.html";

function displayCombo(polish, topper) {
  $(Polish).text(polish);
  $(Top).text(topper);
}
//No duplicated toppers
