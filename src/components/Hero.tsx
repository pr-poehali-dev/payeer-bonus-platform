import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Payeer Advertising
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Автоматизированная рекламная платформа с мгновенными Payeer
            выплатами, защитой от ботов и многоуровневой реферальной программой
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
          <h3 className="text-2xl font-semibold mb-6">Начните зарабатывать</h3>
          <div className="space-y-4">
            <Input
              placeholder="Ваш email"
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
            />
            <Input
              placeholder="Payeer кошелек"
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
            />
            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3">
              <Icon name="Rocket" className="mr-2" size={20} />
              Регистрация
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400">24/7</div>
            <div className="text-sm text-gray-400">Автовыплаты</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">99.9%</div>
            <div className="text-sm text-gray-400">Защита от ботов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">10%</div>
            <div className="text-sm text-gray-400">Реферальный бонус</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400">5 мин</div>
            <div className="text-sm text-gray-400">Модерация</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
