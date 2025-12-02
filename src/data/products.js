import masalaImg from "../assets/images/masala.png";
import elaichiImg from "../assets/images/elaichi.png";
import premiumImg from "../assets/images/premium.png";
import goldImg from "../assets/images/gold.png";
import goldStandingImg from "../assets/images/gold-standing.png";

const base = import.meta.env.BASE_URL;
const products = [
  {
    id: "masala",
    name: "Tea Castle Masala",
    category: "Masala Chai",
    note:
      "The perfect balance of tea and spices. Assam tea blended with a special spice mix for a bold, invigorating chai that awakens the senses.",
    weight: "250g / ₹10 pouch / loose 5kg–10kg",
    price: 200, 
    image: masalaImg,
  },

  {
    id: "elaichi",
    name: "Tea Castle Elaichi",
    category: "Elaichi Chai",
    note:
      "Cardamom-infused delight. Signature Assam tea with the warm, soothing aroma of elaichi.",
    weight: "250g / ₹10 pouch / loose 5kg–10kg",
    price: 200,
    image: elaichiImg,
  },

  {
    id: "premium",
    name: "Tea Castle Premium",
    category: "Assam Black Tea",
    note:
      "Classic everyday luxury flavor. Crafted from carefully chosen Assam leaves — bold yet balanced for daily tea.",
    weight: "250g / ₹10 pouch / loose 5kg–10kg",
    price: 250,
   image: premiumImg,
  },

  {
    id: "gold",
    name: "Tea Castle Gold",
    category: "Signature Reserve Assam Tea",
    note:
      "Our finest leaf blend. Refined taste with lingering aroma for premium daily tea lovers.",
    weight: "250g / ₹10 pouch / loose 5kg–10kg",
    price: 300,
    image: goldImg,
  },

  {
    id: "gold-standing-pouch",
    name: "Tea Castle Gold (Standing Pouch)",
    category: "Signature Reserve Assam Tea",
    note:
      "The pinnacle of Tea Castle craftsmanship. Richest Assam blend sealed for freshness in a standing pouch.",
    weight: "250g",
    price: 300,
    image: goldStandingImg,
  },
];

export default products;
