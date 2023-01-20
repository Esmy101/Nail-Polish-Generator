/* 
    categories: Cremes , Holographic , Multichrome , Metallic, Toppers
    types: NailPolish , TopPolish
*/

// Array of all the nail polishes
let polish = [
  { name: "Black", category: Cremes, type: NailPolish },
  { name: "Royal Blue", category: Cremes, type: NailPolish },
  { name: "Linear Holo", category: Toppers, type: TopPolish },
  { name: "Flakie Holo", category: Toppers, type: TopPolish },
  { name: "Scattered Holo", category: Toppers, type: TopPolish },
];

// will return one nail polish randomly from the array
const randomNail = NailPolish[Math.floor(Math.random() * NailPolish.length)];

// will return one top polish randomly from the array
const randomTop = TopPolish[Math.floor(Math.random() * TopPolish.length)];
