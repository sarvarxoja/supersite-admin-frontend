import React from "react";
import AboutImg from "../../assets/about.png";
import { ChevronRight, MoveRight } from "lucide-react";

export default function About() {
  return (
    <div className="flex justify-between px-5 py-6 md:gap-12 md:mx-20 pb-10">
      <div className="">{/* <img src={AboutImg} alt="" /> */}</div>
      <div className="md:w-[70%]">
        <h3 className="text-2xl font-medium mb-8">Философия</h3>
        <p className="text-2xl md:text-3xl text-[#86868b]">
          Мы стремимся воплощать в жизнь исключительные идеи, вдохновляя
          инновационные решения и утонченный дизайн в области бытовой техники.
        </p>
        <br />
        <br />
        <p className="text-2xl md:text-3xl text-[#86868b] font-light">
          Наша миссия - предлагать высококачественные продукты, которые не
          только улучшают повседневную жизнь, но и становятся неотъемлемой
          частью домашней обстановки.
        </p>
        <a
          className="w-[142px] h-[142px] mt-16 !box-content p-10 hidden md:flex items-center justify-center font-medium rounded-full text-lg text-center border border-[#dedede]"
          href="#"
        >
          Больше <br /> о компании
        </a>
        <div className="relative mt-6 flex md:hidden items-center group w-fit overflow-hidden rounded-full cursor-pointer active:group">
          <div className="absolute inset-0 bg-black w-0 group-active:w-full rounded-full transition-all duration-400"></div>
          <div className="relative bg-black w-12 h-12 flex items-center justify-center rounded-full transition-all duration-1000">
            <span className="absolute transition-opacity duration-500 opacity-100 group-active:opacity-0">
              <ChevronRight color="white" />
            </span>
            <span className="absolute transition-opacity duration-500 opacity-0 group-active:opacity-100 group-active:pl-5">
              <MoveRight color="white" />
            </span>
          </div>
          <span className="relative font-medium text-xl text-black group-active:text-white transition-all duration-300 px-4 pr-8 py-2">
            Узнать больше
          </span>
        </div>
      </div>
    </div>
  );
}
