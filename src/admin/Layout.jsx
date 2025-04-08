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
    path: "/courses",
  },
  {
    id: "4",
    name: "Часто задаваемые вопросы",
    path: "/faq-section",
  },
];

export default function LayoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-[100px] bg-white flex items-center justify-between px-20 shadow-md">
        <img src={AdminLogo} alt="Admin Logo" />
        <select>
          <option value="">Uz</option>
          <option value="">En</option>
          <option value="">Ru</option>
        </select>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar - Sticky qilish uchun ota divga height berish kerak */}
        <div className="w-[250px] flex-shrink-0 bg-white p-4">
          <div className="sticky top-4 flex flex-col gap-3">
            {router.map((item) => (
              <NavLink
                key={item.id}
                to={`/admin${item.path}`}
                end
                className={({ isActive }) =>
                  `text-[#222222] text-lg font-medium px-4 py-3 border border-[#FFE9EB] rounded-[6px] transition-all duration-300 ${
                    isActive
                      ? "bg-[#FFE9EB] text-[#A11E29]"
                      : "hover:bg-[#FFE9EB]"
                  } shadow-sm`
                }
                style={{
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        <main className="flex-1 bg-[#F7F8FD] p-5">
          <div className="border border-[#FAEAEB] rounded-[12px] bg-white min-h-full p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}