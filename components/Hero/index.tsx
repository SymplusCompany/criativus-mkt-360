import Image from "next/image"

import BackgroundGradient from "../../public/background.svg"
import BackgroundGradientTeam from "../../public/background.png"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundGradientTeam}
          objectFit="cover"
          alt="Background"
          className="w-full lg:h-full hidden lg:block"
        />

        <Image
          src={BackgroundGradient}
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="w-full block lg:hidden"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-10 md:px-20 lg:py-5 xl:py-20">
        <div className="w-full lg:w-1/2 text-white">
          <p className="font-semibold text-sm md:text-lg lg:text-sm xl:text-lg text-[#20A5B2]">
            Uma agência completa de marketing Digital
          </p>
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-3xl my-4">
            Equipe apaixonada por transformar ideias em experiências digitais
            marcantes
          </h1>
          <p className="mb-8 text-[#D4D4D4] text-sm md:text-lg lg:text-sm xl:text-lg">
            Nosso DNA é criatividade, e nosso propósito é impulsionar a presença
            online de maneira única e envolvente.
          </p>
          <Link
            href="#"
            className="bg-[#485AFF] text-white px-6 py-3 rounded-md text-sm"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
