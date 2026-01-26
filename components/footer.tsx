import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { OurStoryModal } from "@/components/our-story-modal"
import { SustainabilityModal } from "@/components/sustainability-modal"

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-secondary py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Image src="/images/LOGO5.png" alt="Pacífica Logo" width={120} height={60} className="h-12 w-auto invert" />
          <p className="mt-4 text-sm text-brand-secondary/70 font-light">Swimwear & beachwear produced sustainably.</p>
        </div>
        <div>
          <h4 className="font-medium uppercase tracking-wider mb-4">Shop</h4>
          <ul className="space-y-2 text-brand-secondary/70 font-light">
            <li>
              <Link href="#" className="hover:text-brand-secondary">
                New In
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-secondary">
                Collections
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-secondary">
                Bikinis
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-secondary">
                Beachwear
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium uppercase tracking-wider mb-4">About</h4>
          <ul className="space-y-2 text-brand-secondary/70 font-light">
            <li>
              <OurStoryModal>
                <button className="hover:text-brand-secondary text-left cursor-pointer">Our Story</button>
              </OurStoryModal>
            </li>
            <li>
              <SustainabilityModal>
                <button className="hover:text-brand-secondary text-left cursor-pointer">Sustainability & Ethics</button>
              </SustainabilityModal>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-secondary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand-secondary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-secondary/20 mt-8 pt-6 text-center text-sm text-brand-secondary/50 font-light">
        <p>&copy; {new Date().getFullYear()} Pacífica. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
