import React from "react";
import AdminLogo from "../assets/admin-logo.png";
import { NavLink, Outlet } from "react-router-dom";

const router = [
  {
    id: "1",
    name: "Общая статистика",
    path: "/",
  },
  {
    id: "2",
    name: "Новости",
    path: "/news",
  },
  {
    id: "3",
    name: "Курс",
    path: "/course",
  },
  {
    id: "4",
    name: "Часто задаваемые вопросы",
    path: "/faq-section",
  },
];

export default function LayoutPage() {
  return (
    <>
      <div>
        <div className="h-[132px] bg-white flex items-center justify-between px-20 shadow-md relative">
          <img src={AdminLogo} alt="" />
          <select name="" id="">
            <option value="">Uz</option>
            <option value="">En</option>
            <option value="">Ru</option>
          </select>
        </div>
        <div className="flex min-h-auto">
          <div className="max-w-[250px] w-full flex flex-col gap-3 p-4 pt-6 bg-white shadow-lg rounded-lg">
            {router.map((item) => (
              <NavLink
                key={item.id}
                to={`/admin${item.path}`}
                end
                className={({ isActive }) =>
                  `text-[#222222] text-lg font-medium px-4 py-3 border-[1px] border-[#FFE9EB] rounded-[6px] transition-all duration-300 ${
                    isActive
                      ? "bg-[#FFE9EB] text-[#A11E29]"
                      : "hover:bg-[#FFE9EB]"
                  }`
                }
                style={{
                  display: "block",
                  textDecoration: "none",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="bg-[#F7F8FD] w-full p-5">
            <div className="border border-[#FAEAEB] rounded-[12px] h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
