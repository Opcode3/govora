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
      image: "/news/x.jpg",
    },
    {
      title:
        "Lagos State Taskforce Sacks Two Officers Caught Stealing Phones During Drug Raid",
      description:
        "The Lagos State Taskforce has dismissed two of its officers, Fatai Yusuf (42) and Hammed Garuba (38), for theft during a recent raid on a hotel in Gowon Estate, Ipaja of the state.",
      link: "#",
      image: "/news/9.jpg",
    },
    {
      title:
        "Resident Recounts How Lack Of Ballot Papers, Violence Disrupted Ogun Local Govt Election, Suppressed Voters",
      description:
        "A resident of Agbero Market Polling Unit in Ward 10 in the Remo North local government area of Ogun State has described how lack of election materials and violence disrupted the state's recently concluded local council elections.",
      link: "#",
      image: "/news/10.jpg",
    },
    {
      title:
        "French President Macron Claims Tinubu Is About To Transform Nigeria Like He Did In Lagos",
      description:
        "A new environmental protection act has been signed to address climate change concerns.",
      link: "#",
      image: "/news/7.jpeg",
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
                <p className="text-gray-700 text-lg line-clamp-2">
                  {news.description}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
