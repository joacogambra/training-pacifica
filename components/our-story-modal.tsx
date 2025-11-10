"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface OurStoryModalProps {
  children: React.ReactNode
}

export function OurStoryModal({ children }: OurStoryModalProps) {
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
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brand-detail">
                    <Image
                      src="/images/france1.png"
                      alt="Francesca Botticini"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="font-extralight text-3xl md:text-4xl mb-3 tracking-tight text-brand-primary">
                    Our Story
                  </h2>
                  <div className="w-16 h-px bg-brand-primary/30 mx-auto"></div>
                </div>

                <div className="max-w-2xl mx-auto space-y-6 text-brand-primary">
                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    Hi! I'm <span className="font-medium">Francesca Botticini</span> — owner & mother of this dream.
                  </p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    Pacífica wasn't born just to be a brand.
                  </p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    It was born from my heart, my ocean, my fire.
                  </p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    A world I imagined since I was a girl — where women are free to just be.
                  </p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">Where we are art.</p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    Where we are softness, power, beauty, and wildness — all at once.
                  </p>

                  <div className="py-4">
                    <div className="w-24 h-px bg-brand-detail mx-auto"></div>
                  </div>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    This is a love letter to every woman who ever felt{" "}
                    <span className="italic font-medium">too much, too strong, too deep.</span>
                  </p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    Here, you are not "too" anything.
                  </p>

                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-center text-brand-primary">
                    You are everything.
                  </p>

                  <div className="py-4">
                    <div className="w-24 h-px bg-brand-detail mx-auto"></div>
                  </div>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">Pacífica is freedom.</p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">It's magic.</p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">It's nature.</p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    It's all of us — writing our own story, dancing in our skin, glowing in our truth.
                  </p>

                  <div className="py-6">
                    <div className="w-32 h-px bg-brand-detail mx-auto"></div>
                  </div>

                  <p className="text-lg md:text-xl font-medium leading-relaxed text-center">
                    This is the beginning of something sacred.
                  </p>

                  <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                    And I'm so grateful you're here.
                  </p>

                  <div className="text-center pt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
