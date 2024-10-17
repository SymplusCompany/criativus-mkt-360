"use client"

import { useState } from "react"
import { CardGraphicDesign } from "../CardGraphicDesign"
import { CardPaidTraffic } from "../CardPaidTraffic"
import { CardSites } from "../CardSites"
import CardSocialMediaManagement from "../CardSocialMediaManagement"
import { CardVideoCreation } from "../CardVideoCreation"

const tabs = [
  { id: "socialMedia", label: "Gestão de Mídias Sociais" },
  { id: "sites", label: "Web Sites" },
  { id: "paidTraffic", label: "Tráfego Pago" },
  { id: "videoCreation", label: "Criação de Vídeos" },
  { id: "graphicDesign", label: "Design Gráfico" },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("socialMedia")

  return (
    <div className="w-[80%] mx-auto md:px-14 py-8 md:w-full">
      <div className="flex w-full flex-col items-center justify-center md:justify-normal gap-3  md:text-center">
        <p className="font-semibold text-3xl md:w-[400px] md:text-3xl lg:w-[636px] lg:text-5xl">
          Nossos <span className="text-[#20A5B2]">serviços</span>
        </p>
        <p className="text-[#d4d4d4] w-[95%] md:w-[34%] text-sm text-center">
          Conheça nossos produtos que são únicos para cada um de nossos clientes
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 my-10 md:my-14">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 text-left py-2 mx-2 ${
              activeTab === tab.id
                ? "bg-gray-500 rounded-lg text-white"
                : "bg-none"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "socialMedia" && <CardSocialMediaManagement />}
      {activeTab === "sites" && <CardSites />}
      {activeTab === "paidTraffic" && <CardPaidTraffic />}
      {activeTab === "videoCreation" && <CardVideoCreation />}
      {activeTab === "graphicDesign" && <CardGraphicDesign />}
    </div>
  )
}
