export interface Product {
  id: string;
  title: string;
  price: number;
  swatchHex: string;
  images: string[];
  description: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Bordeaux Noir",
    price: 85.00,
    swatchHex: "#5B1217",
    images: ["https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"],
    description: "A deep, intoxicating red that commands the room. Handcrafted with multiple layers of gloss for a glass-like finish."
  },
  {
    id: "2",
    title: "Taupe Chrome",
    price: 95.00,
    swatchHex: "#8C7A70",
    images: ["https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?w=800&q=80"],
    description: "A modern neutral elevated with a subtle chromatic shift. Perfect for both boardroom elegance and evening glamour."
  },
  {
    id: "3",
    title: "Gilded Foil",
    price: 115.00,
    swatchHex: "#D4AF37",
    images: ["https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80"],
    description: "Authentic 24k gold leaf suspended in a crystal clear resin. The ultimate statement of luxury."
  },
  {
    id: "4",
    title: "Obsidian Velvet",
    price: 90.00,
    swatchHex: "#161313",
    images: ["https://images.unsplash.com/photo-1612887390768-fb02affea7a6?w=800&q=80"],
    description: "A matte black finish so dark it absorbs light, featuring a velvety texture that feels as luxurious as it looks."
  },
  {
    id: "5",
    title: "Canvas Silk",
    price: 85.00,
    swatchHex: "#FAF7F5",
    images: ["https://images.unsplash.com/photo-1690749138086-7422f71dc159?w=800&q=80"],
    description: "An ultra-clean, sheer milky white. The epitome of quiet luxury and effortless sophistication."
  },
  {
    id: "6",
    title: "Midnight Shimmer",
    price: 95.00,
    swatchHex: "#221D1D",
    images: ["https://images.unsplash.com/photo-1736434518489-0eb84070017f?w=800&q=80"],
    description: "Deep charcoal sprinkled with microscopic silver particulates that catch the light with every movement."
  }
];
