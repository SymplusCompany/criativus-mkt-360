"use client"

import { useState, useEffect } from "react"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { OurClients } from "@/components/OurClients"
import { ProductSection } from "@/components/ProductSection"
import { SectionCardsClients } from "@/components/SectionCardsClients"
import { ServicesSection } from "@/components/ServicesSection"
import { TeamSection } from "@/components/TeamSection"
import ArrowUp from "../public/up-arrow.svg"
import Image from "next/image"

export default function Home() {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  }, [showScroll])

  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="clients">
          <OurClients />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="products">
          <ProductSection />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section>
          <SectionCardsClients />
        </section>
        <Footer />
      </div>

      {showScroll && (
        <div
          onClick={scrollTop}
          className="fixed bottom-5 right-5 w-10 h-10 bg-[#485AFF] text-white rounded-full flex items-center justify-center shadow-lg hover:cursor-pointer"
        >
          <Image src={ArrowUp} alt="arrow up icon" width={15} height={15} />
        </div>
      )}
    </>
  )
}
