import React, { useState } from 'react';
import { Settings, Shield, Truck, Clock, Award, CheckCircle, ChevronRight, Wrench } from 'lucide-react';

export const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('repair');
  
  const services = {
    repair: {
      title: "Ремонт техники BESTON",
      description: "Профессиональный ремонт и обслуживание всех видов техники BESTON с использованием оригинальных запчастей и комплектующих.",
      features: [
        "Гарантийный и постгарантийный ремонт",
        "Диагностика неисправностей",
        "Замена комплектующих и деталей",
        "Профилактическое обслуживание",
        "Устранение программных ошибок",
        "Восстановление после механических повреждений"
      ],
      image: "/api/placeholder/500/300"
    },
    installation: {
      title: "Установка и настройка",
      description: "Профессиональная установка, подключение и настройка техники BESTON для обеспечения оптимальной производительности.",
      features: [
        "Установка встраиваемой техники",
        "Подключение к коммуникациям",
        "Первичная настройка и калибровка",
        "Интеграция с умным домом",
        "Обучение пользователя",
        "Тестирование всех функций"
      ],
      image: "/api/placeholder/500/300"
    },
    maintenance: {
      title: "Техническое обслуживание",
      description: "Регулярное техническое обслуживание для продления срока службы вашей техники BESTON и предотвращения потенциальных проблем.",
      features: [
        "Профилактическая чистка",
        "Замена расходных материалов",
        "Плановая диагностика",
        "Обновление программного обеспечения",
        "Проверка безопасности",
        "Настройка оптимальных режимов работы"
      ],
      image: "/api/placeholder/500/300"
    },
    consultation: {
      title: "Консультации и поддержка",
      description: "Профессиональные консультации по выбору, эксплуатации и обслуживанию техники BESTON от наших специалистов.",
      features: [
        "Подбор техники под ваши потребности",
        "Технические консультации",
        "Обучение правильному использованию",
        "Рекомендации по уходу",
        "Решение вопросов эксплуатации",
        "Советы по энергосбережению"
      ],
      image: "/api/placeholder/500/300"
    }
  };
  
  // Service packages
  const packages = [
    {
      id: 1,
      name: "Базовый",
      price: "от 250 000 сум",
      features: [
        "Диагностика неисправностей",
        "Замена стандартных деталей",
        "3 месяца гарантии на работу",
        "Консультация по эксплуатации"
      ],
      isPopular: false
    },
    {
      id: 2,
      name: "Оптимальный",
      price: "от 550 000 сум",
      features: [
        "Комплексная диагностика",
        "Замена деталей и комплектующих",
        "Чистка и профилактика",
        "Настройка работы",
        "6 месяцев гарантии на работу",
        "Расширенная консультация"
      ],
      isPopular: true
    },
    {
      id: 3,
      name: "Премиум",
      price: "от 950 000 сум",
      features: [
        "Полная диагностика всех систем",
        "Замена на оригинальные детали",
        "Глубокая чистка всех компонентов",
        "Обновление ПО и калибровка",
        "12 месяцев гарантии на работу",
        "Приоритетное обслуживание",
        "Персональный менеджер"
      ],
      isPopular: false
    }
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: "Как долго осуществляется ремонт техники BESTON?",
      answer: "Стандартный срок ремонта составляет от 1 до 5 рабочих дней в зависимости от сложности неисправности и наличия необходимых запчастей. В случае сложного ремонта, требующего заказа деталей, срок может увеличиться до 14 рабочих дней."
    },
    {
      question: "Предоставляется ли гарантия на ремонт?",
      answer: "Да, на все виды ремонтных работ мы предоставляем гарантию. Срок гарантии зависит от типа ремонта и выбранного сервисного пакета: от 3 до 12 месяцев."
    },
    {
      question: "Используете ли вы оригинальные запчасти?",
      answer: "Да, мы используем только оригинальные запчасти и комплектующие для техники BESTON. Это обеспечивает высокое качество ремонта и долговечность работы устройств."
    },
    {
      question: "Можно ли вызвать мастера на дом?",
      answer: "Да, мы предлагаем услугу выезда мастера на дом для диагностики, ремонта и установки техники BESTON. Стоимость выезда зависит от вашего района."
    }
  ];
  
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Сервисный центр BESTON</h2>
          <p className="text-gray-600">
            Мы предлагаем полный спектр услуг по обслуживанию и ремонту техники BESTON. 
            Наши квалифицированные специалисты обеспечат быстрый и качественный ремонт, 
            используя только оригинальные запчасти и современное оборудование.
          </p>
        </div>
        
        {/* Service Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap border-b border-gray-200">
            {Object.keys(services).map((key) => (
              <button 
                key={key}
                className={`px-6 py-3 font-medium text-sm sm:text-base ${
                  activeTab === key 
                    ? 'border-b-2 border-black text-black' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {key === 'repair' && <Settings size={16} className="inline mr-2" />}
                {key === 'installation' && <Wrench size={16} className="inline mr-2" />}
                {key === 'maintenance' && <Shield size={16} className="inline mr-2" />}
                {key === 'consultation' && <Award size={16} className="inline mr-2" />}
                {services[key].title}
              </button>
            ))}
          </div>
          
          <div className="mt-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4">{services[activeTab].title}</h3>
                <p className="text-gray-600 mb-6">{services[activeTab].description}</p>
                <ul className="space-y-3">
                  {services[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-gray-800 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors flex items-center">
                  Подробнее <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={services[activeTab].image} 
                  alt={services[activeTab].title}
                  className="shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Advantages */}
        <div className="bg-white shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Почему выбирают наш сервис</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <Wrench size={32} className="text-gray-800" />
              </div>
              <h3 className="font-semibold mb-2">Профессиональные мастера</h3>
              <p className="text-gray-600">Сертифицированные специалисты с многолетним опытом работы</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <Clock size={32} className="text-gray-800" />
              </div>
              <h3 className="font-semibold mb-2">Быстрый сервис</h3>
              <p className="text-gray-600">Оперативная диагностика и ремонт в кратчайшие сроки</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <Shield size={32} className="text-gray-800" />
              </div>
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">На все виды работ и установленные запчасти</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <Truck size={32} className="text-gray-800" />
              </div>
              <h3 className="font-semibold mb-2">Выезд на дом</h3>
              <p className="text-gray-600">Ремонт и установка техники с выездом к клиенту</p>
            </div>
          </div>
        </div>
        
        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Сервисные пакеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white shadow-sm overflow-hidden ${
                  pkg.isPopular ? 'ring-2 ring-black' : ''
                }`}
              >
                {pkg.isPopular && (
                  <div className="bg-black text-white text-center py-2 text-sm font-semibold">
                    Самый популярный
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-semibold mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={16} className="text-gray-800 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 font-medium ${
                    pkg.isPopular 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  } transition-colors`}>
                    Выбрать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="flex justify-between items-center w-full py-4 text-left"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronRight 
                    size={20} 
                    className={`transition-transform ${
                      openFaqIndex === index ? 'transform rotate-90' : ''
                    }`} 
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="bg-gray-800 text-white p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Нужна консультация?</h2>
          <p className="mb-6">Свяжитесь с нами для получения информации о сервисном обслуживании</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+998901234567" className="bg-white text-gray-800 px-6 py-3  font-medium hover:bg-gray-100 transition-colors">
              +998 90 123 45 67
            </a>
            <button className="bg-transparent border border-white text-white px-6 py-3  font-medium hover:bg-white hover:text-gray-800 transition-colors">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};