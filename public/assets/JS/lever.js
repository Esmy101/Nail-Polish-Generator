//Lever Control
let leverControl = document.getElementById("leverControl");
let Polish = $(".polish");
let Top = $(".topper");
let Top2 = $(".topper2");
var x = $("#myCheck");
var x2 = $("#myCheck2");
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
  let topper2 = generateRandomTopper().name;

  while (topper == topper2) {
    topper2 = generateRandomTopper().name;
  }

  displayCombo(polish, topper, topper2);

  setTimeout(reset, 1000);
});

//Generate random nail polish combo
function displayCombo(polish, topper, topper2) {
  $(Polish).text(polish);

  if ($(x).is(":checked")) {
    $(Top).text(topper);
  } else {
    $(Top).text("");
  }

  if ($(x2).is(":checked")) {
    $(Top2).text(topper2);
  } else {
    $(Top2).text("");
  }
}
