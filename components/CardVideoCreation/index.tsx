import Image from "next/image"
import Link from "next/link"
import CheckIcon from "../../public/check-icon.svg"

export function CardVideoCreation() {
  return (
    <div className="flex gap-6 justify-center flex-wrap">
      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg">
        <p>Reals básico</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline">
            <p className=" text-3xl md:text-5xl">
              R$ <span>100</span>
            </p>
            <span className="text-sm text-gray-400">/und</span>
          </div>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>1 cena e legenda</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="bg-[#485AFF] md:px-3 px-2 md:py-4 py-3 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg">
        <p>Reals Moderado</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline">
            <p className=" text-3xl md:text-5xl">
              R$ <span>250</span>
            </p>
            <span className="text-sm text-gray-400">/und</span>
          </div>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>3 cena e legenda</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="bg-[#485AFF] md:px-3 px-2 md:py-4 py-3 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg">
        <p>Reals Pro</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline">
            <p className=" text-3xl md:text-5xl">
              R$ <span>300</span>
            </p>
            <span className="text-sm text-gray-400">/und</span>
          </div>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>1 cena e legenda</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="bg-[#485AFF] md:px-3 px-2 md:py-4 py-3 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg">
        <p>Institucional</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-baseline">
            <p className=" text-3xl md:text-5xl">
              R$ <span>600</span>
            </p>
            <span className="text-sm text-gray-400">/und</span>
          </div>
        </div>

        <div className="w-full h-0.5 bg-[#27272A]" />

        <ul className="flex flex-col gap-5 text-sm flex-grow">
          <li className="flex items-center gap-2">
            <Image src={CheckIcon} alt="Check ícone da cor cinza" />
            <p>1 cena e legenda</p>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="bg-[#485AFF] md:px-3 px-2 md:py-4 py-3 w-fit rounded-lg text-sm text-center"
          >
            Conversar Conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
