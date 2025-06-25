import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "Тарифы", path: "/pricing", icon: "CreditCard" },
    { name: "FAQ", path: "/faq", icon: "HelpCircle" },
    { name: "Контакты", path: "/contact", icon: "Phone" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Payeer Ads</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-cyan-500"
            >
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
