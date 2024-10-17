import { CardProduct } from "../CardProduct"

export function ProductSection() {
  return (
    <div className="max-auto px-14 py-8">
      <div className="flex w-full flex-col items-center justify-center md:justify-normal gap-3  md:text-center">
        <p className="font-semibold text-2xl md:w-[400px] md:text-3xl lg:w-[636px] lg:text-5xl">
          Nossos <span className="text-[#20A5B2]">produtos</span>
        </p>
        <p className="text-[#d4d4d4] w-[95%] md:w-[34%] text-sm text-center">
          Conheça nossos produtos que são únicos para cada um de nossos clientes
        </p>
      </div>

      <CardProduct />
    </div>
  )
}
