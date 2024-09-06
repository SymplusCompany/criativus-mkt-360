import Image from "next/image"
import Link from "next/link"
import CheckIcon from "../../public/check-icon.svg"

export default function CardSocialMediaManagement() {
  return (
    <div className="flex gap-6 justify-center flex-wrap">
      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg min-h-[555px]">
        <p>Inicial</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline">
            <p className=" text-3xl md:text-5xl">
              R$ <span>600</span>
            </p>
            <span className="text-sm text-gray-400">/mês</span>
          </div>
          <p className="text-sm text-gray-400">
            Ideal para quem deseja iniciar no mundo Digital
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>2 Posts semanais</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>1 vídeo mensal + Bônus legendas</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            target="_blank"
            className="bg-[#485AFF] md:px-3 px-2 md:py-4 py-3 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="relative flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg min-h-[555px]">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-[13px] bg-[#20A5B2] text-xs px-2 py-1 md:px-3 md:py-2 md:font-semibold rounded-lg text-center md:w-[140px]">
          O mais popular 🎉
        </div>
        <p className="mt-4">Intermediário</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline">
            <p className=" text-3xl md:text-5xl">
              R$ <span>800</span>
            </p>
            <span className="text-sm text-gray-400">/mês</span>
          </div>
          <p className="text-sm text-gray-400">
            Para empresas em crescimento que desejam constância nos conteúdos
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>1 Posts semanal</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>1 Reels</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>
              Postagem pela <span className="text-[#20A5B2]">Criativus</span>
            </p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Bônus 1 vídeo a mais mensal</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            target="_blank"
            className="bg-[#485AFF] md:px-3 px-2 md:py-4 py-3 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg">
        <p>Mídia Pro</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline">
            <p className=" text-3xl md:text-5xl">
              R$ <span>1.200</span>
            </p>
            <span className="text-sm text-gray-400">/mês</span>
          </div>
          <p className="text-sm text-gray-400">
            Para marcas líderes e em constante crescimento
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>2 Posts semanais</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>
              Postagem pela <span className="text-[#20A5B2]">Criativus</span>
            </p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>1 Reals</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>10 Agents</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Aux em stories</p>
          </li>

          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>Bonus Mentoria Exclusiva + Gestor de tráfego</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            target="_blank"
            className="bg-[#485AFF] md:px-3 px-2 md:py-4 py-3 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg max-h-[210px]">
        <div className="flex flex-col gap-5">
          <p className="text-xl text-gray-400">
            Procurando algo maior e personalizado?
          </p>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <div className="flex items-center justify-center">
          <Link
            href="https://wa.me/5577999501850"
            target="_blank"
            className="bg-[#485AFF] md:px-3 px-2 md:py-4 py-3 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
