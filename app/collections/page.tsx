"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CollectionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const bravaCollection = [
  //   { src: "/images/collections/brava-2.png", alt: "Swim Brava Black", name: "Brava Black" },
  //   { src: "/images/collections/brava-1.png", alt: "Swim Brava Red", name: "Brava Red" },
  //   { src: "/images/collections/brava-3.png", alt: "Swim Brava Brown", name: "Brava Brown" },
  // ]

  const kaiaCollection = [
    { src: "/images/collections/kaia-3.png", alt: "Bikini Kaia Teal", name: "Kaia Teal" },
    { src: "/images/collections/kaia-1.png", alt: "Bikini Kaia Light Blue", name: "Kaia Light Blue" },
    { src: "/images/collections/kaia-2.png", alt: "Bikini Kaia Pink", name: "Kaia Pink" },
  ]

  const azoresCollection = [
    { src: "/images/collections/azores-3.png", alt: "Bikini Azores Black", name: "Azores Black" },
    { src: "/images/collections/azores-1.png", alt: "Bikini Azores Navy", name: "Azores Navy" },
    { src: "/images/collections/azores-2.png", alt: "Bikini Azores Burgundy", name: "Azores Burgundy" },
  ]

  const aylaCollection = [
    { src: "/images/collections/ayla-2.png", alt: "Bikini Ayla Brown", name: "Ayla Brown" },
    { src: "/images/collections/ayla-1.png", alt: "Bikini Ayla Brown", name: "Ayla Brown" },
    { src: "/images/collections/ayla-3.png", alt: "Bikini Ayla Forest Green", name: "Ayla Forest Green" },
  ]

  const ionaCollection = [
    // { src: "/images/collections/iona-1.png", alt: "Bikini Iona Black", name: "Iona Black" },
    { src: "/images/collections/iona-2.png", alt: "Bikini Iona Black", name: "Iona Black" },
    { src: "/images/collections/iona-3.png", alt: "Bikini Iona Red", name: "Iona Red" },
    { src: "/images/collections/iona-4.png", alt: "Bikini Iona Pink", name: "Iona Pink" },
  ]

  const kohCollection = [
    { src: "/images/collections/koh-1.png", alt: "Bikini Koh Turquoise", name: "Koh Turquoise" },
    { src: "/images/collections/koh-2.png", alt: "Bikini Koh Light Blue", name: "Koh Light Blue" },
    { src: "/images/collections/koh-3.png", alt: "Bikini Koh Coral", name: "Koh Coral" },
  ]

  const saonaCollection = [
    { src: "/images/collections/saona-1.png", alt: "Bikini Saona Burgundy", name: "Saona Burgundy" },
    { src: "/images/collections/saona-2.png", alt: "Bikini Saona Black", name: "Saona Black" },
    { src: "/images/collections/saona-3.png", alt: "Bikini Saona Magenta", name: "Saona Magenta" },
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
            <h1 className="font-extralight text-5xl md:text-6xl mb-4 tracking-tight">All Bikinis</h1>
            <p className="text-lg text-brand-primary/80 font-light max-w-2xl mx-auto">
              Discover our complete range of sustainable swimwear collections, each designed with unique style and
              crafted with conscience.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-20">
            {/* Swim Brava Collection */}
            {/* <div className="space-y-8">
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
            </div> */}

            {/* Bikini Kaia Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {kaiaCollection.map((item, index) => (
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

            {/* Bikini Azores Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {azoresCollection.map((item, index) => (
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

            {/* Bikini Ayla Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {aylaCollection.map((item, index) => (
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

            {/* Bikini Iona Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {ionaCollection.map((item, index) => (
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

            {/* Bikini Koh Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {kohCollection.map((item, index) => (
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

            {/* Bikini Saona Collection */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {saonaCollection.map((item, index) => (
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
