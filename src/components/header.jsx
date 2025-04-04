import React, { useState } from "react";
import { Drawer, Dropdown, Space } from "antd";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DrawerStyled = styled(Drawer)`
  background-color: #1e1e1e !important;
  color: white;
  height: calc(100vh - 112px) !important;
  top: 112px !important;
  position: relative;
  .ant-drawer-body {
    padding: 0;
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      label: <a href="#">Русский</a>,
      key: "0",
    },
    {
      label: <a href="#">Uzbekcha</a>,
      key: "1",
    },
  ];

  return (
    <>
      <div className="px-5 md:px-20 bg-[#1E1E1E] h-10 flex items-center justify-between">
        <div className="hover:bg-[#2A2A2A]">
          <a
            href="tel:998906307705"
            className="text-white flex items-center gap-2 text-[12px] transition-all duration-300 ease-linear cursor-pointer h-10 hover:px-4"
          >
            <Phone color="white" size={16} />
            <span>998 90 123 45 67</span>
          </a>
        </div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a className="hover:bg-[#2A2A2A]" onClick={(e) => e.preventDefault()}>
            <Space className="text-white text-[12px] transition-all duration-300 ease-linear cursor-pointer h-10 hover:px-4 uppercase">
              O'zbekcha
              <ChevronDown />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="sticky top-0 px-5 md:px-20 flex items-center justify-between h-[72px] bg-white z-[100]">
        <nav className="h-full hidden md:flex items-center gap-5 hover:text-gray-400">
          <Link className="nav_link" to="/about">
            О компании
          </Link>
          <Link to={"/services"} className="nav_link">
            Сервис
          </Link>
        </nav>
        <div>
          <Link
            to={"/"}
            className="uppercase font-bold text-2xl"
            style={{ fontFamily: "cursive" }}
          >
            Beston
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <Link to="/dealers" className="nav_link">
            Дилеры
          </Link>
          <Link to="/contacts" className="nav_link">
            Контакты
          </Link>
        </div>
        <div className="md:hidden block">
          <button className="cursor-pointer text-white p-2 rounded-lg shadow-lg">
            {!open ? (
              <Menu color="black" onClick={() => setOpen(true)} size={24} />
            ) : (
              <X color="black" size={24} onClick={() => setOpen(false)} />
            )}
          </button>
        </div>
      </div>

      <DrawerStyled
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        className="!z-[10]"
        mask={false}
      >
        <div className="flex flex-col p-5">
          <Link className="!text-white text-lg py-2 px-2 border-b border-[#545252]" to="/about">
            О компании
          </Link>
          <Link to={"/services"} className="!text-white text-lg py-2 px-2 border-b border-[#545252]">
            Сервис
          </Link>
          <Link to="/dealers" className="!text-white text-lg py-2 px-2 border-b border-[#545252]">
            Дилеры
          </Link>
          <Link to="/contacts" className="!text-white text-lg py-2 px-2 border-b border-[#545252]">
            Контакты
          </Link>
        </div>
      </DrawerStyled>
    </>
  );
}
