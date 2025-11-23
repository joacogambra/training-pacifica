"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function VideoGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftImageRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const rightImageRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-16 px-4 bg-white" style={{ maxHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
        {/* Mobile: Video only */}
        <div className="w-full md:hidden flex justify-center">
          <div
            className={`w-full max-w-sm aspect-[9/16] overflow-hidden rounded-none transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <video
              src="/images/gallery-video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop: Video center with images on sides */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 w-full h-full">
          {/* Left Image - Slide in from left */}
          <div
            ref={leftImageRef}
            className={`w-1/4 h-full flex items-center justify-center overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div className="relative w-full h-full group">
              <Image
                src="/images/gallery-left.jpg"
                alt="Gallery left"
                width={250}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>

          {/* Center Video - Zoom in and fade */}
          <div
            ref={videoRef}
            className={`w-1/2 flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: "100ms",
            }}
          >
            <div className="w-full max-w-sm aspect-[9/16] overflow-hidden rounded-none relative shadow-2xl">
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-transparent blur-3xl -z-10" />
              <video
                src="/images/gallery-video1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Image - Slide in from right */}
          <div
            ref={rightImageRef}
            className={`w-1/4 h-full flex items-center justify-center overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div className="relative w-full h-full group">
              <Image
                src="/images/gallery-right.jpg"
                alt="Gallery right"
                width={250}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
