import React from "react";
import Texnika1 from "../../assets/textnika1.webp";
import Texnika2 from "../../assets/textnika2.webp";
import Texnika3 from "../../assets/textnika3.webp";
import Texnika4 from "../../assets/textnika4.webp";

export default function Techniques() {
  const items = [
    {
      id: 1,
      image: Texnika1,
      name: "Холодильники",
      desc: "Познакомьтесь с лучшими холодильниками BESTON для вашей кухни прямо сейчас! Вас ждут качество, удобство и инновации.",
      style: "md:w-full md:row-start-1 md:row-end-3 md:overflow-hidden",
    },
    {
      id: 2,
      image: Texnika2,
      name: "Холодильники",
      desc: "Познакомьтесь с лучшими холодильниками BESTON для вашей кухни прямо сейчас! Вас ждут качество, удобство и инновации.",
      style: "md:w-full md:row-start-1 md:row-end-2 md:overflow-hidden",
    },
    {
      id: 3,
      image: Texnika3,
      name: "Холодильники",
      desc: "Познакомьтесь с лучшими холодильниками BESTON для вашей кухни прямо сейчас! Вас ждут качество, удобство и инновации.",
      style: "md:w-full md:row-start-2 md:row-end-3 md:overflow-hidden",
    },
    {
      id: 4,
      image: Texnika4,
      name: "Холодильники",
      desc: "Познакомьтесь с лучшими холодильниками BESTON для вашей кухни прямо сейчас! Вас ждут качество, удобство и инновации.",
      style: "md:h-full md:row-start-1 md:row-end-3 md:overflow-hidden",
    },
  ];

  return (
    <div className="py-5 md:pt-20 px-5 md:px-20 bg-[#f2f2f2] md:bg-white">
      <p className="text-xl sm:text-3xl font-semibold uppercase animation">
        <span>Бытовая техника</span>{" "}
        <span className="text-sm -translate-y-2 opacity-80 inline-block">
          (4)
        </span>
      </p>
      <div className="grid justify-center md:grid-cols-3 md:grid-rows-2 gap-5 pt-10 md:max-h-[665px]">
        {items.map((item) => (
          <div
            className={`flex flex-col items-center md:relative gap-3 max-w-[500px] bg-white p-6 md:p-0 rounded-[12px] md:rounded-[0] cursor-pointer ${item.style}`}
            key={item.id}
          >
            <div className="relative w-full h-full overflow-hidden flex items-center flex-col">
              <img
                className="max-h-[200px] md:max-h-full md:w-full md:h-full md:object-cover duration-1000 transform transition-all md:hover:scale-105"
                src={item.image}
                alt=""
              />
              <p className="text-4xl font-medium md:absolute md:text-2xl md:bottom-4 md:left-4 md:self-start md:text-white">
                {item.name}
              </p>
            </div>
            <p className="text-base md:hidden text-[#86868b] text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
