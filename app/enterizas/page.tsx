"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EnterizasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const bravaCollection = [
    { src: "/images/collections/brava-2.png", alt: "Swim Brava Black", name: "Brava Black" },
    { src: "/images/collections/brava-1.png", alt: "Swim Brava Red", name: "Brava Red" },
    { src: "/images/collections/brava-3.png", alt: "Swim Brava Brown", name: "Brava Brown" },
  ]

  const coraCollection = [
    { src: "/images/enterizas/cora-1.png", alt: "Enteriza Cora Brown", name: "Cora Brown" },
    { src: "/images/enterizas/cora-2.png", alt: "Enteriza Cora Light Blue", name: "Cora Light Blue" },
    { src: "/images/enterizas/cora-3.png", alt: "Enteriza Cora Navy", name: "Cora Navy" },
  ]

  const kaiCollection = [
    { src: "/images/enterizas/kai-1.png", alt: "Enteriza Kai Black", name: "Kai Black" },
    { src: "/images/enterizas/kai-2.png", alt: "Enteriza Kai Red", name: "Kai Red" },
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
            <h1 className="font-extralight text-5xl md:text-6xl mb-4 tracking-tight">SwimSuit</h1>
            {/* <p className="text-lg text-brand-primary/80 font-light max-w-2xl mx-auto">
              Descubre nuestra colección de trajes de baño enterizos, diseñados para combinar estilo y comodidad con
              conciencia sostenible.
            </p> */}
          </div>

          <div className="max-w-7xl mx-auto space-y-20">
            {/* Swim Brava Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {bravaCollection.map((item, index) => (
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

            {/* Enteriza Cora Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {coraCollection.map((item, index) => (
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

            {/* Enteriza Kai Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {kaiCollection.map((item, index) => (
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
