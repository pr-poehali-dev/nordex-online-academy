import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, Award, BookOpen, PlayCircle, CheckCircle, Calendar, Download, MessageSquare } from 'lucide-react';
import Icon from '@/components/ui/icon';

interface CourseModule {
  id: number;
  title: string;
  lessons: number;
  duration: string;
  topics: string[];
  isCompleted?: boolean;
}

interface CoursePageProps {
  onBack: () => void;
}

const CoursePage: React.FC<CoursePageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');

  const courseModules: CourseModule[] = [
    {
      id: 1,
      title: "Основы веб-разработки",
      lessons: 8,
      duration: "12 часов",
      topics: [
        "HTML5: семантическая разметка",
        "CSS3: флексбокс и гриды", 
        "Основы JavaScript",
        "Работа с DOM",
        "Отладка в браузере"
      ]
    },
    {
      id: 2,
      title: "React и современный JavaScript",
      lessons: 12,
      duration: "18 часов",
      topics: [
        "ES6+ синтаксис",
        "Компоненты и JSX",
        "State и Props",
        "Хуки (useState, useEffect)",
        "Условный рендеринг",
        "Списки и ключи"
      ]
    },
    {
      id: 3,
      title: "TypeScript для React",
      lessons: 10,
      duration: "15 часов",
      topics: [
        "Типизация в TypeScript",
        "Интерфейсы и типы",
        "Типизация компонентов",
        "Generics в React",
        "Практические паттерны"
      ]
    },
    {
      id: 4,
      title: "Управление состоянием",
      lessons: 8,
      duration: "12 часов",
      topics: [
        "Context API",
        "Redux Toolkit",
        "Zustand",
        "Паттерны состояния",
        "Оптимизация рендеринга"
      ]
    },
    {
      id: 5,
      title: "Работа с API и данными",
      lessons: 10,
      duration: "15 часов",
      topics: [
        "Fetch API и Axios",
        "Async/await",
        "React Query/TanStack Query",
        "Кэширование данных",
        "Обработка ошибок"
      ]
    },
    {
      id: 6,
      title: "Стилизация и UI",
      lessons: 8,
      duration: "12 часов",
      topics: [
        "CSS Modules",
        "Styled Components",
        "Tailwind CSS",
        "UI библиотеки",
        "Адаптивная верстка"
      ]
    },
    {
      id: 7,
      title: "Тестирование React приложений",
      lessons: 6,
      duration: "9 часов",
      topics: [
        "Jest и Testing Library",
        "Unit тесты",
        "Integration тесты",
        "Моки и стабы",
        "E2E тестирование"
      ]
    },
    {
      id: 8,
      title: "Деплой и производительность",
      lessons: 6,
      duration: "9 часов",
      topics: [
        "Сборка приложений",
        "Оптимизация бандла",
        "Деплой на Vercel/Netlify",
        "Мониторинг производительности",
        "SEO для SPA"
      ]
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Обзор', icon: BookOpen },
    { id: 'curriculum', label: 'Программа', icon: PlayCircle },
    { id: 'instructor', label: 'Преподаватель', icon: Users },
    { id: 'reviews', label: 'Отзывы', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться к курсам
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium mr-4">
                  Bestseller
                </span>
                <div className="flex items-center">
                  <Icon name="Award" size={16} className="mr-1" />
                  <span className="text-sm">4.8 (2,847 отзывов)</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                Fullstack разработчик на React
              </h1>
              
              <p className="text-xl text-blue-100 mb-6">
                Полный курс по современной веб-разработке: от основ до деплоя продакшн приложений. 
                Изучите React, TypeScript, Node.js и создайте портфолио проектов.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-2 text-blue-200" />
                  <span>102 часа</span>
                </div>
                <div className="flex items-center">
                  <Icon name="PlayCircle" size={20} className="mr-2 text-blue-200" />
                  <span>68 уроков</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={20} className="mr-2 text-blue-200" />
                  <span>12,450 студентов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Calendar" size={20} className="mr-2 text-blue-200" />
                  <span>Пожизненный доступ</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">89 990 ₽</div>
                <div className="text-gray-500 line-through">119 990 ₽</div>
                <div className="text-green-600 font-medium">Скидка 25%</div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                Записаться на курс
              </button>
              
              <button className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors mb-6">
                Попробовать бесплатно
              </button>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                  <span>30-дневная гарантия возврата</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                  <span>Сертификат о прохождении</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                  <span>Помощь в трудоустройстве</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                  <span>Доступ к сообществу</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon name={tab.icon.name} size={16} className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Что вы изучите</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Создание современных React приложений',
                      'TypeScript для типобезопасности',
                      'State management (Redux, Zustand)',
                      'Работа с API и базами данных',
                      'Тестирование и отладка кода',
                      'Деплой и DevOps практики',
                      'Микросервисная архитектура',
                      'Оптимизация производительности'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="CheckCircle" size={20} className="mr-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Описание курса</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">
                      Этот комплексный курс предназначен для тех, кто хочет стать профессиональным fullstack разработчиком, 
                      используя современный стек технологий React, TypeScript и Node.js.
                    </p>
                    <p className="mb-4">
                      За 102 часа обучения вы пройдете путь от основ веб-разработки до создания полноценных приложений 
                      корпоративного уровня. Курс включает теоретические материалы, практические задания и реальные проекты.
                    </p>
                    <p className="mb-4">
                      По окончании курса у вас будет портфолио из 3 проектов: интернет-магазин, социальная сеть 
                      и система управления задачами. Все проекты будут развернуты в облаке и готовы для демонстрации работодателям.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Требования</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Базовые знания HTML и CSS</li>
                    <li>• Опыт работы с любым языком программирования (желательно)</li>
                    <li>• Компьютер с Windows, Mac или Linux</li>
                    <li>• Желание учиться и практиковаться 10-15 часов в неделю</li>
                  </ul>
                </section>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Программа курса</h2>
                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded mr-3">
                              Модуль {index + 1}
                            </span>
                            <h3 className="text-lg font-semibold">{module.title}</h3>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Icon name="PlayCircle" size={16} className="mr-1" />
                              {module.lessons} уроков
                            </span>
                            <span className="flex items-center">
                              <Icon name="Clock" size={16} className="mr-1" />
                              {module.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 py-4">
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center text-gray-700">
                              <Icon name="CheckCircle" size={16} className="mr-3 text-green-500 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Ваш преподаватель</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                      alt="Алексей Петров"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Алексей Петров</h3>
                      <p className="text-blue-600 font-medium mb-3">Senior Full Stack Developer @ Яндекс</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div>
                          <Icon name="Award" size={16} className="inline mr-1 text-yellow-500" />
                          <span>8+ лет опыта</span>
                        </div>
                        <div>
                          <Icon name="Users" size={16} className="inline mr-1 text-blue-500" />
                          <span>25,000+ студентов</span>
                        </div>
                        <div>
                          <Icon name="BookOpen" size={16} className="inline mr-1 text-green-500" />
                          <span>12 курсов</span>
                        </div>
                        <div>
                          <Icon name="Award" size={16} className="inline mr-1 text-purple-500" />
                          <span>4.9 рейтинг</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Алексей — опытный fullstack разработчик с 8-летним опытом работы в крупных IT-компаниях. 
                        Специализируется на React, TypeScript и Node.js. Ментор и тимлид команды из 12 разработчиков в Яндексе.
                      </p>
                      <p className="text-gray-700">
                        Автор популярного телеграм-канала о веб-разработке (50k+ подписчиков). 
                        Спикер на конференциях FrontendConf и HolyJS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Отзывы студентов</h2>
                <div className="space-y-6">
                  {[
                    {
                      name: "Мария Сидорова",
                      role: "Junior Frontend Developer @ Mail.ru",
                      rating: 5,
                      date: "2 месяца назад",
                      text: "Отличный курс! За 4 месяца изучения перешла с нуля до джуниор позиции. Алексей объясняет сложные темы простым языком, много практики. Особенно понравились проекты в портфолио."
                    },
                    {
                      name: "Дмитрий Козлов",
                      role: "Fullstack Developer @ Сбер",
                      rating: 5,
                      date: "1 месяц назад",
                      text: "Прошел курс для повышения квалификации. Узнал много нового о современных практиках React и TypeScript. Курс структурирован отлично, ничего лишнего."
                    },
                    {
                      name: "Анна Волкова",
                      role: "Frontend Developer @ Авито",
                      rating: 5,
                      date: "3 недели назад",
                      text: "Лучший курс по React, который я проходила! Обязательно изучите TypeScript модуль - он открывает глаза на многие вещи. Трудоустроилась через 2 месяца после окончания."
                    }
                  ].map((review, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-lg">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <p className="text-sm text-gray-600">{review.role}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Icon key={i} name="Award" size={16} className="text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Этот курс включает:</h3>
              <div className="space-y-3">
                {[
                  { icon: PlayCircle, text: "102 часа видео по запросу" },
                  { icon: Download, text: "Скачиваемые ресурсы" },
                  { icon: Calendar, text: "Пожизненный доступ" },
                  { icon: Users, text: "Доступ с мобильного и ТВ" },
                  { icon: Award, text: "Сертификат о завершении" },
                  { icon: MessageSquare, text: "Поддержка преподавателя" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name={item.icon.name} size={16} className="mr-3 text-blue-500" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Карьерная поддержка</h3>
              <div className="space-y-3 text-sm text-blue-800">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-blue-600" />
                  <span>Помощь в составлении резюме</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-blue-600" />
                  <span>Подготовка к собеседованиям</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={16} className="mr-2 text-blue-600" />
                  <span>Доступ к вакансиям партнеров</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;