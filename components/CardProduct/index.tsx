import Image from "next/image"
import Link from "next/link"

import Bone from "../../public/bone.png"
import Totem from "../../public/totem.png"
import Design from "../../public/design.png"
import Bolsa from "../../public/bolsas.webp"

const products = [
  {
    description:
      "Track has simplified all my tasks.Managing my work has become easier.”",
    title: "Material Gráfico",
    imageProducts: Design,
    href: "#",
  },
  {
    description:
      "Track has simplified all my tasks.Managing my work has become easier.”",
    title: "Totem",
    imageProducts: Totem,
    href: "#",
  },
  {
    description:
      "Track has simplified all my tasks.Managing my work has become easier.”",
    title: "Boné",
    imageProducts: Bone,
    href: "#",
  },
  {
    description:
      "Track has simplified all my tasks.Managing my work has become easier.”",
    title: "Bolsas",
    imageProducts: Bolsa,
    href: "#",
  },
]

export function CardProduct() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 md:my-14">
      {products.map((item, index) => (
        <div
          className="flex flex-col gap-2 p-4 rounded-lg shadow-md bg-[#18181B]"
          key={index}
        >
          <div className="w-full">
            <Image
              src={item.imageProducts}
              alt={`Foto do produto ${item.title}`}
              className="w-full h-[120px] object-contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-3 text-sm">
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>

            <Link
              className="bg-[#485AFF] text-sm px-2 py-2 rounded-lg text-center"
              href={item.href}
            >
              Veja mais
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
