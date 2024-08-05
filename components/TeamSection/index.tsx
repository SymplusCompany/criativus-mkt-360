import Image from "next/image"

import Time1 from "../../public/time1.png"
import Time2 from "../../public/time2.png"
import Time3 from "../../public/time3.png"

export function TeamSection() {
  return (
    <div className="w-[70%] mx-auto">
      <div className="flex w-full flex-col items-center justify-center md:justify-normal gap-3  md:text-center">
        <p className="font-semibold text-2xl md:w-[400px] md:text-3xl lg:w-[636px] lg:text-5xl">
          Conheça o <span className="text-[#20A5B2]">nosso time </span> e quem
          nos somos
        </p>
      </div>

      <ul className="flex items-center justify-around mt-14 flex-wrap gap-5">
        <li className="flex flex-col items-center gap-2 md:gap-8">
          <Image
            src={Time1}
            alt="foto de perfil Ingrid Martins"
            className="grayscale hover:grayscale-0 transition-all duration-150 w-[100px] lg:w-[150px]"
            width={150}
            height={150}
          />

          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-lg">Ingrid Martins</p>
            <p className="w-[193px] text-center text-sm md:text-base">
              Pós Graduação em Mídias Socais.
            </p>
          </div>
        </li>

        <li className="flex flex-col items-center gap-8">
          <Image
            src={Time2}
            alt="foto de perfil Ingrid Martins"
            className="grayscale hover:grayscale-0 transition-all duration-150 w-[100px] lg:w-[150px]"
            width={150}
            height={150}
          />

          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-lg">Alex Silva</p>
            <p className="w-[193px] text-center text-sm md:text-base">
              Design Gráfico.
            </p>
          </div>
        </li>

        <li className="flex flex-col items-center gap-8">
          <Image
            src={Time3}
            alt="foto de perfil Ingrid Martins"
            className="grayscale hover:grayscale-0 transition-all duration-150 w-[100px] lg:w-[150px]"
            width={150}
            height={150}
          />

          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-lg">Colaborador</p>
            <p className="w-[193px] text-center text-sm md:text-base">Cargo</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
