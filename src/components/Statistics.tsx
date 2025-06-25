import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Statistics = () => {
  const stats = [
    {
      label: "Активных пользователей",
      value: "45,892",
      icon: "Users",
      color: "text-blue-500",
    },
    {
      label: "Выплачено сегодня",
      value: "$23,847",
      icon: "DollarSign",
      color: "text-green-500",
    },
    {
      label: "Рекламных кампаний",
      value: "12,534",
      icon: "Target",
      color: "text-purple-500",
    },
    {
      label: "Средний CTR",
      value: "2.8%",
      icon: "TrendingUp",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Статистика в реальном времени
          </h2>
          <p className="text-xl text-gray-600">
            Живые данные нашей платформы за последние 24 часа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-2">
                <div
                  className={`mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3`}
                >
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className={stat.color}
                  />
                </div>
                <CardTitle className="text-3xl font-bold text-slate-800">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                ₽2,847,293
              </div>
              <div className="text-gray-300">Выплачено за месяц</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                15,234
              </div>
              <div className="text-gray-300">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                98.7%
              </div>
              <div className="text-gray-300">Uptime платформы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
