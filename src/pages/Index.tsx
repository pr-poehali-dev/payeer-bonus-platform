import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";

const Index = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🐕 Бульдог Кликер
          </h1>
          <p className="text-gray-600 mb-8">
            Зарабатывай условные единицы, кликая по бульдогу! Регистрируйся и
            начинай игру прямо сейчас.
          </p>

          {isAuthenticated ? (
            <div className="space-y-4">
              <p className="text-gray-600">
                Привет, <span className="font-semibold">{user?.username}</span>!
              </p>
              <Link to="/dashboard">
                <Button className="w-full">Перейти в личный кабинет</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                🎮 Кликай по бульдогу и зарабатывай монеты!
              </p>
              <p className="text-sm text-gray-500 mb-8">
                • 500 кликов каждые 30 минут
                <br />
                • 1 клик = 1 монета
                <br />• Отслеживай свой прогресс
              </p>

              <div className="space-y-3">
                <Link to="/login" className="block">
                  <Button className="w-full">Войти</Button>
                </Link>

                <Link to="/register" className="block">
                  <Button variant="outline" className="w-full">
                    Регистрация
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
