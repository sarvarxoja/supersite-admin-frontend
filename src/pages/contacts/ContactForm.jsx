import React from 'react';
import { Phone, MapPin, Mail, Clock, Building, Users, ExternalLink, Send } from 'lucide-react';

export const Contacts = () => {
  return (
    <div>
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Building className="text-gray-800 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Главный офис</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>г. Ташкент, Яшнабадский район, ул. Фаргона йули, 9</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                <p>+998 90 123 45 67</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                <p>info@beston.uz</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 15:00<br />Вс: Выходной</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="text-gray-800 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Отдел продаж</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                <p>+998 90 123 45 68</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                <p>sales@beston.uz</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>Пн-Сб: 9:00 - 19:00<br />Вс: Выходной</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <MapPin className="text-gray-800 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Выставочный зал</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>г. Ташкент, Мирзо-Улугбекский район, ул. Буюк Ипак Йули, 154А</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                <p>+998 90 123 45 69</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>Ежедневно: 10:00 - 20:00</p>
              </div>
              <div className="flex items-center mt-2">
                <ExternalLink className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                <a href="#" className="text-blue-600 hover:underline">Схема проезда</a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-64 bg-gray-200 mb-12 flex items-center justify-center">
          <p className="text-gray-500 flex items-center">
            <MapPin className="mr-2" />
            Карта расположения офисов
          </p>
        </div>
      </div>
    </div>
  );
};