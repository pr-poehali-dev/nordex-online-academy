import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const courses = [
    {
      id: 1,
      title: "UX/UI Дизайн",
      description: "Полный курс по пользовательскому опыту и интерфейсам",
      duration: "6 месяцев",
      level: "Начинающий",
      price: "89 000 ₽",
      students: 234,
      rating: 4.9,
      skills: ["Figma", "Prototyping", "User Research", "Design Systems"]
    },
    {
      id: 2,
      title: "Frontend Разработка",
      description: "React, TypeScript, современные инструменты разработки",
      duration: "8 месяцев",
      level: "Средний",
      price: "119 000 ₽",
      students: 187,
      rating: 4.8,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      id: 3,
      title: "Backend Разработка",
      description: "Node.js, базы данных, архитектура приложений",
      duration: "8 месяцев",
      level: "Средний",
      price: "119 000 ₽",
      students: 156,
      rating: 4.7,
      skills: ["Node.js", "PostgreSQL", "REST API", "Docker"]
    },
    {
      id: 4,
      title: "Fullstack Разработка",
      description: "Комплексная программа по фронтенд и бэкенд разработке",
      duration: "12 месяцев",
      level: "Продвинутый",
      price: "199 000 ₽",
      students: 98,
      rating: 4.9,
      skills: ["React", "Node.js", "PostgreSQL", "DevOps", "AWS"]
    }
  ];

  const instructors = [
    {
      id: 1,
      name: "Анна Соколова",
      position: "Senior UX/UI Designer",
      company: "Яндекс",
      experience: "8+ лет",
      students: 500,
      rating: 4.9,
      specialization: "UX Research, Design Systems"
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      position: "Lead Frontend Developer",
      company: "VK",
      experience: "12+ лет",
      students: 320,
      rating: 4.8,
      specialization: "React, TypeScript, Performance"
    },
    {
      id: 3,
      name: "Елена Кузнецова",
      position: "Backend Architect",
      company: "Ozon",
      experience: "10+ лет",
      students: 280,
      rating: 4.7,
      specialization: "Microservices, Databases, Cloud"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Мария Петрова",
      course: "UX/UI Дизайн",
      text: "Отличная программа! За 6 месяцев полностью сменила профессию и устроилась в IT-компанию. Преподаватели объясняют сложные вещи простым языком.",
      rating: 5,
      company: "Тинькофф"
    },
    {
      id: 2,
      name: "Алексей Морозов",
      course: "Frontend Разработка",
      text: "Курс превзошел все ожидания. Практические задания, актуальные технологии, поддержка менторов. Рекомендую всем, кто хочет стать разработчиком.",
      rating: 5,
      company: "Сбербанк"
    },
    {
      id: 3,
      name: "Ирина Лебедева",
      course: "Fullstack Разработка",
      text: "Самый полный и структурированный курс, который я проходила. Теперь работаю fullstack разработчиком в стартапе. Спасибо команде Nordex!",
      rating: 5,
      company: "Wildberries"
    }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "E-commerce платформа",
      category: "Fullstack",
      student: "Максим Орлов",
      description: "Современная платформа для онлайн-торговли с панелью администратора",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Мобильное приложение банка",
      category: "UX/UI Design",
      student: "София Климова",
      description: "Редизайн мобильного приложения с фокусом на UX",
      tech: ["Figma", "Prototyping", "User Research"]
    },
    {
      id: 3,
      title: "CRM система",
      category: "Backend",
      student: "Артем Новиков",
      description: "Система управления клиентами для малого бизнеса",
      tech: ["Node.js", "Express", "MongoDB"]
    }
  ];

  const faqItems = [
    {
      question: "Подойдет ли курс новичку без опыта в программировании?",
      answer: "Да, наши курсы разработаны для людей с любым уровнем подготовки. Мы начинаем с основ и постепенно переходим к сложным темам."
    },
    {
      question: "Какое расписание занятий?",
      answer: "Занятия проходят 3 раза в неделю по вечерам. Также доступны записи всех лекций для самостоятельного изучения."
    },
    {
      question: "Предоставляете ли помощь с трудоустройством?",
      answer: "Да, у нас есть отдел карьеры, который помогает с составлением резюме, подготовкой к собеседованиям и поиском вакансий."
    },
    {
      question: "Можно ли оплатить обучение в рассрочку?",
      answer: "Да, предоставляем рассрочку на 6-12 месяцев без переплат. Также действует система скидок для студентов."
    },
    {
      question: "Получу ли сертификат после окончания?",
      answer: "Да, после успешного завершения курса вы получите сертификат Nordex Academy, который признается IT-компаниями."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-slate-900">NORDEX</span>
              <span className="text-sm text-slate-500 font-medium">ACADEMY</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'courses', label: 'Курсы' },
                { id: 'instructors', label: 'Преподаватели' },
                { id: 'about', label: 'О нас' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'testimonials', label: 'Отзывы' },
                { id: 'blog', label: 'Блог' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Записаться на курс
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Профессиональное образование в IT
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Станьте IT-специалистом
              <span className="text-blue-600"> с нуля</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Nordex Academy — онлайн-академия для изучения дизайна и программирования. 
              Практические курсы с реальными проектами и гарантией трудоустройства.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">1000+</div>
                <div className="text-sm text-slate-600">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">95%</div>
                <div className="text-sm text-slate-600">Трудоустройство</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">4.8</div>
                <div className="text-sm text-slate-600">Рейтинг курсов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наши курсы</h2>
            <p className="text-xl text-slate-600">Выберите направление и начните карьеру в IT</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                        {course.title}
                      </CardTitle>
                      <p className="text-slate-600">{course.description}</p>
                    </div>
                    <Badge variant={course.level === 'Начинающий' ? 'secondary' : course.level === 'Средний' ? 'default' : 'destructive'}>
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-slate-600">
                      <Icon name="Clock" size={16} className="mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Icon name="Users" size={16} className="mr-2" />
                      {course.students} студентов
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
                      {course.rating}
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Изучите технологии:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Подробнее о курсе
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Преподаватели</h2>
            <p className="text-xl text-slate-600">Эксперты из ведущих IT-компаний</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{instructor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{instructor.position}</p>
                  <p className="text-slate-600 text-sm mb-4">{instructor.company}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="font-semibold text-slate-900">{instructor.experience}</div>
                      <div className="text-slate-600">опыта</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{instructor.students}+</div>
                      <div className="text-slate-600">студентов</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-600 mb-4">{instructor.specialization}</p>
                  
                  <div className="flex items-center justify-center">
                    <Icon name="Star" size={16} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{instructor.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">О Nordex Academy</h2>
              <p className="text-lg text-slate-600 mb-6">
                Мы — команда профессионалов с многолетним опытом в IT-индустрии. 
                Наша миссия — сделать качественное IT-образование доступным каждому.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">Практико-ориентированное обучение</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">Менторская поддержка 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">Гарантия трудоустройства</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">Актуальная программа обучения</span>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Узнать больше
              </Button>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Почему выбирают нас</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon name="Target" size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Практические проекты</h4>
                      <p className="text-sm text-slate-600">Работайте над реальными задачами и создавайте портфолио</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon name="Users" size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Сообщество</h4>
                      <p className="text-sm text-slate-600">Общайтесь с единомышленниками и находите команду</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon name="Briefcase" size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Карьерная поддержка</h4>
                      <p className="text-sm text-slate-600">Помогаем с резюме, собеседованиями и поиском работы</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Портфолио студентов</h2>
            <p className="text-xl text-slate-600">Проекты наших выпускников</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2">{project.category}</Badge>
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  </div>
                </div>
                
                <CardContent className="pt-4">
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <p className="text-sm font-medium text-slate-900 mb-3">Автор: {project.student}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Посмотреть проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Отзывы студентов</h2>
            <p className="text-xl text-slate-600">Что говорят наши выпускники</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={`${
                          i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.company}</p>
                      <p className="text-xs text-blue-600">{testimonial.course}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Блог</h2>
            <p className="text-xl text-slate-600">Полезные статьи о дизайне и разработке</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Как начать карьеру в UX/UI дизайне в 2024",
                category: "Дизайн",
                readTime: "5 мин",
                date: "15 дек"
              },
              {
                title: "React vs Vue: что выбрать начинающему",
                category: "Разработка",
                readTime: "8 мин",
                date: "12 дек"
              },
              {
                title: "10 ошибок при изучении программирования",
                category: "Обучение",
                readTime: "6 мин",
                date: "10 дек"
              }
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg"></div>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3">{post.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-slate-600">Ответы на популярные вопросы о курсах</p>
          </div>

          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
                <AccordionTrigger className="text-left font-semibold text-slate-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Career Section */}
      <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl px-8 py-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Готовы изменить свою карьеру?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Начните обучение уже сегодня и станьте востребованным IT-специалистом
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                <Icon name="Mail" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="Phone" size={32} className="mx-auto mb-3" />
                <p className="font-semibold mb-2">Телефон</p>
                <p className="text-blue-100">+7 (495) 123-45-67</p>
              </div>
              <div>
                <Icon name="Mail" size={32} className="mx-auto mb-3" />
                <p className="font-semibold mb-2">Email</p>
                <p className="text-blue-100">hello@nordex-academy.ru</p>
              </div>
              <div>
                <Icon name="MapPin" size={32} className="mx-auto mb-3" />
                <p className="font-semibold mb-2">Адрес</p>
                <p className="text-blue-100">Москва, ул. Тверская, 15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold">NORDEX ACADEMY</span>
              </div>
              <p className="text-slate-400">
                Профессиональное IT-образование для будущих разработчиков и дизайнеров
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">UX/UI Дизайн</a></li>
                <li><a href="#" className="hover:text-white">Frontend</a></li>
                <li><a href="#" className="hover:text-white">Backend</a></li>
                <li><a href="#" className="hover:text-white">Fullstack</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white">Карьера</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Nordex Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;