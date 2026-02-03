"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { products } from "@/lib/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Navigation } from "lucide-react"
import { VideoGallerySection } from "@/components/video-gallery-section"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function HeroCarousel() {
  // const [currentSlide, setCurrentSlide] = useState(0)
  // const images = [
  //   { src: "/images/56b.png", alt: "Woman in black bikini by beach volleyball net" },
  //   { src: "/images/89b.png", alt: "Woman in black strappy bikini on beach sand" },
  //   { src: "/images/84.jpg", alt: "Artistic shot of woman in black bikini with net shadows" },
  // ]

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % images.length)
  //   }, 4000)

  //   return () => clearInterval(timer)
  // }, [images.length])

  return (
    <div className="flex-grow relative overflow-hidden bg-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        preload="auto"
      >
        
        <source src="/images/pagina-de-inicio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        preload="auto"
      >
        <source src="/images/inicio_mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-brand-secondary p-4 z-20">
        <Image
          src="/images/pacifica-logo-text-white.png"
          alt="PACÍFICA"
          width={800}
          height={200}
          className="w-full max-w-3xl h-auto mb-4"
          priority
        />
        <p className="text-lg md:text-xl max-w-md font-light">
          Um espaço criado para mulheres que escolhem a beleza do simples, do natural e do essencial. Cada peça nasce inspirada no mar, na liberdade e no movimento.
        </p>
      </div>
    </div>
  )
}

export default function PacificaLandingPage() {
  const displayProducts = products.filter((product) => product.slug !== "ester-bikini")
  const [currentPairIndex, setCurrentPairIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPairIndex((prev) => (prev + 2) % displayProducts.length)
    }, 20000) // 20 seconds

    return () => clearInterval(timer)
  }, [displayProducts.length])

  const currentProducts = displayProducts.slice(currentPairIndex, currentPairIndex + 2)

  return (
    <div
      className="relative w-full overflow-x-hidden text-brand-primary font-sans"
      style={{ backgroundColor: "#ffffff" }}
    >
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <section className="h-screen min-h-[700px] w-full flex flex-col">
          <Header />
          <HeroCarousel />
        </section>

        {/* Section 2: Sustainability & Products */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center text-center py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-extralight text-4xl md:text-5xl mb-6 tracking-tight">Crafted with Conscience</h2>
            <p className="text-lg text-brand-primary/80 font-light">
              At Pacífica, sustainability is our core. Our swimwear is made from recycled ocean plastics, and every
              piece is shipped in compostable packaging. We believe in fashion that feels good and does good, protecting
              the beautiful beaches we love.
            </p>
          </div>
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 justify-items-center px-4">
              {currentProducts.map((product, index) => (
                <div
                  key={product.slug}
                  className="w-full max-w-sm animate-in fade-in duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={`/products/${product.slug}`}>
                    <Card className="overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
                      <CardContent className="p-0 relative">
                        <div className="absolute top-2 left-2 bg-brand-primary text-brand-secondary text-xs font-semibold uppercase px-2 py-1 z-10">
                          New In
                        </div>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-auto aspect-square object-contain"
                        />
                        <div className="p-4 text-left">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-light text-lg">{product.name}</h3>
                            {/* <p className="font-semibold text-lg">{product.price}</p> */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Collection Logos */}
        <section className="w-full py-4 md:py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-row items-center justify-center gap-8 md:gap-16">
            <Image
              src="/images/isla-collection-logo.png"
              alt="Isla Collection"
              width={200}
              height={100}
              className="h-16 md:h-24 w-auto object-contain"
            />
            <Image
              src="/images/icons-collection-logo.png"
              alt="Icons x Pacifica"
              width={300}
              height={150}
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>
        </section>

        {/* Section 3: Image Gallery Collage */}
        {/* 
        <section className="w-full py-16 md:py-24 px-4 relative" style={{ minHeight: "90vh" }}>
          <div className="max-w-7xl mx-auto relative h-[800px] md:h-[1000px]">
            {/* Image 1 - Large top left */}
        {/* <div className="absolute top-0 left-0 w-[45%] h-[55%] overflow-hidden shadow-xl z-10">
              <Image
                src="/images/gallery1.jpeg"
                alt="Pacífica collection"
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div> */}

        {/* Image 2 - Medium top right */}
        {/* <div className="absolute top-[8%] right-[5%] w-[35%] h-[40%] overflow-hidden shadow-xl z-20 rotate-3">
              <Image
                src="/images/gallery2.jpeg"
                alt="Pacífica collection"
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div> */}

        {/* Image 3 - Small middle left */}
        {/* <div className="absolute top-[45%] left-[10%] w-[30%] h-[35%] overflow-hidden shadow-xl z-30 -rotate-2">
              <Image
                src="/images/gallery3.jpeg"
                alt="Pacífica collection"
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div> */}

        {/* Image 4 - Large bottom right */}
        {/* <div className="absolute bottom-[5%] right-0 w-[48%] h-[50%] overflow-hidden shadow-xl z-10">
              <Image
                src="/images/gallery4.jpeg"
                alt="Pacífica collection"
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div> */}

        {/* Image 5 - Medium center */}
        {/* <div className="absolute top-[38%] left-[42%] w-[32%] h-[38%] overflow-hidden shadow-xl z-25 rotate-2">
              <Image
                src="/images/gallery5.jpeg"
                alt="Pacífica collection"
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div> */}

        {/* Image 6 - Small bottom left */}
        {/* <div className="absolute bottom-0 left-[3%] w-[28%] h-[32%] overflow-hidden shadow-xl z-20 -rotate-1">
              <Image
                src="/images/gallery6.jpeg"
                alt="Pacífica collection"
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div> */}
        {/* </div>
        </section> */}

        <VideoGallerySection />

        {/* Section 4: Shop The Look */}
        <section className="w-full py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full h-full min-h-[500px] overflow-hidden">
              <Image
                src="/images/shop-the-look-city.jpeg"
                alt="Model wearing Pacífica bikini on beach"
                width={450}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-extralight text-4xl md:text-5xl mb-2 tracking-tight">Shop The Look</h2>
              <p className="text-lg text-brand-primary/80 mb-8 font-light">
                Our model @francescabotticini with our new collection.
              </p>
              <div className="flex justify-center">
                <Link href="/products/ester-bikini" className="w-full max-w-sm">
                  <Card className="bg-brand-detail border-none overflow-hidden shadow-lg">
                    <CardContent className="p-0">
                      <Image
                        src="/images/ester-bikini-product.png"
                        alt="Ester Bikini"
                        width={400}
                        height={400}
                        className="w-full h-auto aspect-square object-contain bg-white p-8"
                      />
                      <div className="p-4">
                        <h3 className="font-light text-xl">Ester Bikini</h3>
                        {/* <p className="font-semibold text-xl">$84.99</p> */}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Store Locations */}
        <section className="w-full py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-detail/30 rounded-2xl p-8 md:p-12">
              <h2 className="font-extralight text-3xl md:text-4xl mb-8 text-center tracking-tight">Visit Our Stores</h2>

              {/* Map-like Interface */}
              <div className="bg-gradient-to-br from-brand-detail/30 to-brand-detail/50 rounded-xl p-4 md:p-6 mb-6 relative overflow-hidden">
                {/* Decorative map lines */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E9E2D0" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Decorative coastline */}
                    <path d="M0,200 Q100,180 200,190 T400,200 L400,300 L0,300 Z" fill="#E9E2D0" fillOpacity="0.3" />
                  </svg>
                </div>

                {/* Store Locations */}
                <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6">
                  {/* Florianópolis Location */}
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg backdrop-blur-sm">
                    <div className="flex items-start gap-3 mb-4">
                      {/* <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                        <MapPin className="h-4 w-4 text-white" />
                      </div> */}
                      <div>
                        <h3 className="font-medium text-lg text-brand-primary mb-1">Florianópolis</h3>
                        <p className="text-sm text-brand-primary/70 font-light leading-relaxed">
                          📍 Rua César Nascimento 505, Loja 02 Pacífica
                          <br />
                          Condominio Nautilus, Jurerê
                          <br />
                          Florianópolis - SC
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/70 transition-colors font-light">
                      <Navigation className="h-4 w-4" />
                      <a href="https://maps.app.goo.gl/56RzYGMscSKkvCgh6" target='_blank'>Get Directions</a>
                    </button>
                  </div>

                  {/* Camboriú Location */}
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg backdrop-blur-sm">
                    <div className="flex items-start gap-3 mb-4">
                      {/* <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                        <MapPin className="h-4 w-4 text-white" />
                      </div> */}
                      <div>
                        <h3 className="font-medium text-lg text-brand-primary mb-1">Camboriú</h3>
                        <p className="text-sm text-brand-primary/70 font-light leading-relaxed">
                          📍 Av. Brasil 2261
                          <br />
                          Centro Balneario Camboriú
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/70 transition-colors font-light">
                      <Navigation className="h-4 w-4" />
                      <a href="https://maps.app.goo.gl/CUPmbHHgFVvTGDzA7" target='_blank'>Get Directions</a>
                    </button>
                  </div>
                </div>

                {/* Store Hours */}
                <div className="bg-brand-background rounded-lg p-6 mt-6">
                  <h3 className="font-medium text-lg mb-4">Store Hours</h3>
                  <div className="space-y-2 text-brand-primary/80 font-light">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>2:00 PM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Join Pacific Soul Newsletter */}
        <section className="w-full py-16 md:py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <h3 className="font-extralight text-3xl md:text-4xl mb-3 text-center">Join Pacific Soul</h3>
              <p className="text-center text-brand-primary/70 font-light mb-8">
                Become a friend of Pacífica and be the first to know about new arrivals and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-brand-background border border-brand-primary/20 rounded-lg text-brand-primary placeholder:text-brand-primary/40 font-light flex-1"
                />
                <Button
                  type="submit"
                  className="bg-brand-primary text-brand-secondary rounded-lg hover:bg-brand-primary/90 font-medium whitespace-nowrap"
                >
                  Join
                </Button>
              </form>
            </div>
          </div>
        </section>


        {/* Section 7: Footer */}
        <Footer />
      </main>
    </div>
  )
}
