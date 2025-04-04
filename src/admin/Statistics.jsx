import { ChevronDown, Trash2 } from "lucide-react";
import React, { useState } from "react";

export default function Statistics() {
  const [activeId, setActiveId] = useState(1);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const dailyRequests = [
    {
      id: 1,
      name: "Заявок за день",
    },
    {
      id: 2,
      name: "Заявок за неделю",
    },
    {
      id: 3,
      name: "Заявок за месяц",
    },
  ];
  const items = [
    {
      id: 1,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 2,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 3,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 4,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 5,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 6,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 7,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 8,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 9,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 10,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 11,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 12,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 13,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 14,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 15,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
    {
      id: 16,
      fullName: "Хамидуллаев Абдуллох Ходжакбар огли",
      number: "+998(99)999-99-99",
      createdAt: "02/04/2025 от 08:00 до 22:00",
      courseName: "Кибербезопасность",
      comment:
        "Мы верим, что защита данных – это не роскошь, а необходимость в современном цифровом мире. ",
    },
  ];
  const toggleExpandItem = (id) => {
    if (expandedItemId === id) {
      setExpandedItemId(null);
    } else {
      setExpandedItemId(id);
    }
  };

  return (
    <div className="p-10 flex items-start gap-6 bg-white">
      <div className="flex flex-col gap-10 max-w-[170px] w-full">
        {dailyRequests.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`text-xl font-medium cursor-pointer transition-all duration-300 ${
              activeId === item.id
                ? "underline text-[#3F73BC]"
                : "text-[#737373]"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="w-1 h-[600px] bg-[#CDE2FF] rounded-[6px]"></div>
      <div>
        <p className="text-[#3F73BC] font-medium text-[52px]">{24}</p>
        <div className="grid grid-cols-3 gap-4 h-[600px] overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className={`border ${
                expandedItemId === item.id
                  ? "row-span-2"
                  : "row-span-1 h-[160px]"
              } border-[#CDE2FF] rounded-[8px] bg-[#F6F7FA] p-5 relative`}
            >
              <p className="text-[#737373] text-sm font-medium">
                {item.fullName}
              </p>
              <p className="text-[#222222] text-sm font-medium pt-2">
                {item.number}
              </p>
              <p className="text-[#222222] text-sm font-medium pt-2">
                {item.createdAt}
              </p>
              <div className="absolute right-4 top-[34px]">
                <button className="cursor-pointer w-10 h-10 rounded-full bg-white flex items-center justify-center mb-[5px]">
                  <ChevronDown
                    className={`transition-transform ${
                      expandedItemId === item.id ? "rotate-180" : ""
                    }`}
                    onClick={() => toggleExpandItem(item.id)}
                    color="#3F73BC"
                  />
                </button>
                <button className="cursor-pointer w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Trash2 color="#EE2E24" />
                </button>
              </div>
              {expandedItemId === item.id && (
                <div>
                  <p className="pt-[15px] text-[#737373] text-[13px] font-medium">
                    Направление курса
                  </p>
                  <p className="text-[#222222] text-base font-medium">
                    {item.courseName}
                  </p>
                  <p className="text-base text-[#737373] font-medium pt-[15px]">
                    Коментарии
                  </p>
                  <p className="text-base text-[#737373] pt-[5px]">
                    {item.comment}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
