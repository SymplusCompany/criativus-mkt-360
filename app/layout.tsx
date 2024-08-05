import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Criativus Marketing 360°",
  description:
    "Descubra a Criativus Marketing 360°, uma agência especializada em soluções completas de marketing digital. Oferecemos serviços de branding, publicidade, desenvolvimento web e mais para ajudar sua empresa a alcançar novos patamares. Conheça nossos produtos, serviços, clientes e equipe.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
