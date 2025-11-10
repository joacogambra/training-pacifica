export type Product = {
  slug: string
  name: string
  price: string
  image: string
  colors: { name: string; hex: string }[]
  sizes: string[]
  description: string
}

export const products: Product[] = [
  {
    slug: "maris-bikini",
    name: "Maris Bikini",
    price: "$89.99",
    image: "/images/9.png",
    colors: [
      { name: "Teal", hex: "#008080" },
      { name: "Pink", hex: "#FFC0CB" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Aella Bikini features a classic triangle top and tie-side bottoms, designed for a perfect, adjustable fit. Made from our signature recycled fabric, it's as comfortable as it is stylish, ready for any beach adventure.",
  },
  {
    slug: "nixie-bikini",
    name: "Nixie Bikini",
    price: "$94.99",
    image: "/images/11.png",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Beige", hex: "#F5DEB3" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Make a statement with the Sirena Bikini. Its vibrant colors and flattering cut are designed to turn heads. The supportive top and cheeky bottoms offer a blend of comfort and confidence.",
  },
  {
    slug: "ester-bikini",
    name: "Ester Bikini",
    price: "$84.99",
    image: "/images/13.png",
    colors: [
      { name: "Brown", hex: "#5D4037" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Light Green", hex: "#90EE90" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Embrace earthy tones with the Calypso Bikini. This set offers a comfortable, secure fit with a touch of bohemian charm. Perfect for lounging by the sea or taking a dip in crystal-clear waters.",
  },
  {
    slug: "bikini-bonita-cream",
    name: "Bikini Bonita",
    price: "$92.99",
    image: "/images/47.png",
    colors: [
      { name: "Cream", hex: "#F5F5DC" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Bonita Bikini offers timeless elegance with its underwire support and classic silhouette. Designed for all-day comfort and style, this set is perfect for the modern beach enthusiast.",
  },
  {
    slug: "bikini-bonita-black",
    name: "Bikini Bonita",
    price: "$92.99",
    image: "/images/48.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Cream", hex: "#F5F5DC" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Bonita Bikini offers timeless elegance with its underwire support and classic silhouette. Designed for all-day comfort and style, this set is perfect for the modern beach enthusiast.",
  },
  {
    slug: "bikini-azores-burgundy",
    name: "Bikini Azores",
    price: "$96.99",
    image: "/images/bikini-azores-burgundy.png",
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Navy", hex: "#000080" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Azores Bikini combines sophisticated style with ultimate comfort. Featuring an underwire top for support and a sleek design, this set is ideal for those who want to make a statement.",
  },
  {
    slug: "bikini-azores-navy",
    name: "Bikini Azores",
    price: "$96.99",
    image: "/images/bikini-azores-blue.png",
    colors: [
      { name: "Navy", hex: "#000080" },
      { name: "Burgundy", hex: "#800020" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Azores Bikini combines sophisticated style with ultimate comfort. Featuring an underwire top for support and a sleek design, this set is ideal for those who want to make a statement.",
  },
]
