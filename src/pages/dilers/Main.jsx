import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Search, ChevronDown } from "lucide-react";

export const DealersPage = () => {
  const [activeRegion, setActiveRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample dealer data
  const dealers = [
    {
      id: 1,
      name: "BESTON Ташкент",
      region: "tashkent",
      address: "г. Ташкент, Яшнабадский район, ул. Фаргона йули, 9",
      phone: "+998 90 123 45 67",
      email: "tashkent@beston.uz",
      website: "beston.uz",
      isOfficial: true,
    },
    {
      id: 2,
      name: "BESTON Самарканд",
      region: "samarkand",
      address: "г. Самарканд, ул. Амира Темура, 65",
      phone: "+998 90 123 45 68",
      email: "samarkand@beston.uz",
      website: "beston.uz/samarkand",
      isOfficial: true,
    },
    {
      id: 3,
      name: "ПремиумТех",
      region: "bukhara",
      address: "г. Бухара, ул. Навои, 12",
      phone: "+998 90 123 45 69",
      email: "info@premiumtech.uz",
      website: "premiumtech.uz",
      isOfficial: false,
    },
    {
      id: 4,
      name: "BESTON Фергана",
      region: "fergana",
      address: "г. Фергана, ул. Мустакиллик, 45",
      phone: "+998 90 123 45 70",
      email: "fergana@beston.uz",
      website: "beston.uz/fergana",
      isOfficial: true,
    },
    {
      id: 5,
      name: "ТехноМир",
      region: "namangan",
      address: "г. Наманган, ул. Алишера Навои, 78",
      phone: "+998 90 123 45 71",
      email: "info@technomir.uz",
      website: "technomir.uz",
      isOfficial: false,
    },
    {
      id: 6,
      name: "BESTON Андижан",
      region: "andijan",
      address: "г. Андижан, ул. Бабура, 15",
      phone: "+998 90 123 45 72",
      email: "andijan@beston.uz",
      website: "beston.uz/andijan",
      isOfficial: true,
    },
  ];

  // Filter dealers based on active region and search query
  const filteredDealers = dealers.filter((dealer) => {
    const matchesRegion =
      activeRegion === "all" || dealer.region === activeRegion;
    const matchesSearch =
      dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const regions = [
    { id: "all", name: "Все регионы" },
    { id: "tashkent", name: "Ташкент" },
    { id: "samarkand", name: "Самарканд" },
    { id: "bukhara", name: "Бухара" },
    { id: "fergana", name: "Фергана" },
    { id: "namangan", name: "Наманган" },
    { id: "andijan", name: "Андижан" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Официальные дилеры BESTON
          </h2>
          <p className="text-gray-600">
            Мы работаем с надежными партнерами по всему Узбекистану, чтобы
            обеспечить нашим клиентам лучший сервис и поддержку. Найдите
            ближайшего к вам дилера, чтобы ознакомиться с нашей продукцией и
            получить квалифицированную консультацию.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-white w-full pl-10 pr-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Поиск дилера..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative w-full md:w-64">
            <select
              className="bg-white w-full p-2 border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-800"
              value={activeRegion}
              onChange={(e) => setActiveRegion(e.target.value)}
            >
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown size={18} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Dealers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDealers.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{dealer.name}</h3>
                {dealer.isOfficial && (
                  <span className="bg-gray-800 text-white text-xs px-2 py-1">
                    Официальный
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin
                    className="text-gray-500 mr-3 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-700">{dealer.address}</p>
                </div>

                <div className="flex items-center">
                  <Phone
                    className="text-gray-500 mr-3 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-700">{dealer.phone}</p>
                </div>

                <div className="flex items-center">
                  <Mail
                    className="text-gray-500 mr-3 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-700">{dealer.email}</p>
                </div>

                <div className="flex items-center">
                  <Globe
                    className="text-gray-500 mr-3 flex-shrink-0"
                    size={18}
                  />
                  <a
                    href={`https://${dealer.website}`}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dealer.website}
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <button className="bg-gray-800 text-white px-4 py-2  hover:bg-gray-700 transition-colors w-full">
                  Показать на карте
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDealers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-gray-500 text-lg mb-4">Дилеры не найдены</p>
            <button
              className="text-blue-600 hover:underline"
              onClick={() => {
                setActiveRegion("all");
                setSearchQuery("");
              }}
            >
              Сбросить фильтры
            </button>
          </div>
        )}

        {/* Become a Dealer Section */}
        <div className="bg-gray-100 rounded-lg p-8 mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Стать дилером BESTON
            </h2>
            <p className="text-gray-600 mb-6">
              Мы всегда открыты для сотрудничества с надежными партнерами. Если
              вы заинтересованы в том, чтобы стать официальным дилером BESTON,
              свяжитесь с нами для получения подробной информации.
            </p>
            <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
              Подать заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
