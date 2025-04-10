import React, { useEffect } from "react";
import AdminLogo from "../assets/admin-logo.png";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const router = [
  {
    id: "1",
    name: "general_statistics",
    path: "/",
  },
  {
    id: "2",
    name: "news",
    path: "/news",
  },
  {
    id: "3",
    name: "courses",
    path: "/courses",
  },
  {
    id: "4",
    name: "frequently_asked_questions",
    path: "/faq-section",
  },
];

export default function LayoutPage() {
  const { lang } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const newLang = event.target.value;
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(uz|en|ru)/, ''); // eski lang-ni olib tashlaymiz
    const newPath = `/${newLang}${pathWithoutLang}`; // yangi lang bilan yo'lni yasaymiz
  
    i18n.changeLanguage(newLang); // Tilni o'zgartiramiz
    navigate(newPath); // Hozirgi sahifada qolgan holda lang-ni almashtiramiz
  };

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang); // URL dan tilni o'zgartiramiz
    }
  }, [lang, i18n]);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-[100px] bg-white flex items-center justify-between px-20 shadow-md">
        <img src={AdminLogo} alt="Admin Logo" />
        <select onChange={changeLanguage}>
        <option value="en" selected={lang === 'en'}>English</option>
        <option value="ru" selected={lang === 'ru'}>Русский</option>
        <option value="uz" selected={lang === 'uz'}>Uzbek</option>
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
                to={`/${lang}/admin${item.path}`}
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
                {t(item.name)}
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
