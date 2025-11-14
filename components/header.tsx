"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ChevronDown, Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { OurStoryModal } from "@/components/our-story-modal"
import { SustainabilityModal } from "@/components/sustainability-modal"

export function Header() {
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const collectionsDropdownRef = useRef<HTMLDivElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (collectionsDropdownRef.current && !collectionsDropdownRef.current.contains(event.target as Node)) {
        setIsCollectionsOpen(false)
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
    setIsCollectionsOpen(false)
    setIsMobileMenuOpen(false)
    router.push(path)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileCollectionsOpen(false)
    setIsMobileAboutOpen(false)
  }

  return (
    <header className="relative z-50">
      <div className="bg-brand-primary text-brand-secondary py-1 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Envio gratis a Brasil a partir de $50
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Envio gratis a Brasil a partir de $50
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Envio gratis a Brasil a partir de $50
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Envio gratis a Brasil a partir de $50
          </span>
        </div>
        <div className="animate-marquee inline-block">
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Envio gratis a Brasil a partir de $50
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Envio gratis a Brasil a partir de $50
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Envio gratis a Brasil a partir de $50
          </span>
          <span className="mx-4 uppercase text-xs font-extralight tracking-wide">
            Envio gratis a Brasil a partir de $50
          </span>
        </div>
      </div>
      <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between bg-brand-background relative z-50">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-light text-lg">
          <Link href="/" className="hover:text-opacity-70 transition-opacity">
            Home
          </Link>

          {/* Collections Dropdown */}
          <div className="relative" ref={collectionsDropdownRef}>
            <button
              onClick={() => {
                setIsCollectionsOpen(!isCollectionsOpen)
                setIsAboutOpen(false)
              }}
              className="flex items-center gap-1 hover:text-opacity-70 transition-opacity"
              type="button"
            >
              Shop
              <ChevronDown className={`h-4 w-4 transition-transform ${isCollectionsOpen ? "rotate-180" : ""}`} />
            </button>
            {isCollectionsOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-white border border-brand-primary/30 rounded-lg shadow-xl py-2 min-w-[200px]"
                style={{ zIndex: 9999 }}
              >
                <div
                  onClick={() => navigateTo("/collections")}
                  className="px-6 py-3 hover:bg-brand-detail/50 transition-colors font-light text-brand-primary cursor-pointer select-none"
                >
                  Bikinis
                </div>
                <div
                  onClick={() => navigateTo("/enterizas")}
                  className="px-6 py-3 hover:bg-brand-detail/50 transition-colors font-light text-brand-primary cursor-pointer select-none"
                >
                  SwimSuit
                </div>
                <div
                  onClick={() => navigateTo("/only-bottoms")}
                  className="px-6 py-3 hover:bg-brand-detail/50 transition-colors font-light text-brand-primary cursor-pointer select-none"
                >
                  Only Bottoms
                </div>
                <div className="px-6 py-3 font-light text-brand-primary/40 select-none cursor-default">
                  Fitness (Coming soon)
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative" ref={aboutDropdownRef}>
            <button
              onClick={() => {
                setIsAboutOpen(!isAboutOpen)
                setIsCollectionsOpen(false)
              }}
              className="flex items-center gap-1 hover:text-opacity-70 transition-opacity"
              type="button"
            >
              About
              <ChevronDown className={`h-4 w-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
            </button>
            {isAboutOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-white border border-brand-primary/30 rounded-lg shadow-xl py-2 min-w-[200px]"
                style={{ zIndex: 9999 }}
              >
                <OurStoryModal>
                  <div className="px-6 py-3 hover:bg-brand-detail/50 transition-colors font-light text-brand-primary cursor-pointer select-none">
                    Our Story
                  </div>
                </OurStoryModal>
                <SustainabilityModal>
                  <div className="px-6 py-3 hover:bg-brand-detail/50 transition-colors font-light text-brand-primary cursor-pointer select-none">
                    Sustainability & Ethics
                  </div>
                </SustainabilityModal>
              </div>
            )}
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

              {/* Collections Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileCollectionsOpen(!isMobileCollectionsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 font-light text-lg hover:bg-brand-detail/30 rounded-lg transition-colors"
                  type="button"
                >
                  Collections
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isMobileCollectionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobileCollectionsOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <div
                      onClick={() => navigateTo("/collections")}
                      className="block px-4 py-2 font-light text-base text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                    >
                      Collection Isla
                    </div>
                    <div
                      onClick={() => navigateTo("/enterizas")}
                      className="block px-4 py-2 font-light text-base text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                    >
                      SwimSuit
                    </div>
                    <div
                      onClick={() => navigateTo("/only-bottoms")}
                      className="block px-4 py-2 font-light text-base text-brand-primary/80 hover:bg-brand-detail/30 rounded-lg transition-colors cursor-pointer"
                    >
                      Only Bottoms
                    </div>
                    <div className="block px-4 py-2 font-light text-base text-brand-primary/40 rounded-lg cursor-default">
                      Fitness (Coming soon)
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
