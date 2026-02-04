export type Product = {
  slug: string
  name: string
  price: string
  image: string
  colors: { name: string; hex: string }[]
  sizes: string[]
  description: string
  category: "bikini" | "swimsuit" | "bottom" | "top"
}

export const products: Product[] = [
  // Isla x Pacifica Collection
  {
    slug: "top-kaia-blue-isla",
    name: "Top Kaia Blue",
    price: "R$585,85",
    image: "/images/isla-pacifica/top-kaia-blue.png",
    colors: [
      { name: "Blue", hex: "#0077B6" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Top in vibrant blue features a halter neck design with adjustable tie straps. Part of our exclusive Isla x Pacifica collaboration, crafted with sustainable materials.",
    category: "top",
  },
  {
    slug: "top-kaia-light-blue-isla",
    name: "Top Kaia Light Blue",
    price: "R$585,85",
    image: "/images/isla-pacifica/top-kaia-light-blue.png",
    colors: [
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Blue", hex: "#0077B6" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Top in soft light blue features a halter neck design with adjustable tie straps. Part of our exclusive Isla x Pacifica collaboration, crafted with sustainable materials.",
    category: "top",
  },
  {
    slug: "top-kaia-pink-isla",
    name: "Top Kaia Pink",
    price: "R$585,85",
    image: "/images/isla-pacifica/top-kaia-pink.png",
    colors: [
      { name: "Pink", hex: "#FFC0CB" },
      { name: "Blue", hex: "#0077B6" },
      { name: "Light Blue", hex: "#ADD8E6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Top in vibrant pink features a halter neck design with adjustable tie straps. Part of our exclusive Isla x Pacifica collaboration, crafted with sustainable materials.",
    category: "top",
  },
  {
    slug: "top-iona-red-isla",
    name: "Top Iona Red",
    price: "R$585,85",
    image: "/images/isla-pacifica/top-iona-red.png",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Pink", hex: "#E91E63" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Top in bold red features a strapless bandeau design with a flattering twist detail. Part of our exclusive Isla x Pacifica collaboration.",
    category: "top",
  },
  {
    slug: "top-iona-pink-isla",
    name: "Top Iona Pink",
    price: "R$585,85",
    image: "/images/isla-pacifica/top-iona-pink.png",
    colors: [
      { name: "Pink", hex: "#E91E63" },
      { name: "Red", hex: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Top in vibrant pink features a strapless bandeau design with a flattering twist detail. Part of our exclusive Isla x Pacifica collaboration.",
    category: "top",
  },
  {
    slug: "bottom-kaia-blue-isla",
    name: "Bottom Kaia Blue",
    price: "R$585,85",
    image: "/images/isla-pacifica/bottom-kaia-blue.png",
    colors: [
      { name: "Blue", hex: "#0077B6" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Bottom in vibrant blue features a high-cut silhouette with double straps for a modern look. Part of our exclusive Isla x Pacifica collaboration.",
    category: "bottom",
  },
  {
    slug: "bottom-kaia-light-blue-isla",
    name: "Bottom Kaia Light Blue",
    price: "R$585,85",
    image: "/images/isla-pacifica/bottom-kaia-light-blue.png",
    colors: [
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Blue", hex: "#0077B6" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Bottom in soft light blue features a high-cut silhouette with double straps for a modern look. Part of our exclusive Isla x Pacifica collaboration.",
    category: "bottom",
  },
  {
    slug: "bottom-kaia-pink-isla",
    name: "Bottom Kaia Pink",
    price: "R$585,85",
    image: "/images/isla-pacifica/bottom-kaia-pink.png",
    colors: [
      { name: "Pink", hex: "#FFC0CB" },
      { name: "Blue", hex: "#0077B6" },
      { name: "Light Blue", hex: "#ADD8E6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Bottom in vibrant pink features a high-cut silhouette with double straps for a modern look. Part of our exclusive Isla x Pacifica collaboration.",
    category: "bottom",
  },
  {
    slug: "bottom-iona-red-isla",
    name: "Bottom Iona Red",
    price: "R$585,85",
    image: "/images/isla-pacifica/bottom-iona-red.png",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Pink", hex: "#E91E63" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Bottom in bold red features a high-cut design with thin double straps. Part of our exclusive Isla x Pacifica collaboration.",
    category: "bottom",
  },
  {
    slug: "bottom-iona-pink-isla",
    name: "Bottom Iona Pink",
    price: "R$585,85",
    image: "/images/isla-pacifica/bottom-iona-pink.png",
    colors: [
      { name: "Pink", hex: "#E91E63" },
      { name: "Red", hex: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Bottom in vibrant pink features a high-cut design with thin double straps. Part of our exclusive Isla x Pacifica collaboration.",
    category: "bottom",
  },
  {
    slug: "top-iona-black-isla",
    name: "Top Iona Black",
    price: "R$999",
    image: "/images/isla-pacifica/top-iona-black.png",
    colors: [
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Top in classic black features a strapless bandeau design with a flattering twist detail. Part of our exclusive Isla x Pacifica collaboration.",
    category: "top",
  },
  {
    slug: "bottom-iona-black-isla",
    name: "Bottom Iona Black",
    price: "R$999",
    image: "/images/isla-pacifica/bottom-iona-black.png",
    colors: [
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Bottom in classic black features a high-cut design with thin double straps. Part of our exclusive Isla x Pacifica collaboration.",
    category: "bottom",
  },
  {
    slug: "swim-kai-light-blue-isla",
    name: "Swim Kai Light Blue",
    price: "R$999",
    image: "/images/isla-pacifica/swim-kai-light-blue.png",
    colors: [
      { name: "Light Blue", hex: "#7DD8D8" },
      { name: "Viola", hex: "#9BB8D3" },
      { name: "Brown", hex: "#8B6914" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kai one-piece swimsuit in refreshing light blue features a deep V-neck and elegant wrap waist detail. Part of our exclusive Isla x Pacifica collaboration.",
    category: "swimsuit",
  },
  {
    slug: "swim-kai-black-isla",
    name: "Swim Kai Black",
    price: "R$999",
    image: "/images/isla-pacifica/swim-kai-black.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kai one-piece swimsuit in bold black features a deep V-neck with lace-up front detail and adjustable side ties. Part of our exclusive Isla x Pacifica collaboration.",
    category: "swimsuit",
  },
  {
    slug: "swim-brava-red-isla",
    name: "Swim Brava Red",
    price: "R$999",
    image: "/images/isla-pacifica/swim-brava-red.png",
    colors: [
      { name: "Red", hex: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Brava one-piece swimsuit in stunning red features an asymmetric design with dramatic cutout and single shoulder strap. Part of our exclusive Isla x Pacifica collaboration.",
    category: "swimsuit",
  },
  {
    slug: "swim-kai-viola-isla",
    name: "Swim Kai Viola",
    price: "R$999",
    image: "/images/isla-pacifica/swim-kai-viola.png",
    colors: [
      { name: "Viola", hex: "#9BB8D3" },
      { name: "Light Blue", hex: "#7DD8D8" },
      { name: "Brown", hex: "#8B6914" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kai one-piece swimsuit in soft viola features a deep V-neck and elegant wrap waist detail. Part of our exclusive Isla x Pacifica collaboration.",
    category: "swimsuit",
  },
  {
    slug: "swim-kai-brown-isla",
    name: "Swim Kai Brown",
    price: "R$999",
    image: "/images/isla-pacifica/swim-kai-brown.png",
    colors: [
      { name: "Brown", hex: "#8B6914" },
      { name: "Light Blue", hex: "#7DD8D8" },
      { name: "Viola", hex: "#9BB8D3" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kai one-piece swimsuit in earthy brown features a deep V-neck and elegant wrap waist detail. Part of our exclusive Isla x Pacifica collaboration.",
    category: "swimsuit",
  },
  {
    slug: "swim-kai-red-isla",
    name: "Swim Kai Red",
    price: "R$999",
    image: "/images/isla-pacifica/swim-kai-red.png",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kai one-piece swimsuit in vibrant red features a deep V-neck with lace-up front detail and adjustable side ties. Part of our exclusive Isla x Pacifica collaboration.",
    category: "swimsuit",
  },

  // Icons Collection
  {
    slug: "bikini-nixie-icon",
    name: "Bikini Nixie Icon",
    price: "R$399",
    image: "/images/icons/bikini-nixie-icon.png",
    colors: [
      { name: "Brown", hex: "#3D2B1F" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Nixie Icon bikini features a stunning bandeau top with a golden starfish centerpiece and matching high-cut bottom with double straps. A statement piece from our Icons collection.",
    category: "bikini",
  },
  {
    slug: "bikini-maris-icon",
    name: "Bikini Maris Icon",
    price: "R$399",
    image: "/images/icons/bikini-maris-icon.png",
    colors: [
      { name: "Teal", hex: "#008080" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Maris Icon bikini features an elegant top with a golden shell centerpiece and tie-side bottom with gold chain details. A stunning piece from our Icons collection.",
    category: "bikini",
  },
  {
    slug: "bikini-ester-icon",
    name: "Bikini Ester Icon",
    price: "R$499",
    image: "/images/icons/bikini-ester-icon.png",
    colors: [
      { name: "Red", hex: "#C41E3A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Ester Icon bikini features a halter top with golden starfish detail and matching high-cut bottom with starfish accent. A bold statement from our Icons collection.",
    category: "bikini",
  },

  // Original products
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
      "The Maris Bikini features a classic triangle top and tie-side bottoms, designed for a perfect, adjustable fit. Made from our signature recycled fabric, it's as comfortable as it is stylish, ready for any beach adventure.",
    category: "bikini",
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
      "Make a statement with the Nixie Bikini. Its vibrant colors and flattering cut are designed to turn heads. The supportive top and cheeky bottoms offer a blend of comfort and confidence.",
    category: "bikini",
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
      "Embrace earthy tones with the Ester Bikini. This set offers a comfortable, secure fit with a touch of bohemian charm. Perfect for lounging by the sea or taking a dip in crystal-clear waters.",
    category: "bikini",
  },
  {
    slug: "bikini-bonita-cream",
    name: "Bikini Bonita Cream",
    price: "$92.99",
    image: "/images/47.png",
    colors: [
      { name: "Cream", hex: "#F5F5DC" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Bonita Bikini offers timeless elegance with its underwire support and classic silhouette. Designed for all-day comfort and style, this set is perfect for the modern beach enthusiast.",
    category: "bikini",
  },
  {
    slug: "bikini-bonita-black",
    name: "Bikini Bonita Black",
    price: "$92.99",
    image: "/images/48.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Cream", hex: "#F5F5DC" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Bonita Bikini offers timeless elegance with its underwire support and classic silhouette. Designed for all-day comfort and style, this set is perfect for the modern beach enthusiast.",
    category: "bikini",
  },

  // Brava Collection (Swimsuits)
  {
    slug: "brava-black",
    name: "Swim Brava Black",
    price: "$119.99",
    image: "/images/collections/brava-2.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
      { name: "Brown", hex: "#8B4513" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Brava Swimsuit is the epitome of sophistication. With its sleek one-piece design and flattering cut, it offers both style and comfort for any water activity.",
    category: "swimsuit",
  },
  {
    slug: "brava-red",
    name: "Swim Brava Red",
    price: "$119.99",
    image: "/images/collections/brava-1.png",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#8B4513" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Brava Swimsuit is the epitome of sophistication. With its sleek one-piece design and flattering cut, it offers both style and comfort for any water activity.",
    category: "swimsuit",
  },
  {
    slug: "brava-brown",
    name: "Swim Brava Brown",
    price: "$119.99",
    image: "/images/collections/brava-3.png",
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Brava Swimsuit is the epitome of sophistication. With its sleek one-piece design and flattering cut, it offers both style and comfort for any water activity.",
    category: "swimsuit",
  },

  // Kaia Collection (Bikinis)
  {
    slug: "kaia-teal",
    name: "Bikini Kaia Teal",
    price: "$94.99",
    image: "/images/collections/kaia-3.png",
    colors: [
      { name: "Teal", hex: "#008080" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Bikini features a modern design with delicate straps and a flattering silhouette. Perfect for those who appreciate minimalist elegance with a touch of color.",
    category: "bikini",
  },
  {
    slug: "kaia-light-blue",
    name: "Bikini Kaia Light Blue",
    price: "$94.99",
    image: "/images/collections/kaia-1.png",
    colors: [
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Teal", hex: "#008080" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Bikini features a modern design with delicate straps and a flattering silhouette. Perfect for those who appreciate minimalist elegance with a touch of color.",
    category: "bikini",
  },
  {
    slug: "kaia-pink",
    name: "Bikini Kaia Pink",
    price: "$94.99",
    image: "/images/collections/kaia-2.png",
    colors: [
      { name: "Pink", hex: "#FFC0CB" },
      { name: "Teal", hex: "#008080" },
      { name: "Light Blue", hex: "#ADD8E6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kaia Bikini features a modern design with delicate straps and a flattering silhouette. Perfect for those who appreciate minimalist elegance with a touch of color.",
    category: "bikini",
  },

  // Azores Collection (Bikinis)
  {
    slug: "azores-black",
    name: "Bikini Azores Black",
    price: "$96.99",
    image: "/images/collections/azores-3.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#000080" },
      { name: "Burgundy", hex: "#800020" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Azores Bikini combines sophisticated style with ultimate comfort. Featuring an underwire top for support and a sleek design, this set is ideal for those who want to make a statement.",
    category: "bikini",
  },
  {
    slug: "azores-navy",
    name: "Bikini Azores Navy",
    price: "$96.99",
    image: "/images/collections/azores-1.png",
    colors: [
      { name: "Navy", hex: "#000080" },
      { name: "Black", hex: "#000000" },
      { name: "Burgundy", hex: "#800020" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Azores Bikini combines sophisticated style with ultimate comfort. Featuring an underwire top for support and a sleek design, this set is ideal for those who want to make a statement.",
    category: "bikini",
  },
  {
    slug: "azores-burgundy",
    name: "Bikini Azores Burgundy",
    price: "$96.99",
    image: "/images/collections/azores-2.png",
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Navy", hex: "#000080" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Azores Bikini combines sophisticated style with ultimate comfort. Featuring an underwire top for support and a sleek design, this set is ideal for those who want to make a statement.",
    category: "bikini",
  },

  // Ayla Collection (Bikinis)
  {
    slug: "ayla-brown",
    name: "Bikini Ayla Brown",
    price: "$89.99",
    image: "/images/collections/ayla-2.png",
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Forest Green", hex: "#228B22" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Ayla Bikini embraces natural earth tones with a comfortable, relaxed fit. Its simple yet elegant design makes it perfect for both beach days and poolside lounging.",
    category: "bikini",
  },
  {
    slug: "ayla-brown-2",
    name: "Bikini Ayla Brown",
    price: "$89.99",
    image: "/images/collections/ayla-1.png",
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Forest Green", hex: "#228B22" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Ayla Bikini embraces natural earth tones with a comfortable, relaxed fit. Its simple yet elegant design makes it perfect for both beach days and poolside lounging.",
    category: "bikini",
  },
  {
    slug: "ayla-forest-green",
    name: "Bikini Ayla Forest Green",
    price: "$89.99",
    image: "/images/collections/ayla-3.png",
    colors: [
      { name: "Forest Green", hex: "#228B22" },
      { name: "Brown", hex: "#8B4513" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Ayla Bikini embraces natural earth tones with a comfortable, relaxed fit. Its simple yet elegant design makes it perfect for both beach days and poolside lounging.",
    category: "bikini",
  },

  // Iona Collection (Bikinis)
  {
    slug: "iona-black",
    name: "Bikini Iona Black",
    price: "$92.99",
    image: "/images/collections/iona-1.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Bikini features a unique design with delicate details and a flattering cut. Made from sustainable materials, it's perfect for the conscious beach-goer.",
    category: "bikini",
  },
  {
    slug: "iona-black-2",
    name: "Bikini Iona Black",
    price: "$92.99",
    image: "/images/collections/iona-2.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Bikini features a unique design with delicate details and a flattering cut. Made from sustainable materials, it's perfect for the conscious beach-goer.",
    category: "bikini",
  },
  {
    slug: "iona-red",
    name: "Bikini Iona Red",
    price: "$92.99",
    image: "/images/collections/iona-3.png",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Black", hex: "#000000" },
      { name: "Pink", hex: "#FFC0CB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Bikini features a unique design with delicate details and a flattering cut. Made from sustainable materials, it's perfect for the conscious beach-goer.",
    category: "bikini",
  },
  {
    slug: "iona-pink",
    name: "Bikini Iona Pink",
    price: "$92.99",
    image: "/images/collections/iona-4.png",
    colors: [
      { name: "Pink", hex: "#FFC0CB" },
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Iona Bikini features a unique design with delicate details and a flattering cut. Made from sustainable materials, it's perfect for the conscious beach-goer.",
    category: "bikini",
  },

  // Koh Collection (Bikinis)
  {
    slug: "koh-turquoise",
    name: "Bikini Koh Turquoise",
    price: "$91.99",
    image: "/images/collections/koh-1.png",
    colors: [
      { name: "Turquoise", hex: "#40E0D0" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Coral", hex: "#FF7F50" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Koh Bikini brings tropical vibes with its vibrant colors and comfortable fit. Designed for those who love to stand out while enjoying the sun and surf.",
    category: "bikini",
  },
  {
    slug: "koh-light-blue",
    name: "Bikini Koh Light Blue",
    price: "$91.99",
    image: "/images/collections/koh-2.png",
    colors: [
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Turquoise", hex: "#40E0D0" },
      { name: "Coral", hex: "#FF7F50" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Koh Bikini brings tropical vibes with its vibrant colors and comfortable fit. Designed for those who love to stand out while enjoying the sun and surf.",
    category: "bikini",
  },
  {
    slug: "koh-coral",
    name: "Bikini Koh Coral",
    price: "$91.99",
    image: "/images/collections/koh-3.png",
    colors: [
      { name: "Coral", hex: "#FF7F50" },
      { name: "Turquoise", hex: "#40E0D0" },
      { name: "Light Blue", hex: "#ADD8E6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Koh Bikini brings tropical vibes with its vibrant colors and comfortable fit. Designed for those who love to stand out while enjoying the sun and surf.",
    category: "bikini",
  },

  // Saona Collection (Bikinis)
  {
    slug: "saona-burgundy",
    name: "Bikini Saona Burgundy",
    price: "$93.99",
    image: "/images/collections/saona-1.png",
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Black", hex: "#000000" },
      { name: "Magenta", hex: "#FF00FF" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Saona Bikini offers a bold, confident look with its rich colors and supportive design. Perfect for making a statement at the beach or pool.",
    category: "bikini",
  },
  {
    slug: "saona-black",
    name: "Bikini Saona Black",
    price: "$93.99",
    image: "/images/collections/saona-2.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Magenta", hex: "#FF00FF" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Saona Bikini offers a bold, confident look with its rich colors and supportive design. Perfect for making a statement at the beach or pool.",
    category: "bikini",
  },
  {
    slug: "saona-magenta",
    name: "Bikini Saona Magenta",
    price: "$93.99",
    image: "/images/collections/saona-3.png",
    colors: [
      { name: "Magenta", hex: "#FF00FF" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Saona Bikini offers a bold, confident look with its rich colors and supportive design. Perfect for making a statement at the beach or pool.",
    category: "bikini",
  },

  // Cora Collection (Swimsuits)
  {
    slug: "cora-brown",
    name: "Enteriza Cora Brown",
    price: "$124.99",
    image: "/images/enterizas/cora-1.png",
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Navy", hex: "#000080" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Cora Enteriza is designed for elegance and comfort. Its one-piece silhouette flatters every body type while providing excellent support for swimming and beach activities.",
    category: "swimsuit",
  },
  {
    slug: "cora-light-blue",
    name: "Enteriza Cora Light Blue",
    price: "$124.99",
    image: "/images/enterizas/cora-2.png",
    colors: [
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Navy", hex: "#000080" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Cora Enteriza is designed for elegance and comfort. Its one-piece silhouette flatters every body type while providing excellent support for swimming and beach activities.",
    category: "swimsuit",
  },
  {
    slug: "cora-navy",
    name: "Enteriza Cora Navy",
    price: "$124.99",
    image: "/images/enterizas/cora-3.png",
    colors: [
      { name: "Navy", hex: "#000080" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Light Blue", hex: "#ADD8E6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Cora Enteriza is designed for elegance and comfort. Its one-piece silhouette flatters every body type while providing excellent support for swimming and beach activities.",
    category: "swimsuit",
  },

  // Kai Collection (Swimsuits)
  {
    slug: "kai-black",
    name: "Enteriza Kai Black",
    price: "$129.99",
    image: "/images/enterizas/kai-1.png",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#FF0000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kai Enteriza features a stunning cutout design that combines modern style with timeless elegance. Perfect for those who want to make a bold statement.",
    category: "swimsuit",
  },
  {
    slug: "kai-red",
    name: "Enteriza Kai Red",
    price: "$129.99",
    image: "/images/enterizas/kai-2.png",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "The Kai Enteriza features a stunning cutout design that combines modern style with timeless elegance. Perfect for those who want to make a bold statement.",
    category: "swimsuit",
  },

  // Only Bottoms
  {
    slug: "bottom-black",
    name: "Bottom Black",
    price: "$44.99",
    image: "/images/only-bottoms/bottom-1.png",
    colors: [{ name: "Black", hex: "#000000" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Our classic bikini bottom features a flattering cut with thin straps for a minimalist look. Made from sustainable materials for comfort and durability.",
    category: "bottom",
  },
]
