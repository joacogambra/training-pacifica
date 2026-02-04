"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// ============================================================
// HOVER IMAGE CONFIGURATION
// ============================================================
// This is the generic hover image used for ALL products.
// To replace with product-specific hover images:
// 1. Add a "hoverImage" field to each product in lib/products.ts
// 2. Pass it as the hoverImage prop to this component
// 3. The component will use product.hoverImage if provided,
//    otherwise falls back to this generic placeholder
// ============================================================
const GENERIC_HOVER_IMAGE = "/images/hover-placeholder.jpg"

interface ProductCardProps {
  slug: string
  name: string
  price: string
  image: string
  // Optional: pass a product-specific hover image
  // If not provided, uses GENERIC_HOVER_IMAGE
  hoverImage?: string
  // Optional: for sale items - shows original price crossed out
  originalPrice?: string
  // Optional: discount badge (e.g., "-40%")
  discountBadge?: string
}

export function ProductCard({
  slug,
  name,
  price,
  image,
  hoverImage,
  originalPrice,
  discountBadge,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Use product-specific hover image if provided, otherwise use generic
  const hoverImageSrc = hoverImage || GENERIC_HOVER_IMAGE

  return (
    <Link
      href={`/products/${slug}`}
      className="group cursor-pointer block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg p-2 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
        {/* Image Container with Hover Swap */}
        <div className="w-full h-[250px] md:h-[350px] relative mb-2 overflow-hidden">
          {/* Discount Badge */}
          {discountBadge && (
            <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discountBadge}
            </div>
          )}

          {/* Default Image - always visible, fades out on hover (desktop only) */}
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-contain transition-opacity duration-200 ${
              isHovered ? "md:opacity-0" : "opacity-100"
            }`}
          />

          {/* Hover Image - hidden by default, fades in on hover (desktop only) */}
          <Image
            src={hoverImageSrc || "/placeholder.svg"}
            alt={`${name} - alternate view`}
            fill
            className={`object-cover transition-opacity duration-200 ${
              isHovered ? "md:opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Product Info */}
        <div className="px-2 pb-2 text-center">
          <h3 className="font-semibold text-xs text-brand-primary">{name}</h3>
          <div className="mt-1 flex items-center justify-center gap-2">
            {originalPrice && (
              <span className="text-sm text-brand-primary/50 line-through">
                {originalPrice}
              </span>
            )}
            <span className={`text-sm ${originalPrice ? "text-red-500 font-semibold" : "text-brand-primary/70"}`}>
              {price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
