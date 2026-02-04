"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Sale40OffPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const saleProducts = [
    { 
      src: "/images/icons/bikini-nixie-icon.png", 
      alt: "Bikini Nixie Icon", 
      name: "Bikini Nixie Icon", 
      slug: "bikini-nixie-icon", 
      originalPrice: "R$665",
      salePrice: "R$399" 
    },
    { 
      src: "/images/icons/bikini-maris-icon.png", 
      alt: "Bikini Maris Icon", 
      name: "Bikini Maris Icon", 
      slug: "bikini-maris-icon", 
      originalPrice: "R$665",
      salePrice: "R$399" 
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
                <Link href={`/products/${item.slug}`} key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-lg p-2 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 relative">
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                      -40%
                    </div>
                    <div className="w-full h-[250px] md:h-[350px] relative mb-2">
                      <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-contain" />
                    </div>
                    <div className="px-2 pb-2 text-center">
                      <h3 className="font-semibold text-xs text-brand-primary">{item.name}</h3>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-sm text-brand-primary/50 line-through">{item.originalPrice}</span>
                        <span className="text-sm text-red-500 font-semibold">{item.salePrice}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
