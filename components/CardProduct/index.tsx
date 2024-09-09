import Image from "next/image"
import Link from "next/link"

import Bone from "../../public/bone.png"
import Totem from "../../public/totem.png"
import Design from "../../public/design.png"
import Bolsa from "../../public/bolsas.webp"

const products = [
  {
    description:
      "Transforme suas ideias em realidade com nosso Material Gráfico de alta qualidade! Clique aqui para solicitar o seu e veja a diferença que ele pode fazer no seu trabalho.",
    title: "Material Gráfico",
    imageProducts: Design,
    href: "https://wa.me/5577999501850",
  },
  {
    description:
      " Dê um impulso ao seu negócio com um Totem personalizado! É a forma perfeita de chamar a atenção e destacar sua marca. Peça o seu agora e faça sua empresa brilhar!",
    title: "Totem",
    imageProducts: Totem,
    href: "https://wa.me/5577999501850",
  },
  {
    description:
      "Complete seu look com um Boné estiloso e exclusivo! Escolha o seu modelo agora e adicione um toque de personalidade ao seu visual. Adquira o seu hoje mesmo!",
    title: "Boné",
    imageProducts: Bone,
    href: "https://wa.me/5577999501850",
  },
  {
    description:
      "Transforme seu dia a dia com nossas Bolsas práticas e elegantes! Encontre o modelo perfeito para você e adicione estilo e funcionalidade ao seu cotidiano. Compre a sua agora!",
    title: "Bolsas",
    imageProducts: Bolsa,
    href: "https://wa.me/5577999501850",
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
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>

            <Link
              className="bg-[#485AFF] text-sm px-2 py-2 rounded-lg text-center"
              target="_blank"
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
