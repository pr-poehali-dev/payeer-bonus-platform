import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "CreditCard",
      title: "Payeer Интеграция",
      description:
        "Автоматические выплаты на ваш Payeer кошелек каждые 24 часа. Минимальная сумма вывода от $1.",
      highlight: "Мгновенно",
    },
    {
      icon: "Shield",
      title: "Антифрод Защита",
      description:
        "ИИ-система распознавания ботов с точностью 99.9%. Защита от кликфрода и накрутки показов.",
      highlight: "AI-Powered",
    },
    {
      icon: "Users",
      title: "Реферальная Программа",
      description:
        "3-уровневая система: 10% с первого уровня, 5% со второго, 2% с третьего. Пожизненные выплаты.",
      highlight: "10% + 5% + 2%",
    },
    {
      icon: "CheckCircle",
      title: "Быстрая Модерация",
      description:
        "Автоматическая предмодерация + ручная проверка. Среднее время модерации рекламы 5 минут.",
      highlight: "5 минут",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современные технологии для максимизации вашего дохода
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-cyan-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                {feature.highlight}
              </div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
