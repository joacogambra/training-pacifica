"use client"

import Image from "next/image"
import { useMemo } from "react"

const charms = [
  { src: "/images/20.png", alt: "Plumeria charm" },
  { src: "/images/21.png", alt: "Golden flower charm" },
  { src: "/images/22.png", alt: "Sun face charm" },
  { src: "/images/23.png", alt: "Spiral sun charm" },
  { src: "/images/24.png", alt: "Moon face charm" },
  { src: "/images/25.png", alt: "Starfish charm" },
  { src: "/images/26.png", alt: "Hibiscus charm" },
  { src: "/images/27.png", alt: "Pearl charm" },
]

export function BackgroundCharms({ count = 25 }: { count?: number }) {
  const charmElements = useMemo(() => {
    const elements = []
    for (let i = 0; i < count; i++) {
      const charm = charms[i % charms.length]
      const size = Math.random() * 100 + 30 // 30px to 130px
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${Math.random() * 360}deg)`,
        opacity: Math.random() * 0.4 + 0.1, // 0.1 to 0.5
        animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite alternate`,
        animationDelay: `${Math.random() * 8}s`,
      }
      elements.push(
        <div key={i} className="absolute" style={style}>
          <Image
            src={charm.src || "/placeholder.svg"}
            alt={charm.alt}
            width={size}
            height={size}
            className="w-full h-full object-contain"
          />
        </div>,
      )
    }
    return elements
  }, [count])

  return <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">{charmElements}</div>
}
