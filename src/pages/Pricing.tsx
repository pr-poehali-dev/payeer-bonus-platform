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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Выберите тариф
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Масштабируйте свой доход с ростом вашего трафика
          </p>
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
      </div>
    </div>
  );
};

export default Pricing;
