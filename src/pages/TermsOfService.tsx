import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gray-900">
              Пользовательское соглашение
            </CardTitle>
            <p className="text-center text-gray-600 mt-2">
              Последнее обновление: 10 августа 2024 г.
            </p>
          </CardHeader>
          
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Настоящее Пользовательское соглашение («Соглашение») регулирует отношения между 
                  SteamKeys Store («Продавец», «мы», «наш», «нас») и пользователем («Покупатель», «вы», «ваш») 
                  при использовании интернет-магазина цифровых товаров, расположенного по адресу steamkeys-store.ru.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">
                    <Icon name="Info" size={20} className="inline mr-2" />
                    Важная информация:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Используя наш сайт, вы соглашаетесь со всеми условиями данного Соглашения</li>
                    <li>Если вы не согласны с какими-либо условиями, не используйте наш сервис</li>
                    <li>Мы оставляем за собой право изменять условия с предварительным уведомлением</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Предмет соглашения</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    SteamKeys Store предоставляет услуги по продаже цифровых товаров - лицензионных ключей 
                    для активации программного обеспечения и компьютерных игр на платформе Steam и других 
                    цифровых платформах.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">
                      <Icon name="Package" size={20} className="inline mr-2" />
                      Мы предоставляем:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Лицензионные ключи для активации игр и программ</li>
                      <li>Техническую поддержку по вопросам активации</li>
                      <li>Информацию о товарах и их характеристиках</li>
                      <li>Безопасные способы оплаты</li>
                      <li>Гарантию подлинности всех ключей</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Регистрация и аккаунт</h2>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-3">
                      <Icon name="UserPlus" size={20} className="inline mr-2" />
                      Требования к пользователям:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Возраст не менее 18 лет или согласие родителей/опекунов</li>
                      <li>Предоставление достоверной контактной информации</li>
                      <li>Один аккаунт на одного пользователя</li>
                      <li>Сохранение конфиденциальности данных для входа</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-3">
                      <Icon name="AlertTriangle" size={20} className="inline mr-2" />
                      Ответственность пользователя:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Вы несете полную ответственность за все действия в вашем аккаунте</li>
                      <li>Обязаны немедленно сообщить о компрометации аккаунта</li>
                      <li>Запрещается передавать доступ к аккаунту третьим лицам</li>
                      <li>За нарушения мы можем заблокировать ваш аккаунт</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Порядок совершения покупок</h2>
                <div className="grid gap-4">
                  {[
                    {
                      step: "1",
                      title: "Выбор товара",
                      description: "Ознакомьтесь с описанием, системными требованиями и региональными ограничениями"
                    },
                    {
                      step: "2",
                      title: "Оформление заказа", 
                      description: "Добавьте товары в корзину и перейдите к оплате"
                    },
                    {
                      step: "3",
                      title: "Оплата",
                      description: "Выберите удобный способ оплаты и произведите платеж"
                    },
                    {
                      step: "4",
                      title: "Получение ключа",
                      description: "После подтверждения оплаты ключ будет отправлен на email"
                    },
                    {
                      step: "5",
                      title: "Активация",
                      description: "Активируйте ключ на соответствующей платформе согласно инструкции"
                    }
                  ].map(item => (
                    <div key={item.step} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Цены и оплата</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">
                      <Icon name="DollarSign" size={20} className="inline mr-2" />
                      Ценовая политика:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Все цены указаны в российских рублях с учетом НДС</li>
                      <li>Цены могут изменяться без предварительного уведомления</li>
                      <li>Действует цена, указанная на момент оформления заказа</li>
                      <li>Скидки и акции имеют ограниченный срок действия</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">
                      <Icon name="CreditCard" size={20} className="inline mr-2" />
                      Способы оплаты:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Банковские карты Visa/MasterCard</li>
                        <li>Система быстрых платежей (СБП)</li>
                        <li>ЮMoney (Яндекс.Деньги)</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-1">
                        <li>QIWI Кошелек</li>
                        <li>WebMoney</li>
                        <li>Мобильные платежи</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Доставка цифровых товаров</h2>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Zap" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Автоматическая доставка</h3>
                        <p className="text-gray-700 text-sm mt-1">
                          Большинство ключей доставляется автоматически в течение 1-5 минут после подтверждения оплаты
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Icon name="User" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Ручная доставка</h3>
                        <p className="text-gray-700 text-sm mt-1">
                          Некоторые товары доставляются вручную в течение 1-24 часов в рабочее время
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Способы доставки</h3>
                        <p className="text-gray-700 text-sm mt-1">
                          Ключи отправляются на email, указанный при регистрации, а также доступны в личном кабинете
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Гарантии и ответственность</h2>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">
                      <Icon name="Shield" size={20} className="inline mr-2" />
                      Наши гарантии:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Все ключи являются лицензионными и подлинными</li>
                      <li>Ключи не использовались ранее</li>
                      <li>Соответствие товара заявленному описанию</li>
                      <li>Возврат средств в случае невозможности активации по нашей вине</li>
                      <li>Техническая поддержка по вопросам активации</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-3">
                      <Icon name="AlertCircle" size={20} className="inline mr-2" />
                      Ограничение ответственности:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Мы не несем ответственности за работу серверов Steam и других платформ</li>
                      <li>Не гарантируем совместимость с вашим оборудованием</li>
                      <li>Не отвечаем за изменения в играх после их выхода</li>
                      <li>Максимальная ответственность ограничена стоимостью товара</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Запрещенные действия</h2>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">
                    <Icon name="XCircle" size={20} className="inline mr-2" />
                    Пользователям запрещается:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Перепродавать приобретенные ключи</li>
                      <li>Использовать ключи в коммерческих целях</li>
                      <li>Нарушать авторские права</li>
                      <li>Создавать фальшивые аккаунты</li>
                      <li>Использовать автоматизированные средства</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Обходить региональные ограничения</li>
                      <li>Предоставлять ложные данные</li>
                      <li>Злоупотреблять системой возвратов</li>
                      <li>Нарушать работу сайта</li>
                      <li>Распространять вредоносное ПО</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Интеллектуальная собственность</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Все права на игры и программное обеспечение принадлежат их правообладателям. 
                    Покупая ключ, вы получаете право на использование продукта согласно лицензионному 
                    соглашению разработчика.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">
                      <Icon name="Copyright" size={20} className="inline mr-2" />
                      Права на контент сайта:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Дизайн, тексты и изображения сайта защищены авторским правом</li>
                      <li>Запрещается копирование и использование без разрешения</li>
                      <li>Торговые марки принадлежат их владельцам</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Разрешение споров</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">
                      <Icon name="MessageSquare" size={20} className="inline mr-2" />
                      Досудебное урегулирование:
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Перед обращением в суд стороны обязуются попытаться разрешить спор путем переговоров.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Претензии направляются на email: support@steamkeys-store.ru</li>
                      <li>Срок рассмотрения претензии: 10 рабочих дней</li>
                      <li>Ответ направляется в письменном виде</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      <Icon name="Scale" size={20} className="inline mr-2" />
                      Применимое право:
                    </h3>
                    <p className="text-gray-700">
                      Настоящее соглашение регулируется законодательством Российской Федерации. 
                      Все споры подлежат рассмотрению в судах по месту нахождения продавца.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Контактная информация</h2>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">SteamKeys Store</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="flex items-center">
                        <Icon name="Building" size={18} className="mr-3 text-primary" />
                        <span>ИП Иванов Иван Иванович</span>
                      </p>
                      <p className="flex items-center">
                        <Icon name="FileText" size={18} className="mr-3 text-primary" />
                        <span>ОГРНИП: 123456789012345</span>
                      </p>
                      <p className="flex items-center">
                        <Icon name="Hash" size={18} className="mr-3 text-primary" />
                        <span>ИНН: 123456789012</span>
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="flex items-center">
                        <Icon name="Mail" size={18} className="mr-3 text-primary" />
                        <span>support@steamkeys-store.ru</span>
                      </p>
                      <p className="flex items-center">
                        <Icon name="Phone" size={18} className="mr-3 text-primary" />
                        <span>+7 (495) 123-45-67</span>
                      </p>
                      <p className="flex items-center">
                        <Icon name="MapPin" size={18} className="mr-3 text-primary" />
                        <span>г. Москва, ул. Тестовая, д. 1</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Заключительные положения</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Настоящее соглашение вступает в силу с момента начала использования сайта 
                    и действует до отказа пользователя от использования сервиса или блокировки 
                    аккаунта администрацией.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-blue-800 text-sm">
                      <Icon name="Info" size={16} className="inline mr-2" />
                      Продолжая использовать наш сайт, вы подтверждаете, что прочитали, 
                      поняли и согласны соблюдать все условия данного соглашения.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;