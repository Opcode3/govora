// components/SpotlightNewsSlider.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Correct CSS import
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
export default function SpotlightNewsSlider() {
  // Sample spotlight news data
  const spotlightNews = [
    {
      title: "Govora Launches New Platform",
      description:
        "Govora has officially launched a new platform to improve public service delivery.",
      link: "#",
      image: "/news/news_1.png",
    },
    {
      title: "New Policy on Public Health",
      description:
        "The government introduces a new policy focusing on improving public health in rural areas.",
      link: "#",
      image: "/news/news_2.jpg",
    },
    {
      title: "Education Reforms Announced",
      description:
        "The education minister announces a series of new reforms aimed at enhancing primary education.",
      link: "#",
      image: "/news/news_3.webp",
    },
    {
      title: "Environmental Protection Act Signed",
      description:
        "A new environmental protection act has been signed to address climate change concerns.",
      link: "#",
      image: "/news/news_4.jpg",
    },
  ];

  return (
    <div className="w-full group">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {spotlightNews.map((news, index) => (
            <SwiperSlide key={index}>
              <Link href={news.link} className="">
                <div className="w-full h-[320px] overflow-hidden rounded-sm relative my-4">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium group-hover:underline text-gray-700">
                  {news.title}
                </h3>
                <p className="text-gray-700 text-lg">{news.description}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
