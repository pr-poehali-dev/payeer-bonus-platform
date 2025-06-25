import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать зарабатывать?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам пользователей, которые уже получают
            стабильный доход с нашей рекламной платформой
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Input
                placeholder="Ваше имя"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
              <Input
                placeholder="Email адрес"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
              <Input
                placeholder="Payeer кошелек"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
            </div>
            <Button className="w-full md:w-auto bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 text-lg">
              <Icon name="Zap" className="mr-2" size={20} />
              Начать зарабатывать
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Shield" size={24} className="text-green-400" />
              <span>Безопасные выплаты</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Clock" size={24} className="text-yellow-400" />
              <span>Поддержка 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Award" size={24} className="text-purple-400" />
              <span>Лицензированная платформа</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
