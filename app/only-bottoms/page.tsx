"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OnlyBottomsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const bottomsCollection = [
    { src: "/images/only-bottoms/bottom-1.png", alt: "Bikini Bottom Black", name: "Bottom Black" },
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
            <h1 className="font-extralight text-5xl md:text-6xl mb-4 tracking-tight">Only Bottoms</h1>
            <p className="text-lg text-brand-primary/80 font-light max-w-2xl mx-auto">
              Bikini bottoms diseñados para combinar con tus tops favoritos. Estilo versátil y comodidad sostenible.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-20">
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                {bottomsCollection.map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-white rounded-lg p-2 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <div className="w-full h-[300px] md:h-[500px] relative mb-2">
                        <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-contain" />
                      </div>
                      <div className="px-2 pb-2 text-center">
                        <h3 className="font-semibold text-xs text-brand-primary">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
