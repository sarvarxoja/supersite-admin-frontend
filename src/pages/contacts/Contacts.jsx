import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Building,
  Users,
  ExternalLink,
  Send,
} from "lucide-react";

export const ContactForm = () => {
  return (
    <div  className="flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8">Напишите нам</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="Введите ваше имя"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
              placeholder="+998 __ ___ __ __"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Электронная почта
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Сообщение
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Введите ваше сообщение"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 cursor-pointer flex items-center hover:bg-gray-800 transition-colors"
          >
            <Send size={18} className="mr-2" />
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};
