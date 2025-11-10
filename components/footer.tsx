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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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
        <div>
          <h4 className="font-medium uppercase tracking-wider mb-4">Join Us</h4>
          <p className="mb-4 text-brand-secondary/70 font-light">Get updates on new arrivals and special offers.</p>
          <div className="flex">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-brand-secondary/20 border-none rounded-r-none text-brand-secondary placeholder:text-brand-secondary/50 font-light"
            />
            <Button
              type="submit"
              className="bg-brand-secondary text-brand-primary rounded-l-none hover:bg-brand-secondary/80 font-medium"
            >
              Subscribe
            </Button>
          </div>
          <div className="flex space-x-4 mt-6">
            <Link href="#">
              <Instagram className="h-6 w-6 text-brand-secondary/70 hover:text-brand-secondary" />
            </Link>
            <Link href="#">
              <Facebook className="h-6 w-6 text-brand-secondary/70 hover:text-brand-secondary" />
            </Link>
            <Link href="#">
              <Twitter className="h-6 w-6 text-brand-secondary/70 hover:text-brand-secondary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-secondary/20 mt-8 pt-6 text-center text-sm text-brand-secondary/50 font-light">
        <p>&copy; {new Date().getFullYear()} Pacífica. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
