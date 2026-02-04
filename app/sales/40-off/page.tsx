"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

export default function Sale40OffPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ============================================================
  // SALE PRODUCTS (-40% OFF)
  // To add product-specific hover images, add a "hoverImage" field
  // Example: { ..., hoverImage: "/images/icons/bikini-nixie-hover.jpg" }
  // ============================================================
  const saleProducts = [
    { 
      image: "/images/icons/bikini-nixie-icon.png", 
      name: "Bikini Nixie Icon", 
      slug: "bikini-nixie-icon", 
      originalPrice: "R$665",
      price: "R$399" 
    },
    { 
      image: "/images/icons/bikini-maris-icon.png", 
      name: "Bikini Maris Icon", 
      slug: "bikini-maris-icon", 
      originalPrice: "R$665",
      price: "R$399" 
    },
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
            <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full mb-6">
              <span className="font-semibold text-lg">-40% OFF</span>
            </div>
            <h1 className="font-extralight text-5xl md:text-6xl mb-4 tracking-tight">Sale</h1>
            <p className="text-lg text-brand-primary/80 font-light max-w-2xl mx-auto">
              Exclusive discounts on our iconic collection. Limited time offer!
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {saleProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  slug={item.slug}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  originalPrice={item.originalPrice}
                  discountBadge="-40%"
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
