"use client"

import { CardClients } from "../CardClients"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const customersSay = [
  {
    description:
      "A Criativus Marketing 360 transformou nossa presença online com soluções criativas e personalizadas. A gestão das nossas mídias sociais nunca foi tão eficiente e impactante.",
    client: "Ana Silva",
    company: "Doce Aliança",
  },
  {
    description:
      "O trabalho da Criativus Marketing 360 foi fundamental para modernizar nosso site e otimizar nosso tráfego pago. Vimos um crescimento significativo em nosso engajamento e conversões.",
    client: "Carlos Souza",
    company: "Hospital Central Sermege",
  },
  {
    description:
      "A equipe da Criativus Marketing 360 criou vídeos incríveis e um design gráfico de alta qualidade que realmente capturaram a essência da nossa marca. Eles são especialistas em transformar ideias em resultados.",
    client: "Laura Fernandes",
    company: "G6 Telecom",
  },
  {
    description:
      "Desde que começamos a trabalhar com a Criativus Marketing 360, nosso alcance nas redes sociais e a eficiência do tráfego pago melhoraram drasticamente. São verdadeiros parceiros no crescimento da nossa empresa.",
    client: "Luano Meira",
    company: "Lanyes Telecom",
  },
  {
    description:
      "A Criativus Marketing 360 fez um trabalho excepcional com o design gráfico e o desenvolvimento do nosso site. Sua criatividade e profissionalismo fizeram toda a diferença para o sucesso do nosso projeto.",
    client: "Juliana Marques",
    company: "Marques Estofados",
  },
]

export function SectionCardsClients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="w-[80%] m-auto px-14 py-8 flex flex-col gap-10">
      <div className="flex w-full flex-col items-center justify-center md:justify-normal gap-3  md:text-center">
        <p className="font-semibold text-2xl md:w-[400px] md:text-3xl lg:w-[636px] lg:text-5xl">
          Veja o que os nossos <span className="text-[#20A5B2]">clientes </span>{" "}
          falam
        </p>
      </div>

      <Slider {...settings}>
        {customersSay.map((item, index) => (
          <CardClients
            key={index}
            description={item.description}
            client={item.client}
            company={item.company}
          />
        ))}
      </Slider>
    </div>
  )
}
