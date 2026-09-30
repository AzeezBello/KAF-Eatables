import type { StaticImageData } from "next/image";

import smallChopsPlatter from "@/public/images/small-chops-platter.jpg";
import smallChopsFoilTray from "@/public/images/small-chops-foil-tray.jpg";
import samosaSpringRollsTray from "@/public/images/samosa-spring-rolls-tray.jpg";
import springRolls from "@/public/images/spring-rolls.jpg";
import puffPuffBowl from "@/public/images/puff-puff-bowl.jpg";
import stickMeat from "@/public/images/stick-meat.jpg";
import pepperedFriedChicken from "@/public/images/peppered-fried-chicken.jpg";
import grilledChicken from "@/public/images/grilled-chicken.jpg";
import chickenKebabGrill from "@/public/images/chicken-kebab-grill.jpg";
import chickenAndChips from "@/public/images/chicken-and-chips.jpg";
import friedChickenPlantain from "@/public/images/fried-chicken-plantain.jpg";
import mixedBasket from "@/public/images/mixed-basket-chicken-gizzard.jpg";
import partyPacksBoats from "@/public/images/party-packs-boats.jpg";
import chickenAndFriesPacks from "@/public/images/chicken-and-fries-packs.jpg";
import puffPuffChickenBaskets from "@/public/images/puff-puff-chicken-baskets.jpg";
import kafSandwiches from "@/public/images/kaf-sandwiches.jpg";

export const categories = [
  "All",
  "Small Chops",
  "Grills & Chicken",
  "Party Packs",
  "Sandwiches & Wraps",
] as const;

export type Category = Exclude<(typeof categories)[number], "All">;

export type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  /** Real KAF photo. Items without one fall back to the branded placeholder. */
  image?: StaticImageData;
  popular?: boolean;
};

export const products: Product[] = [
  // Small chops
  { id: 1, name: "Classic Small Chops Platter", category: "Small Chops", price: 4500, description: "Spring rolls, samosa, puff puff and peppered chicken. The crowd favourite.", image: smallChopsPlatter, popular: true },
  { id: 2, name: "Loaded Small Chops Tray", category: "Small Chops", price: 8500, description: "A generous foil tray of mixed chops for meetings, hangouts and celebrations.", image: smallChopsFoilTray },
  { id: 3, name: "Samosa & Spring Roll Tray", category: "Small Chops", price: 7000, description: "Crisp samosas, golden spring rolls and puff puff, packed to share.", image: samosaSpringRollsTray },
  { id: 4, name: "Spring Rolls (10 pcs)", category: "Small Chops", price: 3000, description: "Hand-rolled, fried golden and crunchy with a savoury filling.", image: springRolls },
  { id: 5, name: "Puff Puff (20 pcs)", category: "Small Chops", price: 2000, description: "Soft, fluffy and lightly sweet. Fried fresh to order.", image: puffPuffBowl, popular: true },
  { id: 6, name: "Stick Meat (6 pcs)", category: "Small Chops", price: 3500, description: "Battered sausage sticks, fried golden. Great for parties.", image: stickMeat },

  // Grills & chicken
  { id: 7, name: "Peppered Fried Chicken Tray", category: "Grills & Chicken", price: 6000, description: "Well-seasoned, crispy fried chicken pieces tossed in KAF pepper sauce.", image: pepperedFriedChicken, popular: true },
  { id: 8, name: "Grilled Chicken", category: "Grills & Chicken", price: 5500, description: "Marinated chicken grilled over charcoal for that smoky finish.", image: grilledChicken },
  { id: 9, name: "Chicken Kebab Skewers", category: "Grills & Chicken", price: 4000, description: "Chicken and peppers on skewers, grilled fresh.", image: chickenKebabGrill },
  { id: 10, name: "Chicken & Chips", category: "Grills & Chicken", price: 4500, description: "Crispy chicken with chips and a pot of KAF sauce.", image: chickenAndChips },
  { id: 11, name: "Chicken & Plantain", category: "Grills & Chicken", price: 4500, description: "Fried chicken with sweet fried plantain and pepper sauce.", image: friedChickenPlantain },
  { id: 12, name: "Chicken & Gizzard Basket", category: "Grills & Chicken", price: 5000, description: "Fried chicken, gizzard, stick meat and puff puff in one basket.", image: mixedBasket },

  // Party packs
  { id: 13, name: "Party Pack (per guest)", category: "Party Packs", price: 3500, description: "Puff puff, sausage, chicken and corn in a serving boat. Priced per guest.", image: partyPacksBoats, popular: true },
  { id: 14, name: "Chicken & Fries Pack", category: "Party Packs", price: 4000, description: "Chicken, crinkle fries and sauce in a sealed party pack.", image: chickenAndFriesPacks },
  { id: 15, name: "Puff Puff & Chicken Basket", category: "Party Packs", price: 3000, description: "Branded basket of puff puff and peppered chicken. Perfect for guests.", image: puffPuffChickenBaskets },

  // Sandwiches & wraps
  { id: 16, name: "KAF Club Sandwich", category: "Sandwiches & Wraps", price: 2500, description: "Fresh triangle sandwich, individually packed and sealed.", image: kafSandwiches },
  { id: 17, name: "KAF Chicken Burger", category: "Sandwiches & Wraps", price: 4500, description: "Juicy chicken patty, fresh vegetables and house sauce in a soft bun." },
  { id: 18, name: "Chicken Shawarma", category: "Sandwiches & Wraps", price: 4500, description: "Seasoned chicken, fresh veggies and creamy sauce wrapped to order." },
  { id: 19, name: "Beef Shawarma", category: "Sandwiches & Wraps", price: 5000, description: "Tender beef, crisp vegetables and KAF sauce in a warm wrap." },
];

export const productById = new Map(products.map((p) => [p.id, p]));
