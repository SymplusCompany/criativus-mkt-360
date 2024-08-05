interface TitleProps {
  title?: string
  featured?: string
  description?: string
}

export function TitleSection({ title, featured, description }: TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center md:justify-normal gap-3 md:text-left">
      <p className="font-semibold text-2xl md:text-5xl">
        {title} <span className="text-[#20A5B2]">{featured}</span>
      </p>
      <p className="text-[#d4d4d4] w-[70%] md:w-[34%] text-sm text-center">
        {description}
      </p>
    </div>
  )
}
