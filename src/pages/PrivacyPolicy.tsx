import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">SteamKeys Store</h1>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-900">
              Политика конфиденциальности
            </CardTitle>
            <p className="text-center text-gray-600 mt-2">
              Последнее обновление: 10 августа 2024 г.
            </p>
          </CardHeader>
          
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Введение</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Компания SteamKeys Store («мы», «наш», «нас») уважает вашу конфиденциальность и стремится 
                  защитить персональные данные наших пользователей. Данная Политика конфиденциальности 
                  описывает, как мы собираем, используем, храним и защищаем вашу личную информацию 
                  при использовании нашего веб-сайта и сервисов.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Используя наш сайт, вы соглашаетесь с условиями данной Политики конфиденциальности. 
                  Если вы не согласны с этими условиями, пожалуйста, не используйте наш сайт.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Сбор персональных данных</h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    <Icon name="Database" size={20} className="inline mr-2" />
                    Мы собираем следующие типы данных:
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Данные, предоставляемые вами напрямую:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg">
                      <li>Имя и фамилия</li>
                      <li>Адрес электронной почты</li>
                      <li>Номер телефона (по желанию)</li>
                      <li>Платежная информация (обрабатывается через защищенных платежных партнеров)</li>
                      <li>История заказов и покупок</li>
                      <li>Сообщения в службу поддержки</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Автоматически собираемые данные:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg">
                      <li>IP-адрес и геолокация</li>
                      <li>Информация о браузере и устройстве</li>
                      <li>Страницы, которые вы посещаете на нашем сайте</li>
                      <li>Время и продолжительность сессий</li>
                      <li>Файлы cookie и аналогичные технологии</li>
                      <li>Источник перехода на сайт</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Цели использования данных</h2>
                <div className="grid gap-4">
                  {[
                    {
                      icon: "ShoppingCart",
                      title: "Обработка заказов",
                      description: "Выполнение покупок, доставка цифровых товаров, обработка платежей и возвратов"
                    },
                    {
                      icon: "Headphones", 
                      title: "Клиентская поддержка",
                      description: "Ответы на ваши вопросы, решение технических проблем, обработка жалоб"
                    },
                    {
                      icon: "Shield",
                      title: "Безопасность",
                      description: "Предотвращение мошенничества, защита от несанкционированного доступа"
                    },
                    {
                      icon: "BarChart",
                      title: "Аналитика",
                      description: "Улучшение работы сайта, анализ предпочтений пользователей"
                    },
                    {
                      icon: "Mail",
                      title: "Маркетинг",
                      description: "Отправка информации о новых товарах, акциях и скидках (с вашего согласия)"
                    },
                    {
                      icon: "Scale",
                      title: "Соблюдение законов",
                      description: "Выполнение требований законодательства, налогового и финансового учета"
                    }
                  ].map(item => (
                    <div key={item.title} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Icon name={item.icon as any} size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Передача данных третьим лицам</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Мы можем передавать ваши персональные данные третьим лицам только в следующих случаях:
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h3 className="font-semibold text-green-800 mb-2">
                      <Icon name="CreditCard" size={18} className="inline mr-2" />
                      Платежные системы
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Для обработки платежей мы используем проверенные платежные системы (Сбербанк, Яндекс.Касса, PayPal).
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      <Icon name="Truck" size={18} className="inline mr-2" />
                      Служба доставки
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Email-сервисы для отправки цифровых товаров и уведомлений.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2">
                      <Icon name="BarChart3" size={18} className="inline mr-2" />
                      Аналитические сервисы
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Google Analytics, Яндекс.Метрика для анализа трафика (в анонимизированном виде).
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-red-800 mb-2">
                      <Icon name="AlertTriangle" size={18} className="inline mr-2" />
                      Правоохранительные органы
                    </h3>
                    <p className="text-gray-700 text-sm">
                      По требованию суда или других государственных органов в рамках действующего законодательства.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Защита персональных данных</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">
                    <Icon name="Shield" size={20} className="inline mr-2" />
                    Меры безопасности:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <Icon name="Lock" size={16} className="text-green-600 mr-2" />
                        SSL-шифрование данных
                      </li>
                      <li className="flex items-center">
                        <Icon name="Server" size={16} className="text-green-600 mr-2" />
                        Защищенные серверы
                      </li>
                      <li className="flex items-center">
                        <Icon name="Key" size={16} className="text-green-600 mr-2" />
                        Двухфакторная аутентификация
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <Icon name="Eye" size={16} className="text-green-600 mr-2" />
                        Ограниченный доступ сотрудников
                      </li>
                      <li className="flex items-center">
                        <Icon name="Download" size={16} className="text-green-600 mr-2" />
                        Регулярные резервные копии
                      </li>
                      <li className="flex items-center">
                        <Icon name="UserCheck" size={16} className="text-green-600 mr-2" />
                        Аудит безопасности
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies и отслеживание</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Мы используем файлы cookie и аналогичные технологии для улучшения работы сайта:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Необходимые cookie</h3>
                    <p className="text-gray-600 text-sm">Обеспечивают базовую функциональность сайта, корзину покупок, аутентификацию.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Аналитические cookie</h3>
                    <p className="text-gray-600 text-sm">Помогают понять, как пользователи взаимодействуют с сайтом (Google Analytics, Яндекс.Метрика).</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Маркетинговые cookie</h3>
                    <p className="text-gray-600 text-sm">Используются для показа персонализированной рекламы и отслеживания эффективности рекламных кампаний.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Ваши права</h2>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-4">В соответствии с законодательством РФ, вы имеете право:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="Eye" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Получать информацию о обработке ваших данных</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Edit" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Исправлять неточные или неполные данные</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Trash2" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Требовать удаления ваших персональных данных</span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="Ban" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Ограничить обработку ваших данных</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Download" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Получить копию ваших данных</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="XCircle" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>Отозвать согласие на обработку данных</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Хранение данных</h2>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Clock" size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Сроки хранения:</h3>
                        <ul className="text-gray-700 text-sm mt-2 space-y-1">
                          <li>• Данные аккаунта: до момента удаления аккаунта</li>
                          <li>• История покупок: 5 лет (для налогового учета)</li>
                          <li>• Логи сайта: 1 год</li>
                          <li>• Cookie: от 1 дня до 2 лет (зависит от типа)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Место хранения:</h3>
                        <p className="text-gray-700 text-sm mt-1">
                          Данные хранятся на серверах в России и подчиняются российскому законодательству.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Контактная информация</h2>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    По вопросам обработки персональных данных обращайтесь:
                  </h3>
                  <div className="space-y-3">
                    <p className="flex items-center">
                      <Icon name="Mail" size={18} className="mr-3 text-primary" />
                      <span>Email: privacy@steamkeys-store.ru</span>
                    </p>
                    <p className="flex items-center">
                      <Icon name="MessageCircle" size={18} className="mr-3 text-primary" />
                      <span>Telegram: @steamkeys_privacy</span>
                    </p>
                    <p className="flex items-center">
                      <Icon name="MapPin" size={18} className="mr-3 text-primary" />
                      <span>Адрес: 119991, г. Москва, ул. Ленинский проспект, д. 1</span>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Изменения в политике</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Мы можем периодически обновлять данную Политику конфиденциальности. 
                  О существенных изменениях мы уведомим вас по электронной почте или 
                  через уведомления на сайте.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800 text-sm">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Рекомендуем периодически проверять эту страницу для получения актуальной информации.
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;