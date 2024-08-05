import Image from "next/image"
import LanyesLogo from "../../public/lanyes-logo.svg"
import AliancaLogo from "../../public/alianca-logo.svg"
import HospitalLogo from "../../public/hospital-logo.svg"
import G6Logo from "../../public/g6-logo.svg"
import MarquesLogo from "../../public/marques-logo.svg"

const LOGOS = [LanyesLogo, AliancaLogo, HospitalLogo, G6Logo, MarquesLogo]

export function InfiniteHorizontalScroll() {
  return (
    <div className="relative m-auto w-[80%] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[230px] items-center justify-center"
            key={index}
          >
            <Image src={logo} alt="image" width={100} height={100} />
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[230px] items-center justify-center"
            key={index}
          >
            <Image src={logo} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}
