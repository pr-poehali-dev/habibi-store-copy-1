import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface GameKey {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  platform: string;
  discount?: number;
}

interface CartItem extends GameKey {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  const gameKeys: GameKey[] = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: 1299,
      originalPrice: 1999,
      rating: 4.2,
      image: "img/8487c539-1da6-4a76-92f2-ecaa416186ea.jpg",
      platform: "Steam",
      discount: 35
    },
    {
      id: 2,
      title: "The Witcher 3: Wild Hunt",
      price: 599,
      originalPrice: 999,
      rating: 4.9,
      image: "img/8487c539-1da6-4a76-92f2-ecaa416186ea.jpg",
      platform: "Steam",
      discount: 40
    },
    {
      id: 3,
      title: "Grand Theft Auto V",
      price: 899,
      rating: 4.5,
      image: "img/8487c539-1da6-4a76-92f2-ecaa416186ea.jpg",
      platform: "Steam"
    },
    {
      id: 4,
      title: "Red Dead Redemption 2",
      price: 1799,
      originalPrice: 2499,
      rating: 4.7,
      image: "img/8487c539-1da6-4a76-92f2-ecaa416186ea.jpg",
      platform: "Steam",
      discount: 28
    },
    {
      id: 5,
      title: "FIFA 24",
      price: 2299,
      rating: 4.1,
      image: "img/8487c539-1da6-4a76-92f2-ecaa416186ea.jpg",
      platform: "Steam"
    },
    {
      id: 6,
      title: "Call of Duty: Modern Warfare II",
      price: 3199,
      originalPrice: 3999,
      rating: 4.3,
      image: "img/8487c539-1da6-4a76-92f2-ecaa416186ea.jpg",
      platform: "Steam",
      discount: 20
    }
  ];

  const addToCart = (game: GameKey) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === game.id);
      if (existing) {
        return prev.map(item => 
          item.id === game.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...game, quantity: 1 }];
    });
  };

  const removeFromCart = (gameId: number) => {
    setCart(prev => prev.filter(item => item.id !== gameId));
  };

  const updateQuantity = (gameId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(gameId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === gameId 
        ? { ...item, quantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Icon key="half" name="StarHalf" size={16} className="text-yellow-400 fill-current" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="Star" size={16} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">SteamKeys Store</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  activeSection === 'home' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('catalog')}
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  activeSection === 'catalog' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                Каталог
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {getTotalItems() > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0">
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                    <SheetDescription>
                      {cart.length === 0 ? 'Ваша корзина пуста' : `Товаров в корзине: ${getTotalItems()}`}
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.title}</h4>
                          <p className="text-primary font-semibold">{item.price} ₽</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive" 
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    {cart.length > 0 && (
                      <div className="border-t pt-4 mt-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-semibold">Итого:</span>
                          <span className="text-xl font-bold text-primary">{getTotalPrice()} ₽</span>
                        </div>
                        <Button className="w-full" size="lg">
                          Оформить заказ
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <Button className="md:hidden" variant="ghost">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Лучшие Steam-ключи
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Покупайте игровые ключи по выгодным ценам. Мгновенная доставка, гарантия качества.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => setActiveSection('catalog')}
            >
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      )}

      {/* Catalog Section */}
      {activeSection === 'catalog' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Каталог игр</h2>
              <div className="flex items-center space-x-4">
                <Button variant="outline">
                  <Icon name="Filter" size={18} className="mr-2" />
                  Фильтры
                </Button>
                <Button variant="outline">
                  <Icon name="ArrowUpDown" size={18} className="mr-2" />
                  Сортировка
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gameKeys.map(game => (
                <Card key={game.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {game.discount && (
                        <Badge className="absolute top-3 left-3 bg-red-500">
                          -{game.discount}%
                        </Badge>
                      )}
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary">{game.platform}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2 line-clamp-2">{game.title}</CardTitle>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {renderStars(game.rating)}
                      <span className="text-sm text-gray-600 ml-1">({game.rating})</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl font-bold text-primary">{game.price} ₽</span>
                      {game.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{game.originalPrice} ₽</span>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full"
                      onClick={() => addToCart(game)}
                    >
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Почему выбирают нас?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Мгновенная доставка</h3>
              <p className="text-gray-600">Получите ключи сразу после оплаты на email</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">100% работающие ключи или возврат денег</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Percent" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Выгодные цены</h3>
              <p className="text-gray-600">Лучшие цены на рынке и постоянные скидки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Gamepad2" size={28} className="text-primary" />
              <span className="text-2xl font-bold">SteamKeys Store</span>
            </div>
            <p className="text-gray-400 mb-4">Лучший магазин игровых ключей</p>
            <div className="flex justify-center space-x-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  const newWindow = window.open();
                  if (newWindow) {
                    newWindow.location.href = '/src/pages/RefundPolicy.tsx';
                  }
                }}
              >
                Политика возврата
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  const newWindow = window.open();
                  if (newWindow) {
                    newWindow.location.href = '/src/pages/PrivacyPolicy.tsx';
                  }
                }}
              >
                Конфиденциальность
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  const newWindow = window.open();
                  if (newWindow) {
                    newWindow.location.href = '/src/pages/TermsOfService.tsx';
                  }
                }}
              >
                Пользовательское соглашение
              </Button>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4">
              <p className="text-gray-400 text-sm">© 2024 SteamKeys Store. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;