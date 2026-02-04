"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

export default function IconsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ============================================================
  // ICONS PRODUCTS
  // To add product-specific hover images, add a "hoverImage" field
  // Example: { ..., hoverImage: "/images/icons/bikini-nixie-hover.jpg" }
  // ============================================================
  const iconsProducts = [
    { image: "/images/icons/bikini-nixie-icon.png", name: "Bikini Nixie Icon", slug: "bikini-nixie-icon", price: "R$399" },
    { image: "/images/icons/bikini-maris-icon.png", name: "Bikini Maris Icon", slug: "bikini-maris-icon", price: "R$399" },
    { image: "/images/icons/bikini-ester-icon.png", name: "Bikini Ester Icon", slug: "bikini-ester-icon", price: "R$499" },
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
            <h1 className="font-extralight text-5xl md:text-6xl mb-4 tracking-tight">Icons</h1>
            <p className="text-lg text-brand-primary/80 font-light max-w-2xl mx-auto">
              Discover our iconic bikini collection featuring stunning metallic details and timeless designs.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {iconsProducts.map((item, index) => (
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

