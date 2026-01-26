"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ChevronDown, Menu, X } from "lucide-react"
import { useState, useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { OurStoryModal } from "@/components/our-story-modal"
import { SustainabilityModal } from "@/components/sustainability-modal"

export function Header() {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false)
  const [isMobileSalesOpen, setIsMobileSalesOpen] = useState(false)
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const shopDropdownRef = useRef<HTMLDivElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  // Handle ESC key to close menus
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsShopOpen(false)
      setIsAboutOpen(false)
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target as Node)) {
        setIsShopOpen(false)
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navigateTo = (path: string) => {
    setIsShopOpen(false)
    setIsMobileMenuOpen(false)
    router.push(path)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileShopOpen(false)
    setIsMobileSalesOpen(false)
    setIsMobileCollectionsOpen(false)
    setIsMobileAboutOpen(false)
  }

  // Hover handlers for mega menu
  const handleShopMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsShopOpen(true)
    setIsAboutOpen(false)
  }

  const handleShopMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsShopOpen(false)
    }, 150)
  }

  return (
    <header className="relative z-50">
      <div className="bg-brand-primary text-brand-secondary py-1 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Eco-Friendly & Made in Bali. Sales up to 40% OFF! Exclusive Swimwear & Pacific Souls.
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Eco-Friendly & Made in Bali. Sales up to 40% OFF! Exclusive Swimwear & Pacific Souls.
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Eco-Friendly & Made in Bali. Sales up to 40% OFF! Exclusive Swimwear & Pacific Souls.
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Eco-Friendly & Made in Bali. Sales up to 40% OFF! Exclusive Swimwear & Pacific Souls.
          </span>
        </div>
        <div className="animate-marquee inline-block">
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Eco-Friendly & Made in Bali. Sales up to 40% OFF! Exclusive Swimwear & Pacific Souls.
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Eco-Friendly & Made in Bali. Sales up to 40% OFF! Exclusive Swimwear & Pacific Souls.
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Eco-Friendly & Made in Bali. Sales up to 40% OFF! Exclusive Swimwear & Pacific Souls.
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Eco-Friendly & Made in Bali. Sales up to 40% OFF! Exclusive Swimwear & Pacific Souls.
          </span>
        </div>
      </div>
      <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between bg-brand-background relative z-50">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-light text-lg">
          <Link href="/" className="hover:text-opacity-70 transition-opacity">
            Home
          </Link>

          {/* Shop Mega Menu */}
          <div 
            className="relative" 
            ref={shopDropdownRef}
            onMouseEnter={handleShopMouseEnter}
            onMouseLeave={handleShopMouseLeave}
          >
            <button
              onClick={() => {
                setIsShopOpen(!isShopOpen)
                setIsAboutOpen(false)
              }}
              className="flex items-center gap-1 hover:text-opacity-70 transition-opacity"
              type="button"
              aria-expanded={isShopOpen}
              aria-haspopup="true"
            >
              Shop
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isShopOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Mega Menu Panel */}
            <div
              className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl transition-all duration-300 ease-out origin-top-left ${
                isShopOpen 
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
              style={{ zIndex: 9999, minWidth: "500px" }}
              role="menu"
              aria-orientation="vertical"
            >
              <div className="grid grid-cols-3 gap-0 p-6">
                {/* Column 1: SHOP */}
                <div className="pr-6 border-r border-brand-primary/10">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-primary/60 mb-4">
                    Shop
                  </h3>
                  <ul className="space-y-3" role="none">
                    <li>
                      <div
                        onClick={() => navigateTo("/collections")}
                        className="block text-sm font-light text-brand-primary hover:text-brand-primary/70 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo("/collections")}
                      >
                        Bikinis
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => navigateTo("/enterizas")}
                        className="block text-sm font-light text-brand-primary hover:text-brand-primary/70 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo("/enterizas")}
                      >
                        SwimSuit
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => navigateTo("/only-bottoms")}
                        className="block text-sm font-light text-brand-primary hover:text-brand-primary/70 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo("/only-bottoms")}
                      >
                        Swim Wear
                      </div>
                    </li>
                    <li>
                      <span 
                        className="block text-sm font-light text-brand-primary/40 cursor-default"
                        role="menuitem"
                        aria-disabled="true"
                      >
                        Fitness Wear (Coming soon)
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Column 2: SALES */}
                <div className="px-6 border-r border-brand-primary/10">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-primary/60 mb-4">
                    Sales
                  </h3>
                  <ul className="space-y-3" role="none">
                    <li>
                      <div
                        onClick={() => navigateTo("/sales/40-off")}
                        className="block text-sm font-light text-red-500 hover:text-red-600 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo("/sales/40-off")}
                      >
                        -40% OFF!
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => navigateTo("/sales/30-off")}
                        className="block text-sm font-light text-red-500 hover:text-red-600 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo("/sales/30-off")}
                      >
                        -30% OFF!
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => navigateTo("/sales/20-off")}
                        className="block text-sm font-light text-red-500 hover:text-red-600 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo("/sales/20-off")}
                      >
                        -20% OFF!
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Column 3: COLLECTIONS */}
                <div className="pl-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-primary/60 mb-4">
                    Collections
                  </h3>
                  <ul className="space-y-3" role="none">
                    <li>
                      <div
                        onClick={() => navigateTo("/collections")}
                        className="block text-sm font-light text-brand-primary hover:text-brand-primary/70 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo("/collections")}
                      >
                        Isla x Pacifica
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => navigateTo("/collections")}
                        className="block text-sm font-light text-brand-primary hover:text-brand-primary/70 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && navigateTo("/collections")}
                      >
                        Icons
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* About Mega Menu */}
          <div 
            className="relative" 
            ref={aboutDropdownRef}
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
              setIsAboutOpen(true)
              setIsShopOpen(false)
            }}
            onMouseLeave={() => {
              hoverTimeoutRef.current = setTimeout(() => setIsAboutOpen(false), 150)
            }}
          >
            <button
              onClick={() => {
                setIsAboutOpen(!isAboutOpen)
                setIsShopOpen(false)
              }}
              className="flex items-center gap-1 hover:text-opacity-70 transition-opacity"
              type="button"
              aria-expanded={isAboutOpen}
              aria-haspopup="true"
            >
              About
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* About Mega Menu Panel */}
            <div
              className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl transition-all duration-300 ease-out origin-top-left ${
                isAboutOpen 
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
              style={{ zIndex: 9999, minWidth: "280px" }}
              role="menu"
              aria-orientation="vertical"
            >
              <div className="p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-primary/60 mb-4">
                  About Us
                </h3>
                <ul className="space-y-3" role="none">
                  <li>
                    <OurStoryModal>
                      <div
                        className="block text-sm font-light text-brand-primary hover:text-brand-primary/70 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                      >
                        Our Story
                      </div>
                    </OurStoryModal>
                  </li>
                  <li>
                    <SustainabilityModal>
                      <div
                        className="block text-sm font-light text-brand-primary hover:text-brand-primary/70 cursor-pointer transition-colors"
                        role="menuitem"
                        tabIndex={0}
                      >
                        Sustainability & Ethics
                      </div>
                    </SustainabilityModal>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Burger */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        {/* Logo - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image src="/images/LOGO5.png" alt="Pacífica Logo" width={100} height={50} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Favorites Icon */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Heart className="h-6 w-6" />
            <span className="sr-only">Favorites</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-brand-primary/80 z-[100] md:hidden"
          onClick={closeMobileMenu}
          style={{ backdropFilter: "blur(4px)" }}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-brand-background z-[101] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-primary/10">
            <Image src="/images/LOGO5.png" alt="Pacífica Logo" width={80} height={40} className="h-8 w-auto" />
            <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-grow overflow-y-auto p-6">
            <nav className="space-y-1">
              {/* Home Link */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block px-4 py-3 font-light text-lg hover:bg-brand-detail/30 rounded-lg transition-colors"
              >
                Home
              </Link>

              {/* Shop Accordion (Main) */}
              <div>
                <button
                  onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 font-light text-lg hover:bg-brand-detail/30 rounded-lg transition-colors"
                  type="button"
                >
                  Shop
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isMobileShopOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileShopOpen && (
                  <div className="ml-2 mt-2 space-y-3">
                    {/* SHOP Section */}
                    <div className="px-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-primary/50 mb-2">Shop</h4>
                      <div className="space-y-1">
                        <div
                          onClick={() => navigateTo("/collections")}
                          className="block px-2 py-2 font-light text-sm text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                        >
                          Bikinis
                        </div>
                        <div
                          onClick={() => navigateTo("/enterizas")}
                          className="block px-2 py-2 font-light text-sm text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                        >
                          SwimSuit
                        </div>
                        <div
                          onClick={() => navigateTo("/only-bottoms")}
                          className="block px-2 py-2 font-light text-sm text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                        >
                          Swim Wear
                        </div>
                        <div className="block px-2 py-2 font-light text-sm text-brand-primary/40 rounded-lg cursor-default">
                          Fitness Wear (Coming soon)
                        </div>
                      </div>
                    </div>

                    {/* SALES Section */}
                    <div className="px-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-primary/50 mb-2">Sales</h4>
                      <div className="space-y-1">
                        <div
                          onClick={() => navigateTo("/sales/40-off")}
                          className="block px-2 py-2 font-light text-sm text-red-500 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                        >
                          -40% OFF!
                        </div>
                        <div
                          onClick={() => navigateTo("/sales/30-off")}
                          className="block px-2 py-2 font-light text-sm text-red-500 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                        >
                          -30% OFF!
                        </div>
                        <div
                          onClick={() => navigateTo("/sales/20-off")}
                          className="block px-2 py-2 font-light text-sm text-red-500 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                        >
                          -20% OFF!
                        </div>
                      </div>
                    </div>

                    {/* COLLECTIONS Section */}
                    <div className="px-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-primary/50 mb-2">Collections</h4>
                      <div className="space-y-1">
                        <div
                          onClick={() => navigateTo("/collections")}
                          className="block px-2 py-2 font-light text-sm text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                        >
                          Isla x Pacifica
                        </div>
                        <div
                          onClick={() => navigateTo("/collections")}
                          className="block px-2 py-2 font-light text-sm text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                        >
                          Icons
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 font-light text-lg hover:bg-brand-detail/30 rounded-lg transition-colors"
                  type="button"
                >
                  About
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileAboutOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <OurStoryModal>
                      <div className="block px-4 py-2 font-light text-base text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer">
                        Our Story
                      </div>
                    </OurStoryModal>
                    <SustainabilityModal>
                      <div className="block px-4 py-2 font-light text-base text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer">
                        Sustainability & Ethics
                      </div>
                    </SustainabilityModal>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-brand-primary/10">
            <p className="text-sm font-light text-brand-primary/60 text-center">
              Swimwear & beachwear produced sustainably
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
