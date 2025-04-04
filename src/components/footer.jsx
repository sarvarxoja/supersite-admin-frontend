import { Facebook, Instagram, Move, Search, Send, Youtube } from "lucide-react";
import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  font-size: 24px;
  padding: 15px 30px 15px 0;
  color: white;
  outline: none;
  width: 100%;
  &::placeholder {
    color: #86868b;
  }
`;

export default function Footer() {
  return (
    <div className="flex flex-col justify-between bg-[#1e1e1e] p-5 md:px-20 md:py-10 md:pt-20">
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="uppercase font-semibold text-2xl md:text-4xl text-white w-1/3"
          style={{ fontFamily: "cursive" }}
        >
          Beston
        </a>
        <div className="hidden md:flex flex-col border-b border-[#86868b] group cursor-pointer relative lg:w-[50%]">
          <div className="flex items-center">
            <InputStyled type="text" placeholder="Поиск по сайту" />
            <Search className="text-[#86868b] hover:text-white" />
          </div>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-1000 group-hover:w-full"></span>
        </div>
      </div>
      <div className="pt-5 md:pt-10">
        <p className="text-[#86868b] text-lg pb-10">Справочный центр</p>
        <div className="flex justify-between md:flex-col">
          <div>
            <a
              className="text-2xl md:text-4xl font-semibold text-white"
              href="tel:998901234567"
            >
              998 (90) 123 45 67
            </a>
            <br />
            <a
              className="text-2xl md:text-4xl font-semibold text-white pt-3 inline-block"
              href="#"
            >
              info@beston.uz
            </a>

            <div className="flex gap-4 pt-10">
              <button className="w-16 h-16 bg-[#ffffff0d] rounded-[25%] flex items-center justify-center text-white hover:text-blue-500 hover:bg-white transition-colors">
                <Facebook />
              </button>
              <button className="w-16 h-16 bg-[#ffffff0d] rounded-[25%] flex items-center justify-center text-white hover:text-red-500 hover:bg-white transition-colors">
                <Instagram />
              </button>
              <button className="w-16 h-16 bg-[#ffffff0d] rounded-[25%] flex items-center justify-center text-white hover:text-blue-500 hover:bg-white transition-colors">
                <Send />
              </button>
              <button className="w-16 h-16 bg-[#ffffff0d] rounded-[25%] flex items-center justify-center text-white hover:text-red-500 hover:bg-white transition-colors">
                <Youtube />
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-between pt-10">
            <div className="flex flex-col gap-3">
              <p className="text-white text-2xl pb-5">Бытовая техника</p>
              <a className="text-[#86868b] text-lg" href="#">
                Холодильники
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Холодильники
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Пылесосы
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Мелкая техника
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white text-2xl pb-5">Бытовая техника</p>
              <a className="text-[#86868b] text-lg" href="#">
                Холодильники
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Холодильники
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Пылесосы
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Мелкая техника
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white text-2xl pb-5">Бытовая техника</p>
              <a className="text-[#86868b] text-lg" href="#">
                Холодильники
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Холодильники
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Пылесосы
              </a>
              <a className="text-[#86868b] text-lg" href="#">
                Мелкая техника
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#86868b] pt-4 mt-5 md:mt-16 flex items-center justify-between">
        <p className="text-[#86868b] text-base">
          © 2025 Beston. Все права защищены
        </p>
        <button className="cursor-pointer">
          <Move color="#ffffff" strokeWidth={1} />
        </button>
      </div>
    </div>
  );
}
