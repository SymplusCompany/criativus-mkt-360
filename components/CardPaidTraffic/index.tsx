import Image from "next/image"
import Link from "next/link"

import CheckIcon from "../../public/check-icon.svg"

export function CardPaidTraffic() {
  return (
    <div className="flex justify-center gap-6 flex-wrap lg:ml-5">
      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg min-h-[555px]">
        <p className="text-base">Tráfego Pago</p>
        <div className="flex flex-col gap-5 flex-grow">
          <div className="flex items-baseline">
            <p className="text-5xl">
              R$ <span>600</span>
            </p>
            <span className="text-sm text-gray-400">/mês</span>
          </div>
          <p className="text-sm text-gray-400">
            A solução perfeita para impulsionar seu negócio no ambiente digital.
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Aumente a visibilidade da sua marca</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Gere leads qualificados</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Campanhas otimizadas por resultados</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Gestão profissional de anúncios</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <div className="flex flex-col">
              <p>+ Investimento do cliente *</p>
              <span className="italic text-[11px] text-gray-400">
                * O valor de investimento é a parte do valor contratado.
              </span>
            </div>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            className="bg-[#485AFF] px-3 py-4 w-fit rounded-lg text-sm"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
