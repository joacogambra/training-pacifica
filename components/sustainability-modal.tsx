"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface SustainabilityModalProps {
  children: React.ReactNode
}

export function SustainabilityModal({ children }: SustainabilityModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/80"
          onClick={handleBackdropClick}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] rounded-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
            style={{ backgroundColor: "#F9F6F1" }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 z-30 p-2 rounded-full bg-brand-detail hover:bg-brand-primary/10 transition-colors"
            >
              <X className="h-5 w-5 text-brand-primary" />
            </button>

            <div className="relative z-10 h-full overflow-y-auto scrollbar-thin scrollbar-track-brand-detail scrollbar-thumb-brand-primary/30">
              <div className="p-8 md:p-12 pb-16">
                <div className="text-center mb-10">
                  <h2 className="font-extralight text-3xl md:text-4xl mb-3 tracking-tight text-brand-primary">
                    Pacífica: Art with Purpose
                  </h2>
                  <div className="w-16 h-px bg-brand-primary/30 mx-auto"></div>
                </div>

                <div className="max-w-2xl mx-auto space-y-6 text-brand-primary">
                  <p className="text-lg font-light leading-relaxed">Each piece from Pacífica is born from one truth:</p>
                  <p className="text-lg font-medium leading-relaxed">We love the Earth we live on.</p>
                  <p className="text-lg font-light leading-relaxed">
                    We honor the ocean, our bodies, and the natural beauty of being a woman.
                  </p>

                  <p className="text-lg font-light leading-relaxed">
                    That's why our bikinis and swimsuits don't just dress your skin — they protect the planet we call
                    home.
                  </p>

                  <div className="py-6">
                    <div className="w-24 h-px bg-brand-detail mx-auto"></div>
                  </div>

                  <h3 className="font-medium text-2xl text-brand-primary mb-4">How we care for our planet:</h3>

                  <ul className="space-y-4 text-lg font-light leading-relaxed">
                    <li>
                      • We use premium recycled fabrics like ECONYL®, made from abandoned fishing nets and ocean-bound
                      plastic bottles.
                    </li>
                    <li>
                      • Every fabric is certified by GRS, OEKO-TEX®, and U-Trust®, offers UV 50+ protection, saltwater
                      resistance, and an ultra-soft feel.
                    </li>
                    <li>• We use eco-certified dyes that are safe for your skin and the sea.</li>
                    <li>• No plastic: all our packaging is 100% biodegradable, and our labels are sustainably made.</li>
                    <li>
                      • With every Pacífica bikini, you help reduce CO₂ emissions, save water and energy, and remove
                      ocean waste.
                    </li>
                  </ul>

                  <div className="py-6">
                    <div className="w-24 h-px bg-brand-detail mx-auto"></div>
                  </div>

                  <h3 className="font-medium text-2xl text-brand-primary mb-4">Did you know?</h3>

                  <p className="text-lg font-light leading-relaxed">
                    Over 640,000 tons of fishing nets are dumped into our oceans every year.
                  </p>

                  <p className="text-lg font-light leading-relaxed">
                    A single net can take up to 5,000 years to decompose, harming marine life for generations.
                  </p>

                  <p className="text-lg font-medium leading-relaxed mt-4">
                    With just 10 tons of recycled fabrics, we can:
                  </p>

                  <ul className="space-y-2 text-lg font-light leading-relaxed ml-6">
                    <li>• Save 540 kWh of energy</li>
                    <li>• Save 631,555 liters of water</li>
                    <li>• Avoid 503 kg of CO₂ emissions</li>
                    <li>• Eliminate 5,308 kg of toxic emissions</li>
                    <li>• Reclaim 448 kg of ocean waste</li>
                  </ul>

                  <div className="bg-brand-detail/30 rounded-lg p-6 my-6">
                    <p className="text-base font-light leading-relaxed">
                      <span className="font-medium">Learn more about ECONYL®</span>
                      <br />
                      <span className="font-medium">What are Ghost Nets?</span>
                    </p>
                  </div>

                  <div className="py-6">
                    <div className="w-24 h-px bg-brand-detail mx-auto"></div>
                  </div>

                  <h3 className="font-medium text-2xl text-brand-primary mb-4">
                    We make swimwear. But we also make awareness.
                  </h3>

                  <p className="text-lg font-light leading-relaxed">
                    Pacífica is our way of honoring Mother Earth, reminding you that your body is sacred, and that true
                    beauty lives in balance, freedom, and truth.
                  </p>

                  <p className="text-lg font-medium leading-relaxed">Each bikini you wear is a choice:</p>

                  <p className="text-lg font-light leading-relaxed">
                    To care. To feel. To rise. To protect.
                    <br />
                    To wear love — with purpose.
                  </p>

                  <div className="text-center pt-6">
                    <p className="text-xl font-medium text-brand-primary">Thank you for being part of this mission.</p>
                  </div>

                  <div className="text-center pt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
