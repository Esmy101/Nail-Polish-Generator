let FlackieHolo = "../pictures/topperpolishpics/Flackie Holo.jpg";
let LinearHolo = "../pictures/topperpolishpics/Linear Holo.jpg";
let ScatteredHolo = "../pictures/topperpolishpics/Scattered Holo.jpg";

const TopPolish = [
  {
    image: FlackieHolo,
  },
  {
    image: LinearHolo,
  },
  {
    image: ScatteredHolo,
  },
];

// will return one top polish randomly from the array
const randomElement = TopPolish[Math.floor(Math.random() * TopPolish.length)];
