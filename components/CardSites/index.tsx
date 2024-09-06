import Image from "next/image"
import Link from "next/link"
import CheckIcon from "../../public/check-icon.svg"

export function CardSites() {
  return (
    <div className="flex gap-6 justify-center flex-wrap">
      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg min-h-[400px]">
        <p className="text-xl font-bold">Landing Pages</p>
        <div className="">
          <p className="text-sm text-gray-400">
            Criação de landing pages eficazes para capturar leads e aumentar
            suas conversões.
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Design responsivo e atrativo</p>
          </li>
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Otimização para conversões</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            target="_blank"
            className="bg-[#485AFF] px-3 py-4 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg min-h-[400px]">
        <p className="text-xl font-bold">Web Sites</p>
        <div className="">
          <p className="text-sm text-gray-400">
            Desenvolvimento de websites profissionais para destacar sua presença
            online.
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Design moderno e responsivo</p>
          </li>
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>SEO otimizado</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            target="_blank"
            className="bg-[#485AFF] px-3 py-4 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg min-h-[400px]">
        <p className="text-xl font-bold">Blog</p>
        <div className="">
          <p className="text-sm text-gray-400">
            Criação de blogs personalizados para compartilhar suas ideias e
            atrair leitores.
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Layout personalizado</p>
          </li>
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>SEO otimizado para postagens</p>
          </li>
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Fácil gerenciamento de conteúdo</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            target="_blank"
            className="bg-[#485AFF] px-3 py-4 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg min-h-[400px]">
        <p className="text-xl font-bold">Projeto Personalizado</p>
        <div className="">
          <p className="text-sm text-gray-400">
            Soluções sob medida para atender as necessidades exclusivas do seu
            negócio.
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Consultoria personalizada</p>
          </li>
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Desenvolvimento de funcionalidades exclusivas</p>
          </li>
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Suporte contínuo e manutenção</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            target="_blank"
            className="bg-[#485AFF] px-3 py-4 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
