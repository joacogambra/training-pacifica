"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0])
  const [selectedChart, setSelectedChart] = useState<"inches" | "cm">("inches")

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!product) {
    notFound()
  }

  return (
    <div className="relative w-full overflow-x-hidden bg-white text-brand-primary font-sans">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
            <div className="w-full aspect-square relative bg-white rounded-lg">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-8" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-extralight text-4xl md:text-5xl tracking-tight">{product.name}</h1>
              <p className="font-semibold text-2xl">{product.price}</p>
              <p className="text-lg text-brand-primary/80 font-light">{product.description}</p>

              <div className="space-y-2">
                <h3 className="font-medium text-lg">Size</h3>
                <div className="flex items-center gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-12 h-12 flex items-center justify-center border rounded-md transition-colors font-light",
                        selectedSize === size
                          ? "bg-brand-primary text-brand-secondary border-brand-primary"
                          : "bg-transparent border-brand-primary hover:bg-brand-detail",
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full mt-4 bg-brand-primary text-brand-secondary hover:bg-brand-primary/90 font-medium"
              >
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Size Guide Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-detail/30 rounded-2xl p-8 md:p-12">
              <h2 className="font-extralight text-3xl md:text-4xl mb-8 text-center tracking-tight">HOW TO MEASURE</h2>

              <div className="prose prose-lg max-w-none text-brand-primary font-light leading-relaxed mb-8">
                <p className="mb-6">
                  We suggest measuring four key points on your body to find your perfect size. It's best to wear as
                  little clothing as possible when taking these measurements. We recommend holding the measuring tape
                  flush against your body, ensuring not to pull too tightly for the most accurate measurements. If you
                  don't have a tape measure, you can use a piece of string and measure it with a ruler afterwards!
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Bust</h3>
                    <p className="text-brand-primary/80">
                      Measure around your chest at the fullest point of your bust with no bra.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Waist</h3>
                    <p className="text-brand-primary/80">Measure around the narrowest part of your waist.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">High Hip</h3>
                    <p className="text-brand-primary/80">Measure around your hips at the very top of your hip bone.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Bottom</h3>
                    <p className="text-brand-primary/80">Measure around the widest part of your bottom.</p>
                  </div>
                </div>

                <div className="bg-brand-background rounded-lg p-6">
                  <h3 className="font-medium text-lg mb-4">Hot Tips</h3>
                  <ol className="list-decimal list-inside space-y-2 text-brand-primary/80">
                    <li>Make sure the tape measure is parallel to the floor.</li>
                    <li>Stand with your feet together and your body relaxed for all the measurements.</li>
                    <li>For accuracy, take your measurements at least twice.</li>
                  </ol>
                </div>
              </div>

              {/* Size Chart Toggle */}
              <div className="flex justify-center mb-6">
                <div className="bg-brand-background rounded-lg p-1 flex">
                  <button
                    onClick={() => setSelectedChart("inches")}
                    className={cn(
                      "px-4 py-2 rounded-md font-light transition-colors",
                      selectedChart === "inches"
                        ? "bg-brand-primary text-brand-secondary"
                        : "text-brand-primary hover:bg-brand-detail",
                    )}
                  >
                    Inches
                  </button>
                  <button
                    onClick={() => setSelectedChart("cm")}
                    className={cn(
                      "px-4 py-2 rounded-md font-light transition-colors",
                      selectedChart === "cm"
                        ? "bg-brand-primary text-brand-secondary"
                        : "text-brand-primary hover:bg-brand-detail",
                    )}
                  >
                    Centimeters
                  </button>
                </div>
              </div>

              {/* Size Charts */}
              <div className="flex justify-center">
                <div className="bg-brand-background rounded-lg p-6 max-w-full overflow-x-auto">
                  {selectedChart === "inches" ? (
                    <Image
                      src="/images/size-chart-inches.png"
                      alt="Size chart in inches"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  ) : (
                    <Image
                      src="/images/size-chart-cm.png"
                      alt="Size chart in centimeters"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
