let Black = "./assets/pictures/nailpolishpics/One-Coat Black.jpg";
let RoyalBlue = "./assets/pictures/nailpolishpics/Royal_Tea Blue.jpg";

const NailPolish = [
  {
    image: Black,
  },
  {
    image: RoyalBlue,
  },
];

// will return one nail polish randomly from the array
const randomElement = NailPolish[Math.floor(Math.random() * NailPolish.length)];
