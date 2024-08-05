import Image from "next/image"

import ImageClient from "../../public/cliente.png"
import FiveStar from "../../public/five-star.svg"

interface CardClientsProps {
  description: string
  client: string
  company: string
}

export function CardClients({
  client,
  company,
  description,
}: CardClientsProps) {
  return (
    <div className="w-full flex gap-2 p-4 rounded-lg shadow-md">
      <div className="hidden xl:inline-flex">
        <Image
          src={ImageClient}
          alt={`Foto do cliente ${client}`}
          width={200}
          height={20}
          className="w-[300px]"
        />
      </div>
      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <Image
            src={FiveStar}
            alt="cinco estrelas amarelas"
            width={70}
            height={20}
          />
          <p>{description}</p>
        </div>
        <div className="flex gap-3 w-full text-sm">
          <p className="font-semibold">{client}</p>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  )
}
