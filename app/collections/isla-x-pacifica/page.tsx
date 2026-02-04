"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function IslaPacificaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const islaPacificaProducts = [
    { src: "/images/isla-pacifica/top-kaia-blue.png", alt: "Top Kaia Blue", name: "Top Kaia Blue", slug: "top-kaia-blue-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/top-kaia-light-blue.png", alt: "Top Kaia Light Blue", name: "Top Kaia Light Blue", slug: "top-kaia-light-blue-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/top-kaia-pink.png", alt: "Top Kaia Pink", name: "Top Kaia Pink", slug: "top-kaia-pink-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/top-iona-red.png", alt: "Top Iona Red", name: "Top Iona Red", slug: "top-iona-red-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/top-iona-pink.png", alt: "Top Iona Pink", name: "Top Iona Pink", slug: "top-iona-pink-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/bottom-kaia-blue.png", alt: "Bottom Kaia Blue", name: "Bottom Kaia Blue", slug: "bottom-kaia-blue-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/bottom-kaia-light-blue.png", alt: "Bottom Kaia Light Blue", name: "Bottom Kaia Light Blue", slug: "bottom-kaia-light-blue-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/bottom-kaia-pink.png", alt: "Bottom Kaia Pink", name: "Bottom Kaia Pink", slug: "bottom-kaia-pink-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/bottom-iona-red.png", alt: "Bottom Iona Red", name: "Bottom Iona Red", slug: "bottom-iona-red-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/bottom-iona-pink.png", alt: "Bottom Iona Pink", name: "Bottom Iona Pink", slug: "bottom-iona-pink-isla", price: "R$585,85" },
    { src: "/images/isla-pacifica/top-iona-black.png", alt: "Top Iona Black", name: "Top Iona Black", slug: "top-iona-black-isla", price: "R$999" },
    { src: "/images/isla-pacifica/bottom-iona-black.png", alt: "Bottom Iona Black", name: "Bottom Iona Black", slug: "bottom-iona-black-isla", price: "R$999" },
    { src: "/images/isla-pacifica/swim-kai-light-blue.png", alt: "Swim Kai Light Blue", name: "Swim Kai Light Blue", slug: "swim-kai-light-blue-isla", price: "R$999" },
    { src: "/images/isla-pacifica/swim-kai-black.png", alt: "Swim Kai Black", name: "Swim Kai Black", slug: "swim-kai-black-isla", price: "R$999" },
    { src: "/images/isla-pacifica/swim-brava-red.png", alt: "Swim Brava Red", name: "Swim Brava Red", slug: "swim-brava-red-isla", price: "R$999" },
    { src: "/images/isla-pacifica/swim-kai-viola.png", alt: "Swim Kai Viola", name: "Swim Kai Viola", slug: "swim-kai-viola-isla", price: "R$999" },
    { src: "/images/isla-pacifica/swim-kai-brown.png", alt: "Swim Kai Brown", name: "Swim Kai Brown", slug: "swim-kai-brown-isla", price: "R$999" },
    { src: "/images/isla-pacifica/swim-kai-red.png", alt: "Swim Kai Red", name: "Swim Kai Red", slug: "swim-kai-red-isla", price: "R$999" },
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
