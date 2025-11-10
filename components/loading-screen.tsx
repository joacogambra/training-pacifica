"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500) // 2.5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundColor: "#E9E2D0",
          backgroundImage: `linear-gradient(to left, #E9E2D0, transparent)`,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Logo container */}
      <div className="relative z-10 flex items-center justify-center">
        <Image src="/images/LOGO5.png" alt="Pacífica Loading" width={120} height={60} className="h-16 w-auto" />
      </div>
    </div>
  )
}
