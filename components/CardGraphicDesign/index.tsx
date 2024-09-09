import Image from "next/image"
import Link from "next/link"
import CheckIcon from "../../public/check-icon.svg"

export function CardGraphicDesign() {
  return (
    <div>
      <h1 className="text-3xl w-full text-[#20A5B2] md:ml-5">Pacotes</h1>
      <div className="flex gap-6 justify-center flex-wrap mt-10">
        <div className="flex flex-col gap-5 w-[280px] p-6 bg-[#18181B] rounded-lg">
          <div className="flex flex-col gap-5">
            <div className="flex items-baseline">
              <p className=" text-3xl md:text-5xl">
                R$ <span>50</span>
              </p>
              <span className="text-sm text-gray-400">/und</span>
            </div>
          </div>

          <div className="w-full h-0.5 bg-[#27272A]" />

          <ul className="flex flex-col gap-5 text-sm flex-grow">
            <li className="flex items-center gap-2">
              <Image src={CheckIcon} alt="Check ícone da cor cinza" />
              <p>1 criativo</p>
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
          <div className="flex flex-col gap-5">
            <div className="flex items-baseline">
              <p className=" text-3xl md:text-5xl">
                R$ <span>25</span>
              </p>
              <span className="text-sm text-gray-400">/und</span>
            </div>
          </div>

          <div className="w-full h-0.5 bg-[#27272A]" />

          <ul className="flex flex-col gap-5 text-sm flex-grow">
            <li className="flex items-center gap-2">
              <Image src={CheckIcon} alt="Check ícone da cor cinza" />
              <p>6 a 10 criativos</p>
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
          <div className="flex flex-col gap-5">
            <div className="flex items-baseline">
              <p className=" text-3xl md:text-5xl">
                R$ <span>35</span>
              </p>
              <span className="text-sm text-gray-400">/und</span>
            </div>
          </div>

          <div className="w-full h-0.5 bg-[#27272A]" />

          <ul className="flex flex-col gap-5 text-sm flex-grow">
            <li className="flex items-center gap-2">
              <Image src={CheckIcon} alt="Check ícone da cor cinza" />
              <p>2 a 5 criativos</p>
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
          <div className="flex flex-col gap-5">
            <div className="flex items-baseline">
              <p className=" text-3xl md:text-5xl">
                R$ <span>20</span>
              </p>
              <span className="text-sm text-gray-400">/und</span>
            </div>
          </div>

          <div className="w-full h-0.5 bg-[#27272A]" />

          <ul className="flex flex-col gap-5 text-sm flex-grow">
            <li className="flex items-center gap-2">
              <Image src={CheckIcon} alt="Check ícone da cor cinza" />
              <p>+10 Criativos</p>
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
          <div className="flex flex-col gap-5">
            <div className="flex items-baseline">
              <p className=" text-3xl md:text-5xl">
                R$ <span>5,00</span>
              </p>
              <span className="text-sm text-gray-400">/und</span>
            </div>
          </div>

          <div className="w-full h-0.5 bg-[#27272A]" />

          <ul className="flex flex-col gap-5 text-sm flex-grow">
            <li className="flex items-center gap-2">
              <Image src={CheckIcon} alt="Check ícone da cor cinza" />
              <p>Replicações</p>
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
      </div>
    </div>
  )
}
