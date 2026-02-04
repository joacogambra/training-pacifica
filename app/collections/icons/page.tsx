"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function IconsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const iconsProducts = [
    { src: "/images/icons/bikini-nixie-icon.png", alt: "Bikini Nixie Icon", name: "Bikini Nixie Icon", slug: "bikini-nixie-icon", price: "R$399" },
    { src: "/images/icons/bikini-maris-icon.png", alt: "Bikini Maris Icon", name: "Bikini Maris Icon", slug: "bikini-maris-icon", price: "R$399" },
    { src: "/images/icons/bikini-ester-icon.png", alt: "Bikini Ester Icon", name: "Bikini Ester Icon", slug: "bikini-ester-icon", price: "R$499" },
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
                <Link href={`/products/${item.slug}`} key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-lg p-2 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                    <div className="w-full h-[250px] md:h-[350px] relative mb-2">
                      <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-contain" />
                    </div>
                    <div className="px-2 pb-2 text-center">
                      <h3 className="font-semibold text-xs text-brand-primary">{item.name}</h3>
                      <p className="text-sm text-brand-primary/70 mt-1">{item.price}</p>
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
