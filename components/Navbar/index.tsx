"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

//Imports
import logo from "../../public/logo.png"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      closeMenu()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <nav className="text-sm">
      <div className="flex justify-between items-center w-[80%] mx-auto py-8">
        <div className="text-white font-bold">
          <Image src={logo} alt="logo criativus" width={150} height={50} />
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Início
          </a>
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, "services")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Serviços
          </a>
          <a
            href="#products"
            onClick={(e) => handleLinkClick(e, "products")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Produtos
          </a>
          <a
            href="#clients"
            onClick={(e) => handleLinkClick(e, "clients")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Nossos Clientes
          </a>
          <a
            href="#team"
            onClick={(e) => handleLinkClick(e, "team")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Quem Somos
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none relative z-[9999]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center gap-6 text-xl">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Início
          </a>
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, "services")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Serviços
          </a>
          <a
            href="#products"
            onClick={(e) => handleLinkClick(e, "products")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Produtos
          </a>
          <a
            href="#clients"
            onClick={(e) => handleLinkClick(e, "clients")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Nossos Clientes
          </a>
          <a
            href="#team"
            onClick={(e) => handleLinkClick(e, "team")}
            className="text-white hover:text-[#20A5B2] transition-all duration-100"
          >
            Quem Somos
          </a>
        </div>
      )}
    </nav>
  )
}
