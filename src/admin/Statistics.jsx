import { ChevronDown, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import $api from "../http/api";
import { format } from "date-fns";
import { Pagination, Spin } from "antd";
import DeleteConfirmationModal from "../components/DeleteModal";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Statistics() {
  const [lids, setLids] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pageSize, setPageSize] = useState(9);
  const [loading, setLoading] = useState(false);
  const [totalLids, setTotalLids] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteLoad, setDeleteLoad] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [filterName, setFilterName] = useState("today");
  const { t } = useTranslation();

  const dailyRequests = [
    { id: 1, name: "applications_per_day", filter: "today" },
    { id: 2, name: "applications_per_week", filter: "week" },
    { id: 3, name: "applications_per_month", filter: "month" },
    { id: 4, name: "applications_all", filter: "all" },
  ];

  const getLids = async () => {
    try {
      setLoading(true);
      const { data } = await $api.get(`/lids/time`, {
        params: {
          page: currentPage,
          limit: pageSize,
          filter: filterName,
        },
      });

      if (data) {
        setLids(data.data);
        setTotalLids(data.total);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      setLoading(false);
    }
  };

  function openAndClose(id) {
    setSelectedData(id);
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    getLids();
  }, [filterName, currentPage, pageSize]);

  async function handleDelete() {
    setDeleteLoad(true);

    if (deleteLoad === true) {
      return;
    }

    try {
      await axios.delete(`/lids/${selectedData}`);
      openAndClose();
      getLids();
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteLoad(false);
    }
  }

  return (
    <div className="p-10 flex items-start gap-6 bg-white min-h-screen">
      {/* Фильтры (левая колонка) */}
      <div className="flex flex-col gap-10 max-w-[170px] w-full sticky top-10">
        {dailyRequests.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setFilterName(item.filter);
              setCurrentPage(1);
            }}
            className={`text-xl font-medium cursor-pointer transition-all duration-300 ${
              filterName === item.filter
                ? "underline text-[#3F73BC]"
                : "text-[#737373] hover:text-[#3F73BC]"
            }`}
          >
            {t(item.name)}
          </div>
        ))}
      </div>

      {/* Вертикальная разделительная линия */}
      <div className="w-px h-[calc(100vh-80px)] bg-[#CDE2FF] rounded-[6px] sticky top-10"></div>

      {/* Основное содержимое */}
      <div className="flex-1 flex flex-col">
        <p className="text-[#3F73BC] font-medium text-[52px] mb-6">
          {totalLids}
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : lids.length === 0 ? (
          <div className="text-[#737373] text-xl text-center py-10">
            {t("notfound_applications")}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-4 h-[600px] overflow-y-auto mb-4 pr-2">
              {lids.map((item) => (
                <div
                  key={item.id}
                  className={`border h-[320px] border-[#CDE2FF] rounded-[8px] bg-[#F6F7FA] p-5 relative row-span-2"}`}
                >
                  <p className="text-[#737373] text-sm font-medium min-h-[40px]">
                    {[item.name, item.last_name, item.middle_name]
                      .filter(Boolean)
                      .join(" ")}
                  </p>
                  <p className="text-[#222222] text-sm font-medium pt-2">
                    {item.phone_number}
                  </p>
                  <p className="text-[#222222] text-sm font-medium pt-2">
                    {format(new Date(item.createdAt), "dd/MM/yyyy")} {t("from")}{" "}
                    {item.from_time} {t("to")} {item.to_time}
                  </p>

                  <div className="absolute right-4 top-[34px]">
                    <button
                      onClick={() => openAndClose(item.id)}
                      className="cursor-pointer w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50"
                    >
                      <Trash2 color="#EE2E24" />
                    </button>
                  </div>

                  <div>
                    <p className="pt-[15px] text-[#737373] text-[13px] font-medium">
                      {t("course_direction")}
                    </p>
                    <p className="text-[#222222] text-base font-medium">
                      {item.course_name}
                    </p>
                    <p className="text-base text-[#737373] font-medium pt-[5px]">
                      {t("comment")}
                    </p>
                    <p className="text-base text-[#737373] pt-[5px] line-clamp-4 overflow-hidden">
                      {item.comment || "Нет комментариев"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={totalLids}
                onChange={(page, size) => {
                  setCurrentPage(page);
                  setPageSize(size);
                }}
                showSizeChanger
                pageSizeOptions={["9", "18", "27"]}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} из ${total} записей`
                }
              />
            </div>
          </>
        )}
      </div>
      <DeleteConfirmationModal
        isOpen={isOpen}
        handleDelete={handleDelete}
        closeModal={openAndClose}
      />
    </div>
  );
}
