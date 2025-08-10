import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RefundPolicy = () => {
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
              Политика возврата средств
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
                  SteamKeys Store стремится обеспечить высочайшее качество обслуживания своих клиентов. 
                  Данная политика возврата средств описывает условия и процедуры возврата денежных средств 
                  за приобретенные цифровые товары (игровые ключи).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Мы понимаем, что иногда могут возникнуть ситуации, требующие возврата средств, 
                  и готовы рассмотреть каждый случай индивидуально в соответствии с настоящей политикой.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Основания для возврата</h2>
                <div className="bg-green-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    <Icon name="CheckCircle" size={20} className="inline mr-2" />
                    Возврат возможен в следующих случаях:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Ключ не активируется на платформе Steam</li>
                    <li>Ключ уже был использован другим пользователем</li>
                    <li>Ключ не соответствует описанному товару</li>
                    <li>Ключ заблокирован регионально и не может быть активирован в вашем регионе</li>
                    <li>Техническая ошибка при покупке (двойное списание средств)</li>
                    <li>Мошеннические действия со стороны третьих лиц</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">
                    <Icon name="XCircle" size={20} className="inline mr-2" />
                    Возврат НЕ возможен в следующих случаях:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Ключ был успешно активирован на аккаунте Steam</li>
                    <li>Прошло более 30 дней с момента покупки</li>
                    <li>Изменились системные требования игры</li>
                    <li>Игра не понравилась по субъективным причинам</li>
                    <li>Ошибочная покупка без технических проблем</li>
                    <li>Нарушение правил использования Steam</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Сроки подачи заявки на возврат</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Icon name="Clock" size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>В течение 24 часов</strong> - для технических проблем с активацией ключа</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Clock" size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>В течение 7 дней</strong> - для прочих обоснованных случаев</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Clock" size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>До 30 дней</strong> - максимальный срок для рассмотрения особых случаев</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Процедура оформления возврата</h2>
                <div className="grid gap-4">
                  {[
                    {
                      step: "1",
                      title: "Подача заявки",
                      description: "Отправьте заявку на возврат через форму на сайте или на email support@steamkeys-store.ru"
                    },
                    {
                      step: "2", 
                      title: "Предоставление информации",
                      description: "Укажите номер заказа, описание проблемы и приложите скриншоты ошибок (если применимо)"
                    },
                    {
                      step: "3",
                      title: "Рассмотрение заявки", 
                      description: "Мы рассмотрим вашу заявку в течение 1-3 рабочих дней"
                    },
                    {
                      step: "4",
                      title: "Принятие решения",
                      description: "Вы получите уведомление о принятом решении по email"
                    },
                    {
                      step: "5",
                      title: "Возврат средств",
                      description: "При положительном решении средства будут возвращены в течение 5-10 рабочих дней"
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Способы возврата средств</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      <Icon name="CreditCard" size={20} className="inline mr-2" />
                      Банковские карты
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Возврат на карту, с которой была произведена оплата. Срок: 5-10 рабочих дней.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      <Icon name="Wallet" size={20} className="inline mr-2" />
                      Электронные кошельки
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Возврат на кошелек (ЮMoney, QIWI, WebMoney). Срок: 1-3 рабочих дня.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Частичные возвраты</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  В некоторых случаях мы можем предложить частичный возврат средств:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 bg-yellow-50 p-6 rounded-lg">
                  <li>При покупке набора ключей, если активируется только часть из них</li>
                  <li>При технических проблемах, которые можно решить альтернативными способами</li>
                  <li>В случае предоставления компенсации в виде скидки на следующую покупку</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Контактная информация</h2>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Служба поддержки:</h3>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <Icon name="Mail" size={18} className="mr-3 text-primary" />
                      <span>Email: support@steamkeys-store.ru</span>
                    </p>
                    <p className="flex items-center">
                      <Icon name="MessageCircle" size={18} className="mr-3 text-primary" />
                      <span>Telegram: @steamkeys_support</span>
                    </p>
                    <p className="flex items-center">
                      <Icon name="Clock" size={18} className="mr-3 text-primary" />
                      <span>Время работы: Ежедневно с 09:00 до 21:00 (МСК)</span>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Изменения в политике</h2>
                <p className="text-gray-700 leading-relaxed">
                  SteamKeys Store оставляет за собой право изменять данную политику возврата. 
                  Все изменения вступают в силу с момента публикации на сайте. 
                  Рекомендуем периодически просматривать данную страницу для получения актуальной информации.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RefundPolicy;