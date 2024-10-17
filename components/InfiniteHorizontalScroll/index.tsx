import Image from "next/image"
import LanyesLogo from "../../public/lanyes-logo.svg"
import AliancaLogo from "../../public/alianca-logo.svg"
import HospitalLogo from "../../public/hospital-logo.svg"
import G6Logo from "../../public/g6-logo.svg"
import MarquesLogo from "../../public/marques-logo.svg"

const LOGOS = [LanyesLogo, AliancaLogo, HospitalLogo, G6Logo, MarquesLogo]

export function InfiniteHorizontalScroll() {
  return (
    <div className="relative m-auto w-[70%] overflow-hidden">
      {/* Definimos um container para os itens que se moverão */}
      <div className="flex w-[calc(230px*10)] animate-infinite-scroll">
        {LOGOS.map((logo, index) => (
          <div
            className="flex w-[230px] items-center justify-center"
            key={index}
          >
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="flex w-[230px] items-center justify-center"
            key={index + LOGOS.length}
          >
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
        ))}
      </div>
    </div>
  )
}
