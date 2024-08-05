import { InfiniteHorizontalScroll } from "../InfiniteHorizontalScroll"
import { TitleSection } from "../Title"

export function OurClients() {
  return (
    <div className="flex flex-col gap-10">
      <TitleSection
        title="Clientes"
        featured="Satisfeitos"
        description="Cada um traz consigo desafios únicos e inspirações diversas, enriquecendo nosso trabalho criativo."
      />
      <InfiniteHorizontalScroll />
    </div>
  )
}
