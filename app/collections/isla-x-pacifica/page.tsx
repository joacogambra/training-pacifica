"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

export default function IslaPacificaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ============================================================
  // ISLA X PACIFICA PRODUCTS
  // To add product-specific hover images, add a "hoverImage" field
  // Example: { ..., hoverImage: "/images/isla-pacifica/top-kaia-blue-hover.jpg" }
  // ============================================================
  const islaPacificaProducts = [
    { image: "/images/isla-pacifica/top-kaia-blue.png", name: "Top Kaia Blue", slug: "top-kaia-blue-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/top-kaia-light-blue.png", name: "Top Kaia Light Blue", slug: "top-kaia-light-blue-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/top-kaia-pink.png", name: "Top Kaia Pink", slug: "top-kaia-pink-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/top-iona-red.png", name: "Top Iona Red", slug: "top-iona-red-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/top-iona-pink.png", name: "Top Iona Pink", slug: "top-iona-pink-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/bottom-kaia-blue.png", name: "Bottom Kaia Blue", slug: "bottom-kaia-blue-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/bottom-kaia-light-blue.png", name: "Bottom Kaia Light Blue", slug: "bottom-kaia-light-blue-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/bottom-kaia-pink.png", name: "Bottom Kaia Pink", slug: "bottom-kaia-pink-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/bottom-iona-red.png", name: "Bottom Iona Red", slug: "bottom-iona-red-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/bottom-iona-pink.png", name: "Bottom Iona Pink", slug: "bottom-iona-pink-isla", price: "R$585,85" },
    { image: "/images/isla-pacifica/top-iona-black.png", name: "Top Iona Black", slug: "top-iona-black-isla", price: "R$999" },
    { image: "/images/isla-pacifica/bottom-iona-black.png", name: "Bottom Iona Black", slug: "bottom-iona-black-isla", price: "R$999" },
    { image: "/images/isla-pacifica/swim-kai-light-blue.png", name: "Swim Kai Light Blue", slug: "swim-kai-light-blue-isla", price: "R$999" },
    { image: "/images/isla-pacifica/swim-kai-black.png", name: "Swim Kai Black", slug: "swim-kai-black-isla", price: "R$999" },
    { image: "/images/isla-pacifica/swim-brava-red.png", name: "Swim Brava Red", slug: "swim-brava-red-isla", price: "R$999" },
    { image: "/images/isla-pacifica/swim-kai-viola.png", name: "Swim Kai Viola", slug: "swim-kai-viola-isla", price: "R$999" },
    { image: "/images/isla-pacifica/swim-kai-brown.png", name: "Swim Kai Brown", slug: "swim-kai-brown-isla", price: "R$999" },
    { image: "/images/isla-pacifica/swim-kai-red.png", name: "Swim Kai Red", slug: "swim-kai-red-isla", price: "R$999" },
  ]

  return (
    <div
      className="relative w-full overflow-x-hidden text-brand-primary font-sans"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="font-extralight text-5xl md:text-6xl mb-4 tracking-tight">Isla x Pacifica</h1>
            <p className="text-lg text-brand-primary/80 font-light max-w-2xl mx-auto">
              A exclusive collaboration collection featuring vibrant colors and unique designs crafted with sustainable materials.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {islaPacificaProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  slug={item.slug}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  // hoverImage={item.hoverImage} // Uncomment when you add product-specific hover images
                />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
