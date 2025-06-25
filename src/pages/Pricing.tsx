import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const plans = [
    {
      name: "Базовый",
      price: "Бесплатно",
      features: [
        "До 1000 показов в день",
        "Базовая аналитика",
        "Email поддержка",
        "Минимальная выплата $5",
      ],
      popular: false,
    },
    {
      name: "Профи",
      price: "$29/мес",
      features: [
        "До 50 000 показов в день",
        "Расширенная аналитика",
        "Приоритетная поддержка",
        "Минимальная выплата $1",
        "Дополнительные форматы рекламы",
      ],
      popular: true,
    },
    {
      name: "Бизнес",
      price: "$99/мес",
      features: [
        "Неограниченные показы",
        "Персональный менеджер",
        "API доступ",
        "Белый список доменов",
        "Приоритетная модерация",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Прозрачные тарифы для вашего бизнеса
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Масштабируйте свой доход с ростом вашего трафика. Без скрытых
            комиссий и переплат.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Info" size={20} className="text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">
                Как найти стоимость?
              </span>
            </div>
            <p className="text-sm text-blue-700">
              Тарифы размещены на этой странице ниже. Выберите план по
              количеству показов в день.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 ${
                plan.popular
                  ? "border-blue-500 shadow-xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-4">
                  {plan.price}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">
            Часто задаваемые вопросы о тарифах
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Icon
                  name="DollarSign"
                  size={20}
                  className="text-green-500 mr-2"
                />
                Где найти актуальные цены?
              </h3>
              <p className="text-gray-600">
                Все актуальные тарифы всегда размещены на этой странице. Цены
                указаны в долларах США и включают все комиссии сервиса.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Icon
                  name="CreditCard"
                  size={20}
                  className="text-blue-500 mr-2"
                />
                Какие способы оплаты доступны?
              </h3>
              <p className="text-gray-600">
                Принимаем Payeer, банковские карты, криптовалюты. Оплата
                производится ежемесячно, автоматическое списание.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Icon
                  name="RefreshCw"
                  size={20}
                  className="text-purple-500 mr-2"
                />
                Можно ли изменить тариф?
              </h3>
              <p className="text-gray-600">
                Да, вы можете повысить или понизить тариф в любое время.
                Изменения вступают в силу с начала следующего расчётного
                периода.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
