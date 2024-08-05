"use client"

import Link from "next/link"
import Image from "next/image"

import Logo from "../../public/logo.png"
import WhatsappLogo from "../../public/whatsapp.svg"
import InstagramLogo from "../../public/instagram.svg"

export function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="px-14 py-8 flex justify-between flex-col md:flex-row">
      <h1>
        <Image src={Logo} alt="logo criativus" width={150} height={50} />
      </h1>

      <div className="flex flex-col gap-2 md:items-end mt-12 md:mt-0">
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <div className="flex items-center gap-4">
            <Link href="#">Privacidade e Política</Link>
            <Link href="#">Termos e condições</Link>
          </div>
          <div className="flex gap-3">
            <Link href="#">
              <Image
                src={InstagramLogo}
                alt="Instagram logo"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src={WhatsappLogo}
                alt="Instagram logo"
                width={22}
                height={22}
              />
            </Link>
          </div>
        </div>
        <div className="text-xs mt-4 md:mt-0">
          © {year} Desenvolvido pela{" "}
          <Link
            href="https://www.symplus.net"
            className="text-blue-500"
            target="_blank"
          >
            Symplus
          </Link>
        </div>
      </div>
    </div>
  )
}
