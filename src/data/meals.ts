export interface MealType {
  id: number;
  mealName: string;
  price: number;
  description: string;
  category: number;
  srcImg: string;
}

export const meals: Array<MealType> = [
  {
    id: 0,
    mealName: "Buttermilk Pancakes",
    price: 8,
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    category: 2,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
  },
  {
    id: 1,
    mealName: "Diner Double",
    price: 17,
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    category: 1,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
  },
  {
    id: 2,
    mealName: "Godzilla Milkshake",
    price: 9,
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    category: 2,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-3.jpeg",
  },
  {
    id: 3,
    mealName: "Country Delight",
    price: 11,
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    category: 0,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
  },
  {
    id: 4,
    mealName: "Egg Attack",
    price: 16,
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    category: 1,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
  },
  {
    id: 5,
    mealName: "Oreo Dream",
    price: 8,
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    category: 2,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
  },
  {
    id: 6,
    mealName: "Bacon Overflow",
    price: 10,
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    category: 0,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-7.jpeg",
  },
  {
    id: 7,
    mealName: "American Classic",
    price: 13,
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    category: 1,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-8.jpeg",
  },
  {
    id: 8,
    mealName: "Quarantine Buddy",
    price: 9,
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    category: 2,
    srcImg: "https://react-projects-5-menu.netlify.app/images/item-9.jpeg",
  },
];
