/* 
    categories: Cremes , Holographic , Multichrome , Metallic, Toppers
    types: NailPolish , TopPolish
*/

// Array of all the nail polishes
let options = [
  { name: "Black", category: "Cremes", type: "NailPolish" },
  { name: "Royal Blue", category: "Cremes", type: "NailPolish" },
  { name: "Linear Holo", category: "Toppers", type: "TopPolish" },
  { name: "Flakie Holo", category: "Toppers", type: "TopPolish" },
  { name: "Scattered Holo", category: "Toppers", type: "TopPolish" },
];

function generateRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateRandomPolish() {
  // will return one nail polish randomly from the array
  let polish = [];

  options.forEach((tempPolish) => {
    if (tempPolish.type == "NailPolish") {
      polish.push(tempPolish);
    }
  });

  return generateRandomItem(polish);
}

function generateRandomTopper() {
  // will return one top polish randomly from the array
  let polish = [];

  options.forEach((tempPolish) => {
    if (tempPolish.type == "TopPolish") {
      polish.push(tempPolish);
    }
  });

  return generateRandomItem(polish);
}
