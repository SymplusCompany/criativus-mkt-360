"use client"

import { CardClients } from "../CardClients"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const customersSay = [
  {
    description:
      "Track has simplified all my tasks.Managing my work has become easier.”",
    client: "John Doe",
    company: "ABC Company",
  },
  {
    description:
      "Track has simplified all my tasks.Managing my work has become easier.”",
    client: "John Doe",
    company: "ABC Company",
  },
  {
    description:
      "Track has simplified all my tasks.Managing my work has become easier.”",
    client: "John Doe",
    company: "ABC Company",
  },
  {
    description:
      "Track has simplified all my tasks.Managing my work has become easier.”",
    client: "John Doe",
    company: "ABC Company",
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
    <div className="px-14 py-8 flex flex-col gap-10">
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
