"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default function BikinisPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ============================================================
  // BIKINI PRODUCTS (from lib/products.ts)
  // To add product-specific hover images, add a "hoverImage" field
  // to each product in lib/products.ts
  // ============================================================
  const bikiniProducts = products.filter((product) => product.category === "bikini")

  return (
    <div
      className="relative w-full overflow-x-hidden text-brand-primary font-sans"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="font-extralight text-5xl md:text-6xl mb-4 tracking-tight">Bikinis</h1>
            <p className="text-lg text-brand-primary/80 font-light max-w-2xl mx-auto">
              Discover our collection of beautifully crafted bikinis designed for comfort and style.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {bikiniProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  slug={item.slug}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  // hoverImage={item.hoverImage} // Uncomment when you add hoverImage to lib/products.ts
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

