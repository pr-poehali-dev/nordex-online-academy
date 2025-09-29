import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface CareerPageProps {
  onBack: () => void;
}

const CareerPage = ({ onBack }: CareerPageProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Разработка",
      location: "Москва / Удаленно",
      type: "Полная занятость",
      salary: "200 000 - 350 000 ₽",
      experience: "3+ года",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
      description: "Мы ищем опытного Frontend разработчика для создания современных веб-приложений и образовательных платформ.",
      responsibilities: [
        "Разработка пользовательских интерфейсов для образовательной платформы",
        "Создание переиспользуемых компонентов и библиотек",
        "Оптимизация производительности веб-приложений",
        "Менторство младших разработчиков",
        "Участие в code review и техническом планировании"
      ],
      requirements: [
        "Опыт работы с React и TypeScript от 3 лет",
        "Знание современных инструментов сборки (Vite, Webpack)",
        "Опыт работы с состоянием приложения (Redux, Zustand)",
        "Понимание принципов UX/UI дизайна",
        "Опыт написания тестов (Jest, React Testing Library)"
      ]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Дизайн",
      location: "Москва",
      type: "Полная занятость",
      salary: "150 000 - 250 000 ₽",
      experience: "2+ года",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
      description: "Ищем талантливого UX/UI дизайнера для создания интуитивных образовательных интерфейсов.",
      responsibilities: [
        "Проектирование пользовательских интерфейсов образовательных продуктов",
        "Создание и развитие дизайн-системы",
        "Проведение пользовательских исследований",
        "Создание прототипов и интерактивных макетов",
        "Взаимодействие с командой разработки"
      ],
      requirements: [
        "Портфолио с проектами UX/UI дизайна",
        "Опыт работы в Figma от 2 лет",
        "Знание принципов user-centered design",
        "Опыт создания дизайн-систем",
        "Понимание технических ограничений веб-разработки"
      ]
    },
    {
      id: 3,
      title: "Backend Developer (Node.js)",
      department: "Разработка",
      location: "Москва / Удаленно",
      type: "Полная занятость", 
      salary: "180 000 - 300 000 ₽",
      experience: "2+ года",
      skills: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      description: "Ищем Backend разработчика для создания масштабируемой архитектуры образовательной платформы.",
      responsibilities: [
        "Разработка API для образовательной платформы",
        "Проектирование архитектуры микросервисов",
        "Оптимизация производительности базы данных",
        "Интеграция с внешними сервисами",
        "Обеспечение безопасности приложений"
      ],
      requirements: [
        "Опыт разработки на Node.js от 2 лет",
        "Знание TypeScript и современного JavaScript",
        "Опыт работы с PostgreSQL и Redis",
        "Понимание принципов REST API и GraphQL",
        "Опыт работы с Docker и облачными платформами"
      ]
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Продукт",
      location: "Москва",
      type: "Полная занятость",
      salary: "220 000 - 400 000 ₽", 
      experience: "3+ года",
      skills: ["Product Management", "Analytics", "User Research", "Agile", "Data Analysis"],
      description: "Ищем Product Manager для управления развитием образовательных продуктов и платформ.",
      responsibilities: [
        "Определение продуктовой стратегии и roadmap",
        "Анализ пользовательского поведения и метрик",
        "Координация работы кросс-функциональных команд",
        "Проведение интервью с пользователями",
        "A/B тестирование новых функций"
      ],
      requirements: [
        "Опыт работы Product Manager от 3 лет",
        "Знание инструментов аналитики (Google Analytics, Mixpanel)",
        "Опыт работы в EdTech или B2C продуктах",
        "Понимание принципов Agile/Scrum",
        "Навыки работы с данными и SQL"
      ]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "DevOps",
      location: "Москва / Удаленно",
      type: "Полная занятость",
      salary: "200 000 - 350 000 ₽",
      experience: "2+ года",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      description: "Ищем DevOps инженера для автоматизации процессов разработки и развертывания.",
      responsibilities: [
        "Настройка и поддержка CI/CD пайплайнов",
        "Управление облачной инфраструктурой",
        "Мониторинг и логирование приложений",
        "Автоматизация процессов развертывания",
        "Обеспечение безопасности инфраструктуры"
      ],
      requirements: [
        "Опыт работы с AWS от 2 лет",
        "Знание Docker и Kubernetes",
        "Опыт написания Infrastructure as Code (Terraform)",
        "Понимание принципов CI/CD",
        "Знание мониторинга (Prometheus, Grafana)"
      ]
    },
    {
      id: 6,
      title: "Методист образовательных программ",
      department: "Образование",
      location: "Москва",
      type: "Полная занятость",
      salary: "120 000 - 200 000 ₽",
      experience: "2+ года",
      skills: ["Педагогический дизайн", "Методология обучения", "LMS", "Аналитика образования"],
      description: "Ищем методиста для разработки и улучшения образовательных программ и курсов.",
      responsibilities: [
        "Разработка образовательных программ и курсов",
        "Создание методических материалов и заданий",
        "Анализ эффективности обучения студентов",
        "Координация с преподавателями и экспертами",
        "Адаптация курсов под потребности рынка"
      ],
      requirements: [
        "Педагогическое или профильное образование",
        "Опыт разработки образовательного контента",
        "Знание принципов adult learning",
        "Опыт работы с LMS платформами",
        "Аналитические навыки для оценки эффективности обучения"
      ]
    }
  ];

  const benefits = [
    {
      icon: "Heart",
      title: "Медицинская страховка",
      description: "ДМС для сотрудника и семьи с покрытием 95%"
    },
    {
      icon: "GraduationCap",
      title: "Обучение и развитие",
      description: "Бюджет 100,000 ₽ в год на курсы и конференции"
    },
    {
      icon: "Home",
      title: "Гибкий график",
      description: "Удаленная работа и гибкое расписание"
    },
    {
      icon: "Coffee",
      title: "Современный офис",
      description: "Уютный офис в центре Москвы с кофе и печеньками"
    },
    {
      icon: "Zap",
      title: "Оборудование",
      description: "MacBook Pro и все необходимое для работы"
    },
    {
      icon: "Calendar",
      title: "Отпуск",
      description: "28 дней оплачиваемого отпуска + дни рождения"
    }
  ];

  const departments = [
    { id: 'all', name: 'Все отделы', count: openPositions.length },
    { id: 'Разработка', name: 'Разработка', count: openPositions.filter(p => p.department === 'Разработка').length },
    { id: 'Дизайн', name: 'Дизайн', count: openPositions.filter(p => p.department === 'Дизайн').length },
    { id: 'Продукт', name: 'Продукт', count: openPositions.filter(p => p.department === 'Продукт').length },
    { id: 'DevOps', name: 'DevOps', count: openPositions.filter(p => p.department === 'DevOps').length },
    { id: 'Образование', name: 'Образование', count: openPositions.filter(p => p.department === 'Образование').length }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900"
              >
                <Icon name="ArrowLeft" size={20} />
                <span>Назад</span>
              </Button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-2xl font-bold text-slate-900">NORDEX</span>
                <span className="text-sm text-slate-500 font-medium">ACADEMY</span>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Отправить резюме
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Icon name="Building2" size={16} className="mr-2" />
              Присоединяйтесь к нашей команде
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Карьера в
              <span className="text-blue-600"> Nordex Academy</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Мы создаем будущее IT-образования. Присоединяйтесь к команде профессионалов, 
              которые меняют жизни людей через качественное обучение.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">Сотрудников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">6</div>
                <div className="text-sm text-slate-600">Открытых позиций</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">4.9</div>
                <div className="text-sm text-slate-600">Рейтинг работодателя</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Удаленная работа</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Открытые позиции</h2>
            <p className="text-xl text-slate-600">Найдите свое место в нашей команде</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                variant={selectedDepartment === dept.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDepartment(dept.id)}
                className="flex items-center space-x-2"
              >
                <span>{dept.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {dept.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="grid gap-6">
            {filteredPositions.map((position) => (
              <Card key={position.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start gap-3 mb-4">
                        <h3 className="text-xl font-bold text-slate-900">{position.title}</h3>
                        <Badge>{position.department}</Badge>
                      </div>
                      
                      <p className="text-slate-600 mb-4">{position.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center text-sm text-slate-600">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Icon name="Clock" size={16} className="mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Icon name="DollarSign" size={16} className="mr-2" />
                          {position.salary}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Icon name="Award" size={16} className="mr-2" />
                          {position.experience}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="lg:pl-6">
                      <Button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700">
                        Откликнуться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Льготы и преимущества</h2>
            <p className="text-xl text-slate-600">Мы заботимся о наших сотрудниках</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Icon name={benefit.icon as any} size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Наши ценности</h2>
              <p className="text-lg text-slate-600 mb-8">
                В Nordex Academy мы строим команду единомышленников, которые разделяют наши принципы и ценности.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Lightbulb" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Инновации</h4>
                    <p className="text-sm text-slate-600">Мы постоянно ищем новые способы улучшить образовательный процесс</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Users" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Командная работа</h4>
                    <p className="text-sm text-slate-600">Вместе мы достигаем больших результатов</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="TrendingUp" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Рост и развитие</h4>
                    <p className="text-sm text-slate-600">Мы инвестируем в профессиональное развитие каждого сотрудника</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Star" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Качество</h4>
                    <p className="text-sm text-slate-600">Мы стремимся к совершенству во всем, что делаем</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Процесс найма</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      1
                    </div>
                    <span className="text-slate-700">Отправка резюме</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      2
                    </div>
                    <span className="text-slate-700">Телефонное интервью с HR</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      3
                    </div>
                    <span className="text-slate-700">Техническое интервью</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      4
                    </div>
                    <span className="text-slate-700">Финальное интервью с командой</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      5
                    </div>
                    <span className="text-slate-700">Оффер и онбординг</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl px-8 py-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Не нашли подходящую позицию?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Отправьте нам резюме, и мы свяжемся с вами, когда появится подходящая вакансия
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить резюме
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                <Icon name="Mail" size={20} className="mr-2" />
                Задать вопрос HR
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold">NORDEX ACADEMY</span>
          </div>
          <p className="text-slate-400 mb-6">
            hr@nordex-academy.ru • +7 (495) 123-45-67
          </p>
          <p className="text-slate-500">
            &copy; 2024 Nordex Academy. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CareerPage;